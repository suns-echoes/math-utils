import { reflectX } from './reflect-x.js';


describe('Reflect point over x axis', () => {
	it('returns proper point cordinates', () => {
		const p = reflectX(
			{ x: -3, y: 5.5 }
		);

		expect(p.x).to.equal(3);
		expect(p.y).to.equal(5.5);
	});
});
