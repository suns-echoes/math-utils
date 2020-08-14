import { translate } from './translate.js';


describe('Translate point', () => {
	it('returns translated point', () => {
		const p = translate({ x: -3, y: 5.5 }, 5, -7.5);

		expect(p.x).to.equal(2);
		expect(p.y).to.equal(-2);
	});

	it('throws if "point" has invalid type', () => {
		function fail() {
			translate(null, 1, 1);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "x" is invalid', () => {
		function fail() {
			translate({ x: -3, y: 5.5 }, null, -7.5);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "y" is invalid', () => {
		function fail() {
			const p = translate({ x: -3, y: 5.5 }, 5, null);
		}

		expect(fail).to.throw(TypeError);
	});
});
