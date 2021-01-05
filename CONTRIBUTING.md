# How To Contribute

## Installation

* `git clone <repository-url>`
* `cd design-system`
* `yarn install`

## Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js -- --fix`

## Running tests

`yarn test`

## Running the dummy application

* `yarn dev`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

## Publishing new version

If you wish to publish a new version, add 1 of 3 available tags:

* publish-major-on-merge
* publish-minor-on-merge
* publish-patch-on-merge

Release process will be handled by Jenkins pipeline.

## Deploying documentation

We host our documentation on GitHub Pages. Code lives inside `gh-pages` branch.
To deploy a new version of documentation please add `deploy-docs-on-merge` label to your pull request.
Documentation deployment is handled by Jenkins, so it'll be fired after merge to master.
