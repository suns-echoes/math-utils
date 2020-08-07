import { reflectY } from './reflect-y.js';


describe('Reflect point', () => {
	it('returns proper point cordinates', () => {
		const p = reflectY(
			{ x: -3, y: 5.5 }
		);

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(-5.5);
	});
});
