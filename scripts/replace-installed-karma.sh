#!/usr/bin/env bash

set -euo pipefail

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <project-dir> <karma-package-tarball>" >&2
  exit 1
fi

project_dir=$1
package_tarball=$2
install_dir="$project_dir/node_modules/karma"

if [ ! -d "$project_dir/node_modules" ]; then
  echo "Expected node_modules in $project_dir. Run the target project's install step first." >&2
  exit 1
fi

if [ ! -f "$package_tarball" ]; then
  echo "Tarball not found: $package_tarball" >&2
  exit 1
fi

# Replace the installed karma package in place so any existing .bin/karma
# symlink keeps pointing at the maintained fork.
rm -rf "$install_dir"
mkdir -p "$install_dir"
tar -xzf "$package_tarball" --strip-components=1 -C "$install_dir" package

# Install the fork's own runtime dependencies inside the replaced package.
# Without this, module resolution can fall back to the host project's older
# transitive dependencies that were installed for upstream Karma.
npm install \
  --prefix "$install_dir" \
  --omit=dev \
  --ignore-scripts \
  --no-package-lock
