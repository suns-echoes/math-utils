import { translate } from './translate.js';


describe('Translate point', () => {
	it('returns proper point cordinates', () => {
		const p = translate(
			{ x: -3, y: 5.5 },
			{ x: 5, y: -7.5 }
		);

		expect(p.x).to.equal(2);
		expect(p.y).to.equal(-2);
	});
});
