#!/bin/bash

set -e

if [ ! -e vana-support ]; then
  mkdir vana-support
fi

if [ -e vana-support/node_modules ]; then
  echo "vana-support/node_modulesフォルダが存在するため、node_modulesのコピーをスキップします"
else
  cp -r node_modules vana-support/node_modules
fi

cp -f index.js vana-support/
cp -f package.json vana-support/
cp -f yarn.lock vana-support/
