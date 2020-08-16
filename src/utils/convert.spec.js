const fs = require('fs');
const { promisify } = require('util');

import { convert } from './convert.js';


const readdir = promisify(fs.readdir);


const importPath = 'convert';
const dirPath = 'utils/convert';


async function findEntries() {
	const entities = await readdir(`./src/${dirPath}`);
	const matchNonSpecFiles = /^((?!\.spec\.js).)*\.js$/;
	const entries = [];

	for (const entity of entities) {
		if (matchNonSpecFiles.test(entity)) {
			const path = `./${importPath}/${entity}`;
			const module = await import(path);
			const keys = Object.keys(module);

			keys.forEach((key) => {
				if (typeof module[key] !== undefined) {
					if (key !== 'default' || module[key] !== module.default) {
						entries.push(key);
					}
				}
			});
		}
	}

	return entries;
}


describe('MathUtils.convert', () => {
	it('has named export for all existing entries', async () => {
		const exportedEntries = Object.keys(convert);
		const foundEntries = await findEntries();

		expect(exportedEntries).to.be.eql(foundEntries);
	});
});
