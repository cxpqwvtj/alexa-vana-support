#!/bin/bash

set -e

if [ -e vana-support.zip ]; then
  rm -rf vana-support.zip
fi

zip -r vana-support.zip node_modules index.js utils
