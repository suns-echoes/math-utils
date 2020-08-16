import { translateX } from './translate-x.js';


describe('Translate point x coordinate', () => {
	it('returns proper point cordinates', () => {
		const p = translateX(
			{ x: -3, y: 5.5 },
			{ x: 5, y: -7.5 }
		);

		expect(p.x).to.equal(2);
		expect(p.y).to.equal(5.5);
	});

	it('throws if "point" has invalid type', () => {
		function fail() {
			translateX(null, { x: 5, y: -7.5 });
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "vector" has invalid type', () => {
		function fail() {
			translateX({ x: -3, y: 5.5 }, null);
		}

		expect(fail).to.throw(TypeError);
	});
});
