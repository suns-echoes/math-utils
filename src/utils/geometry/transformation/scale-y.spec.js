import { scaleY } from './scale-y.js';


describe('Scale point (Y coordinate)', () => {
	it('returns proper point cordinates', () => {
		const p = scaleY(
			{ x: -3, y: 5.5 },
			4
		);

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(22);
	});
});
