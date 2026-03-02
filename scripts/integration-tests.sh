#!/usr/bin/env bash
set -euo pipefail

PKG_FILE="$PWD/$(npm pack --silent | tail -n 1)"
git clone https://github.com/emil-todirascu/integration-tests.git --depth 1
cd integration-tests

# Integration fixtures keep tooling in devDependencies.
# Force npm to include them even when CI sets production defaults.
export npm_config_production=false
export NPM_CONFIG_INCLUDE=dev

GREP='.*'
while getopts 'g:' OPTION; do
  case "$OPTION" in
    g)
      GREP="$OPTARG"
      ;;
  esac
done

for DIR in *; do
  MATCH_COUNT="$(echo "$DIR" | egrep -c -e "$GREP" || true)"
  if [ -f "$DIR/package.json" ] && [ "$MATCH_COUNT" -gt 0 ]; then
    echo "=============================================================="
    echo " ${DIR} with ${PKG_FILE}"
    echo "=============================================================="

    cd "./$DIR"

    echo "[diagnostic] node=$(node -v) npm=$(npm -v)"
    echo "[diagnostic] NODE_ENV=${NODE_ENV:-<unset>}"
    echo "[diagnostic] npm_config_omit=${npm_config_omit:-<unset>}"
    echo "[diagnostic] npm_config_production=${npm_config_production:-<unset>}"
    echo "[diagnostic] NPM_CONFIG_INCLUDE=${NPM_CONFIG_INCLUDE:-<unset>}"
    echo "[diagnostic] npm config get omit=$(npm config get omit || true)"
    echo "[diagnostic] npm config get production=$(npm config get production || true)"
    echo "[diagnostic] npm config get include=$(npm config get include || true)"

    npm install > /dev/null
    # Ignore peerdependency issues.
    npm install "$PKG_FILE" || true

    echo "[diagnostic] installed Coffee packages:"
    npm ls coffeescript coffee-script --depth=0 || true

    if [ -f "karma.conf.coffee" ]; then
      if ! node -e "require('coffeescript/register')" >/dev/null 2>&1 &&
        ! node -e "require('coffee-script/register')" >/dev/null 2>&1; then
        echo "[diagnostic] ERROR: no CoffeeScript register module available for this fixture" >&2
        exit 1
      fi
    fi

    npm test
    cd ..
  fi
done
