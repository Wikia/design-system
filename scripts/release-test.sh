#!/bin/bash

VERSION_TAG="test"

if [[ ! -z "$1" ]]; then
	VERSION_TAG=$1
fi

yarn version --no-git-tag-version --prerelease --preid $VERSION_TAG
yarn publish
