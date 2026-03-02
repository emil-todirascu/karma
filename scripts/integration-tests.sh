PKG_FILE="$PWD/$(npm pack --silent | tail -n 1)"
git clone https://github.com/emil-todirascu/integration-tests.git --depth 1
cd integration-tests

# Integration fixtures keep tooling in devDependencies.
# Force npm to include them even when CI sets production defaults.
export npm_config_production=false
export NPM_CONFIG_INCLUDE=dev

./run.sh "$PKG_FILE"
