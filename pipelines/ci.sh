# !/bin/bash

set -Eeo pipefail


##### Get parameters based on environment. This will be moved to SSM in the next update.
DEPLOY_BUCKET_NAME="s3://oliver.bilbie.co.uk"
CF_DISTRIBUTION_ID="E1CDADP2S7DONT"


##### Deploy the frontend #####
echo "[INFO] Installing frontend dependencies"
yarn --prod

echo "[INFO] Building frontend"
yarn build

echo "[INFO] Writing frontend files to S3"
aws s3 cp build $DEPLOY_BUCKET_NAME --recursive

echo "[INFO] Invalidating Cloudfront cache"
aws cloudfront create-invalidation --distribution-id $CF_DISTRIBUTION_ID --paths '/*'
