# Wikia | Design System Reference Page

## Links

- Wikia | Design System: https://github.com/Wikia/design-system
- Reference Page Preview: https://wikia.github.io/design-system-reference-page

## How to start developing

There are two possible setups: basic and advanced, pick one and start developing.
You can always change to different one easily.

### Basic setup

Choose basic setup when you want to work on Reference Page alone.

1. Download repository
1. Go to repository
1. Run command: `npm run setup`, to install dependencies
1. Run command: `npm run dev`, to build Reference Page and to watch files
1. Start developing

### Advanced setup

Choose advanced setup when you want to work on both Design System and Reference Page.
Changes made in Design System will be automatically reflected on Reference Page.

1. Download repository
1. Download Wikia | Design System repository (make sure that both repositories are in the same directory)
1. Go to Wikia | Design System Reference Page repository
1. Run command: `npm run setup`, to install dependencies
1. Run command: `npm run link`, to use your local Design System
1. Run command: `npm run dev`, to build Reference Page and to watch files
1. Start developing

## Scripts

- `npm run setup` - install all dependencies like node modules and bower components
- `npm run link` - creates symlink to design system repository stored on your machine instead of using repository downloaded from web
- `npm run build` - build Reference Page and store output in *index.html*
- `npm run dev` - build Reference Page on each file change
- `npm run test` - run Visual Regression Tests (this shouldn't be run manually, see [Visual Regression Testing](#visual-regression-testing))
- `npm run update-baseline` - run Visual Regression Tests and update the baseline images (this shouldn't be run manually, see [Visual Regression Testing](#visual-regression-testing))

## Live page reload

Running `npm run dev` will rebuild files on each change, but to see them live you have to refresh page in browser.
If you want it to be automatically, follow these steps:

1. Install [livereload browser extension](http://livereload.com/extensions/)
1. Open Reference Page index.html (make sure that page is served from server, because accessing page from *file://* protocol will not work)
1. Make change in code
1. Enjoy your fresh page

If you are using IDE from JetBrains like IntelliJ IDEA, you can access Reference Page by:

1. Right click on *index.html*
1. Select *Open in browser* and choose browser that you have livereload extension installed

## Visual Regression Testing

We use [visual-regression-testing](https://github.com/Wikia/visual-regression-testing) library to run tests that compare the look of the Design System Reference Page before and after the change.
Tests are running always on the same QA VM which makes results consistent. How the page looks depends not just on the code but also on the system, browser, fonts installed, screen size and so on. Comparing tests results between different systems doesn't make much sense as they will always differ. That's why we don't recommend running the VRT locally.
Tests are started on every push to the repo and if they fail on your branch you can't merge it to the `gh-pages` one. When the tests fail Jenkins will add a commit comment with two links:
1. Jenkins workspace where you can see screenshots before and after the change and their diffs.
1. Jenkins job that will update the baseline on your branch. Run it when you're sure that the changes were correct.
