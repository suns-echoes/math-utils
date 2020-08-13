import { translate } from './translate.js';


describe('Translate point', () => {
	it('returns translated point', () => {
		const p = translate({ x: -3, y: 5.5 }, 5, -7.5);

		expect(p.x).to.equal(2);
		expect(p.y).to.equal(-2);
	});

	it('returns translated point (default x)', () => {
		const p = translate({ x: -3, y: 5.5 }, undefined, -7.5);

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(-2);
	});

	it('returns translated point (default y)', () => {
		const p = translate({ x: -3, y: 5.5 }, 5);

		expect(p.x).to.equal(2);
		expect(p.y).to.equal(5.5);
	});
});
