import { distanceFromOrigin } from './distance-from-origin.js';


describe('Distance from otigin', () => {
	it('calculates distance of (0,0) from origin (0,0) (default)', () => {
		const d = distanceFromOrigin({ x: 0, y: 0 });

		expect(d).to.equal(0);
	});

	it('calculates distance of (0,0) from origin (0,0)', () => {
		const d = distanceFromOrigin({ x: 0, y: 0 }, { x: 0, y: 0 });

		expect(d).to.equal(0);
	});

	it('calculates distance of (4,3) from origin (0,0) (default)', () => {
		const d = distanceFromOrigin({ x: 4, y: 3 });

		expect(d).to.equal(5);
	});

	it('calculates distance of (4,3) from origin (0,0)', () => {
		const d = distanceFromOrigin({ x: 4, y: 3 }, { x: 0, y: 0 });

		expect(d).to.equal(5);
	});

	it('calculates distance of (2,1) from origin (-2,-1) (default)', () => {
		const d = distanceFromOrigin({ x: 2, y: 2 }, { x: -2, y: -1 });

		expect(d).to.equal(5);
	});

	it('calculates distance of (2,1) from origin (-2,-1)', () => {
		const d = distanceFromOrigin({ x: 6, y: -9 }, { x: -5, y: 3 });

		expect(d).to.equal(16.278820596099706);
	});
});
