#!/bin/bash

# Install dependencies
clasp login
clasp create --type standalone

# Run the codebase
clasp push
clasp deploy -i 0
