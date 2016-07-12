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
