import { translateY } from './translate-y.js';


describe('Translate point', () => {
	it('returns proper point cordinates', () => {
		const p = translateY(
			{ x: -3, y: 5.5 },
			{ x: 5, y: -7.5 }
		);

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(-2);
	});
});
