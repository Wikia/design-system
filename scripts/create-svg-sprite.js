/* eslint-env node */
const util = require('util');
const path = require('path');
const fs = require('fs');
const svgStore = require('svgstore');

function relative(p) {
	return path.join(__dirname, p);
}

const svgStoreOptions = {
	inline: true,
	svgAttrs: {
		style: 'position: absolute; width: 0; height: 0;',
		width: '0',
		height: '0',
		version: '1.1',
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink'
	}
}

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

async function buildSprite() {
	const files = await getFiles();

	let store = svgStore(svgStoreOptions);

	for (const [filename, file] of files) {
		store = store.add(getFileId(filename), file);
	}

	fs.writeFileSync(relative('../dist/svg/sprite.svg'), store);
}

async function getFiles() {
	const filenames = await readDir(relative('../style-guide/assets'));
	const files = await Promise.all(filenames.map(filename => {
		const filepath = relative(`../style-guide/assets/${filename}`)
		return readFile(filepath);
	}));

	return files.map((file, index) => [filenames[index], file]);
}

function getFileId(filename) {
	return filename.replace(/\.svg$/, '');
}

buildSprite()
