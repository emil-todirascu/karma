#!/usr/bin/env bash

set -euo pipefail

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <project-dir> <karma-package-tarball>" >&2
  exit 1
fi

project_dir=$1
package_tarball=$2
install_dir="$project_dir/node_modules/karma"
staging_dir="$project_dir/node_modules/.karma-maintained-staging-$$"
backup_dir="$project_dir/node_modules/.karma-maintained-backup-$$"

cleanup() {
  rm -rf "$staging_dir" "$backup_dir"
}

trap cleanup EXIT

if [ ! -d "$project_dir/node_modules" ]; then
  echo "Expected node_modules in $project_dir. Run the target project's install step first." >&2
  exit 1
fi

if [ ! -f "$package_tarball" ]; then
  echo "Tarball not found: $package_tarball" >&2
  exit 1
fi

# Stage the replacement first so the existing install is not destroyed unless
# extraction and dependency installation both succeed.
rm -rf "$staging_dir"
mkdir -p "$staging_dir"
tar -xzf "$package_tarball" --strip-components=1 -C "$staging_dir" package

# Install the fork's own runtime dependencies inside the replaced package.
# Without this, module resolution can fall back to the host project's older
# transitive dependencies that were installed for upstream Karma.
npm install \
  --prefix "$staging_dir" \
  --omit=dev \
  --ignore-scripts \
  --no-package-lock

# Swap the staged package into place only after it is fully prepared so any
# existing .bin/karma symlink continues to resolve through node_modules/karma.
if [ -d "$install_dir" ]; then
  mv "$install_dir" "$backup_dir"
fi

mv "$staging_dir" "$install_dir"
rm -rf "$backup_dir"
