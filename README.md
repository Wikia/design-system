# Fandom Design System

Reference Page and documentation are available at [http://fandomdesignsystem.com](http://fandomdesignsystem.com).

## Setup

To install packages you need to set `ARTIFACTORY_NPM_TOKEN` environment value first. You might already have this token set in your global .npmrc file,
because you've executed `npm login --scope=fandom` script before. In order to make your life easier we prepared a command that will retrieve this token automatically. Just run this command:

```shell
source scripts/set-artifactory-token.sh
```

## Deploying test version

To deploy test version you need to run:
```shell
yarn release-test
```
This command will update package patch version + it will append `-test.<number>` tag.
If you need to use another tag (i.e. if tag is already in use) you can pass it as argument to release-test script, like so:
```shell
yarn release-test <custom-tag>
# e.g.
yarn release-test my-test
```
Running release-test command multiple times will increment tag number, so you can deploy multiple versions.

## Confluence page
https://wikia-inc.atlassian.net/wiki/display/DESYS/Design+System

## Contributors
[Contribute to this project](http://fandomdesignsystem.com/#/overview/contributing)

See all [contributors on GitHub](https://github.com/Wikia/design-system/graphs/contributors).

## i18n
Localization messages for Design System components

### Crowdin
See https://wikia-inc.atlassian.net/wiki/display/INT/i18n+tools for information on getting the design system i18n files to and from crowdin.

## Copyright
Code and documentation copyright 2018 Fandom, Inc.

**NOTE**: code and images contained within this repo are **NOT** licensed for general use.  Please contact us at http://fandom.wikia.com/about#contact if you're interested in licensing any part of this repo.

## Installation

* `git clone <repository-url>` this repository
* `cd my-app`
* `yarn install`

## Running / Development

* `yarn dev`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js -- --fix`

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
