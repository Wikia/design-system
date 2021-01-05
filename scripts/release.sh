#!/bin/bash

if ! [[ "$1" =~ ^(patch|minor|major)$ ]]; then
	echo "Valid parameters are: patch, minor or major"
	exit 1
fi

STRATEGY="--$1"

yarn version $STRATEGY
yarn publish
git push origin master
git push origin --tags

