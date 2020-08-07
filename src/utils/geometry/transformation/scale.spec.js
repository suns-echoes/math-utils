import { scale } from './scale.js';


describe('Scale point', () => {
	it('returns proper point cordinates', () => {
		const p = scale(
			{ x: -3, y: 5.5 },
			{ x: 4, y: -3.5 }
		);

		expect(p.x).to.equal(-12);
		expect(p.y).to.equal(-19.25);
	});
});
