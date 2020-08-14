import { distance } from './distance.js';


describe('Calculate distance between two points', () => {
	it('returns distance for 0x0', () => {
		const d = distance({ x: 0, y: 0 });

		expect(d).to.equal(0);
	});

	it('returns distance for 4x0', () => {
		const d = distance({ x: 4, y: 0 });

		expect(d).to.equal(4);
	});

	it('returns distance for 0x0', () => {
		const d = distance({ x: -2, y: -2 });

		expect(d).to.equal(Math.sqrt(8));
	});

	it('returns distance for 0x0', () => {
		const d = distance({ x: 0, y: 3 });

		expect(d).to.equal(3);
	});

	it('returns distance for 0x0', () => {
		const d = distance({ x: 5, y: 5 });

		expect(d).to.equal(Math.sqrt(50));
	});

	it('returns distance for (4,3) from origin (0,0)', () => {
		const d = distance({ x: 4, y: 3 }, { x: 0, y: 0 });

		expect(d).to.equal(5);
	});

	it('returns distance for (2,1) from origin (-2,-1) (default)', () => {
		const d = distance({ x: 2, y: 2 }, { x: -2, y: -1 });

		expect(d).to.equal(5);
	});

	it('returns distance for (2,1) from origin (-2,-1)', () => {
		const d = distance({ x: 6, y: -9 }, { x: -5, y: 3 });

		expect(d).to.equal(16.278820596099706);
	});

	it('throws if "point" has invalid type', () => {
		function fail() {
			distance(null);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "origin" has invalid type', () => {
		function fail() {
			distance({ x: 1, y: 2 }, null);
		}

		expect(fail).to.throw(TypeError);
	});
});
