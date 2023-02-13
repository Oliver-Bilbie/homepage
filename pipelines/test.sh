# !/bin/bash

set -Eeo pipefail

##### Test frontend #####
echo "[INFO] Installing frontend development dependencies"
yarn

echo "[INFO] Linting frontend source code using eslint"
yarn lint

echo "[INFO] Running frontend tests"
yarn test

echo "[INFO] Testing completed successfully"