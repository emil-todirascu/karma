PKG_FILE="$PWD/$(npm pack)"
git clone https://github.com/karma-runner/integration-tests.git --depth 1
cd integration-tests
# Ensure the CoffeeScript fixture has all runtime dependencies expected by
# karma.conf.coffee.
if [ -d coffee ]; then
  node -e "const fs=require('fs');const p='coffee/package.json';const pkg=JSON.parse(fs.readFileSync(p,'utf8'));pkg.dependencies=pkg.dependencies||{};pkg.scripts=pkg.scripts||{};const req=['coffeescript','jasmine-core','karma-jasmine','karma-coffee-preprocessor','karma-firefox-launcher'];for(const name of req){const version=(pkg.dependencies&&pkg.dependencies[name])||(pkg.devDependencies&&pkg.devDependencies[name])||'latest';pkg.dependencies[name]=version;}pkg.scripts.pretest='npm install --no-save coffeescript jasmine-core karma-jasmine karma-coffee-preprocessor karma-firefox-launcher';fs.writeFileSync(p,JSON.stringify(pkg,null,2)+'\n')"
  npm install --prefix coffee --no-save \
    coffeescript \
    jasmine-core \
    karma-jasmine \
    karma-coffee-preprocessor \
    karma-firefox-launcher
fi
NPM_CONFIG_PRODUCTION=false \
npm_config_production=false \
npm_config_include=dev \
npm_config_omit= \
./run.sh $PKG_FILE
