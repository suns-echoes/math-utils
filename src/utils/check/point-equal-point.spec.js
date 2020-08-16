import { pointEqualPoint } from './point-equal-point.js';


describe('Point equal point', () => {
	it('returns true for the same coordinates', () => {
		const eq = pointEqualPoint(
			{ x: 0, y: 1 },
			{ x: 0, y: 1 },
		);

		expect(eq).to.be.true;
	});

	it('returns false for different coordinates', () => {
		const eq = pointEqualPoint(
			{ x: 0, y: 1 },
			{ x: 2, y: 3 },
		);

		expect(eq).to.be.false;
	});

	it('throws if "pointA" has invalid type', () => {
		const fail = () => {
			pointEqualPoint(null, { x: 1, y: 1 });
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "pointB" has invalid type', () => {
		const fail = () => {
			pointEqualPoint({ x: 1, y: 1 }, null);
		};

		expect(fail).to.throw(TypeError);
	});
});
