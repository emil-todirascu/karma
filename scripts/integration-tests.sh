PKG_FILE="$PWD/$(npm pack)"
git clone https://github.com/karma-runner/integration-tests.git --depth 1
cd integration-tests
# Ensure the CoffeeScript fixture has all runtime dependencies expected by
# karma.conf.coffee.
if [ -d coffee ]; then
  npm install --prefix coffee --no-save \
    coffeescript \
    jasmine-core \
    karma-jasmine \
    karma-coffee-preprocessor \
    karma-firefox-launcher
fi
./run.sh $PKG_FILE
