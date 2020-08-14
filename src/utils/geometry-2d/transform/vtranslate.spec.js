import { vtranslate } from './vtranslate.js';


describe('Translate point by vector', () => {
	it('returns translated point', () => {
		const p = vtranslate({ x: -3, y: 5.5 }, { x: 5, y: -7.5 });

		expect(p.x).to.equal(2);
		expect(p.y).to.equal(-2);
	});
});
