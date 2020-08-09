import { angleBetweenTreePoints } from './angle-between-tree-points.js';
import { radToDeg } from '../conversion/rad-to-deg.js';


describe('Angle between tree points', () => {
	it('returns proper angle (90 deg)', () => {
		const theta = angleBetweenTreePoints(
			{ x: 0, y: 0 },
			{ x: 0, y: 1 },
			{ x: 1, y: 0 }
		);

		expect(radToDeg(theta)).to.equal(-90);
	});

	it('returns proper angle (-90 deg)', () => {
		const theta = angleBetweenTreePoints(
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 0, y: 1 }
		);

		expect(radToDeg(theta)).to.equal(90);
	});

	it('returns proper angle (45 deg)', () => {
		const theta = angleBetweenTreePoints(
			{ x: 0, y: 0 },
			{ x: 1, y: 1 },
			{ x: 1, y: 0 }
		);

		expect(radToDeg(theta)).to.equal(-45);
	});

	it('returns proper angle (135 deg)', () => {
		const theta = angleBetweenTreePoints(
			{ x: 0, y: 0 },
			{ x: 1, y: 1 },
			{ x: 0, y: -1 }
		);

		expect(radToDeg(theta)).to.equal(-135);
	});
});
