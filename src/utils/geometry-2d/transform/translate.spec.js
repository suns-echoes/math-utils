import { translate } from './translate.js';


describe('Translate point by vector', () => {
	it('returns translated point', () => {
		const p = translate({ x: -3, y: 5.5 }, { x: 5, y: -7.5 });

		expect(p.x).to.equal(2);
		expect(p.y).to.equal(-2);
	});

	it('throws if "point" has invalid type', () => {
		function fail() {
			translate(null, { x: 5, y: -7.5 });
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "vector" has invalid type', () => {
		function fail() {
			translate({ x: -3, y: 5.5 }, null);
		}

		expect(fail).to.throw(TypeError);
	});
});
