PKG_FILE="$PWD/$(npm pack --silent | tail -n 1)"
git clone https://github.com/emil-todirascu/integration-tests.git --depth 1
cd integration-tests
./run.sh "$PKG_FILE"
