import { reflect } from './reflect.js';


describe('Reflect point', () => {
	it('returns proper point cordinates', () => {
		const p = reflect(
			{ x: -3, y: 5.5 }
		);

		expect(p.x).to.equal(3);
		expect(p.y).to.equal(-5.5);
	});
});
