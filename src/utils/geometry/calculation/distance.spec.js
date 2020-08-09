import { distance } from './distance.js';


describe('Calculate distance between two points', () => {
	it('calculates distance for 0x0', () => {
		const d = distance({ x: 0, y: 0 });

		expect(d).to.equal(0);
	});

	it('calculates distance for 4x0', () => {
		const d = distance({ x: 4, y: 0 });

		expect(d).to.equal(4);
	});

	it('calculates distance for 0x0', () => {
		const d = distance({ x: -2, y: -2 });

		expect(d).to.equal(Math.sqrt(8));
	});

	it('calculates distance for 0x0', () => {
		const d = distance({ x: 0, y: 3 });

		expect(d).to.equal(3);
	});

	it('calculates distance for 0x0', () => {
		const d = distance({ x: 5, y: 5 });

		expect(d).to.equal(Math.sqrt(50));
	});
});
