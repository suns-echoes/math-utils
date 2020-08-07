import { scaleX } from './scale-x.js';


describe('Scale point (x coordinate)', () => {
	it('returns proper point cordinates', () => {
		const p = scaleX(
			{ x: -3, y: 5.5 },
			4
		);

		expect(p.x).to.equal(-12);
		expect(p.y).to.equal(5.5);
	});
});
