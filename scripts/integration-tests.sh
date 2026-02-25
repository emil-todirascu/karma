PKG_FILE="$PWD/$(npm pack)"
git clone https://github.com/karma-runner/integration-tests.git --depth 1
cd integration-tests
# Ensure the CoffeeScript fixture can load karma.conf.coffee in CI.
if [ -d coffee ]; then
  npm install --prefix coffee --no-save coffeescript
fi
./run.sh $PKG_FILE
