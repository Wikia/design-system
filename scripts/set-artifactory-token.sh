#!/bin/sh

# Look inside global .npmrc
if [[ -f "$HOME/.npmrc" ]]; then
	AUTH_TOKEN=$(egrep '//artifactory.wikia-inc.com/artifactory/api/npm/wikia-npm/:_authToken=.+' "$HOME/.npmrc" | sed -E "s/^.+authToken=(.+)/\\1/")
	echo "Found token in $HOME/.npmrc"
	export ARTIFACTORY_NPM_TOKEN="$AUTH_TOKEN"
else
	echo "There's no token available at $HOME/.npmrc. Setting placeholder value"
	export ARTIFACTORY_NPM_TOKEN="placeholder"
fi
