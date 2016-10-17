#!/usr/bin/env bash

# Make sure we're in a good state.
git checkout ember-gh-pages
git pull
rm -rf reference-page/dist
npm run build

# Move to the "release" branch and make everything work.
git checkout gh-pages
git pull
ls -1 | grep -v -E '^reference-page$' | xargs rm -rf
cd reference-page
ls -1 | grep -v -E '^dist$' | xargs rm -rf
cd ..
mv reference-page/dist/* ./
mv reference-page/dist/.* ./
rmdir reference-page/dist

# Add everything and push it.
git commit -am "Update gh-pages"
git push
git checkout ember-gh-pages
git pull
