import { translateY } from './translate-y.js';


describe('Translate point y coordinate', () => {
	it('returns proper point cordinates', () => {
		const p = translateY(
			{ x: -3, y: 5.5 },
			{ x: 5, y: -7.5 }
		);

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(-2);
	});

	it('throws if "point" has invalid type', () => {
		function fail() {
			translateY(null, { x: 5, y: -7.5 });
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "vector" has invalid type', () => {
		function fail() {
			translateY({ x: -3, y: 5.5 }, null);
		}

		expect(fail).to.throw(TypeError);
	});
});
