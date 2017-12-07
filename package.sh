#!/bin/bash

set -e

if [ -e vana-support.zip ]; then
  rm -rf vana-support.zip
fi

zip -r -j vana-support.zip build/index.js
