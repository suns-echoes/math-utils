import { angleBetweenTreePoints } from './angle-between-tree-points.js';
import { radToDeg } from '../convert/rad-to-deg.js';


describe('Angle between tree points', () => {
	it('returns angle for point set (90 deg)', () => {
		const theta = angleBetweenTreePoints(
			{ x: 0, y: 0 },
			{ x: 0, y: 1 },
			{ x: 1, y: 0 }
		);

		expect(radToDeg(theta)).to.equal(-90);
	});

	it('returns angle for point set (-90 deg)', () => {
		const theta = angleBetweenTreePoints(
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 0, y: 1 }
		);

		expect(radToDeg(theta)).to.equal(90);
	});

	it('returns angle for point set (45 deg)', () => {
		const theta = angleBetweenTreePoints(
			{ x: 0, y: 0 },
			{ x: 1, y: 1 },
			{ x: 1, y: 0 }
		);

		expect(radToDeg(theta)).to.equal(-45);
	});

	it('returns angle for point set (135 deg)', () => {
		const theta = angleBetweenTreePoints(
			{ x: 0, y: 0 },
			{ x: 1, y: 1 },
			{ x: 0, y: -1 }
		);

		expect(radToDeg(theta)).to.equal(-135);
	});

	it('returns angle for point set (0 deg)', () => {
		const theta = angleBetweenTreePoints(
			{ x: 0, y: 0 },
			{ x: 1, y: 1 },
			{ x: 1, y: 1 }
		);

		expect(radToDeg(theta)).to.equal(0);
	});

	it('throws if "centerPoint" has invalid type', () => {
		const fail = () => {
			angleBetweenTreePoints(
				null, { x: 1, y: 1 }, { x: 0, y: -1 }
			);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "pointA" has invalid type', () => {
		const fail = () => {
			angleBetweenTreePoints(
				{ x: 0, y: 0 }, null, { x: 0, y: -1 }
			);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "pointB" has invalid type', () => {
		const fail = () => {
			angleBetweenTreePoints(
				{ x: 0, y: 0 }, { x: 1, y: 1 }, null
			);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "pointA" or "pointB" has the same coordinates as "centerPoint"', () => {
		const fail1 = () => {
			angleBetweenTreePoints(
				{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 1 }
			);
		};

		const fail2 = () => {
			angleBetweenTreePoints(
				{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 0 }
			);
		};

		expect(fail1).to.throw(Error);
		expect(fail2).to.throw(Error);
	});
});
