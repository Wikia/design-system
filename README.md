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
1. Run command: `npm run setup`
1. Run command: `npm run dev`
1. Start developing

### Advanced setup

Choose advanced setup when you want to work on both Design System and Reference Page.
Changes made in Design System will be automatically reflected on Reference Page.

1. Download repository
1. Download Wikia | Design System repository (make sure that both repositories are in the same directory)
1. Go to Wikia | Design System Reference Page repository
1. Run command: `npm run setup`
1. Run command: `npm run link`
1. Run command: `npm run dev`
1. Start developing

## Scripts

- `npm run setup` - install all dependencies like node modules and bower components
- `npm run link` - creates symlink to design system repository stored on your machine instead of using repository downloaded from web
- `npm run build` - build Reference Page and store output in *index.html*
- `npm run dev` - build Reference Page on each file change

If you want your browser to reload the page on every rebuild you have to install [livereload browser extension](http://livereload.com/extensions/).
