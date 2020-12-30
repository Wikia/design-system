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

## Creating Pull Requests

In order to update documentation you need to run `yarn build:docs`.
The `yarn build` script will only build necessary files that can be used by other codebases without updating the documentation.
