const fs = require('fs');
const { promisify } = require('util');

import { MathUtils } from './math-utils.js';


const readdir = promisify(fs.readdir);


const modulesPath = './utils';


async function findEntries() {
	const entities = await readdir('./src/utils');
	const matchNonSpecFiles = /^((?!\.spec\.js).)*\.js$/;
	const entries = [];

	for (const entity of entities) {
		if (matchNonSpecFiles.test(entity)) {
			const path = `${modulesPath}/${entity}`;
			const module = await import(path);
			const keys = Object.keys(module);

			keys.forEach((key) => {
				if (typeof module[key] !== undefined) {
					entries.push(key);
				}
				else if (key !== 'default') {
					throw new Error(`"${entity}" module exports entity "${key}" that is undefined`);
				}
			});
		}
	}

	return entries;
}


describe('MathUtils', () => {
	it('has named export for all existing entries', async () => {
		const exportedEntries = Object.keys(MathUtils);
		const foundEntries = await findEntries();

		expect(exportedEntries).to.be.eql(foundEntries);
	});
});
