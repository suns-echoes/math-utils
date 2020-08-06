import { fixFloat } from '../../tools/fix-float.js';
import { reflectOverLine } from './reflect-over-line.js';


describe('Reflect point over the line defined by two points', () => {
	it('reflects P(2,2) over Q(-1,0) and R(1,0)', () => {
		const { x, y } = reflectOverLine({ x: 2, y: 2 }, { x: -1, y: 0 }, { x: 1, y: 0 });

		expect(x).to.equal(2);
		expect(fixFloat(y)).to.equal(-2);
	});

	it('reflects P(2,2) over Q(-1,1) and R(1,-1)', () => {
		const { x, y } = reflectOverLine({ x: 2, y: 2 }, { x: -1, y: 1 }, { x: 1, y: -1 });

		expect(fixFloat(x)).to.equal(-2);
		expect(y).to.equal(-2);
	});

	it('reflects P(2,2) over Q(0,1) and R(0,-1)', () => {
		const { x, y } = reflectOverLine({ x: 2, y: 2 }, { x: 0, y: 1 }, { x: 0, y: -1 });

		expect(x).to.equal(-2);
		expect(fixFloat(y)).to.equal(2);
	});

	it('reflects P(2,2) over Q(1,1) and R(-1,-1)', () => {
		const { x, y } = reflectOverLine({ x: 2, y: 2 }, { x: 1, y: 1 }, { x: -1, y: -1 });

		expect(fixFloat(x)).to.equal(2);
		expect(y).to.equal(2);
	});

	it('reflects P(2,2) over Q(1,0) and R(-1,0)', () => {
		const { x, y } = reflectOverLine({ x: 2, y: 2 }, { x: 1, y: 0 }, { x: -1, y: 0 });

		expect(fixFloat(x)).to.equal(2);
		expect(y).to.equal(-2);
	});

	it('reflects P(2,2) over Q(1,-1) and R(-1,1)', () => {
		const { x, y } = reflectOverLine({ x: 2, y: 2 }, { x: 1, y: -1 }, { x: -1, y: 1 });

		expect(x).to.equal(-2);
		expect(fixFloat(y)).to.equal(-2);
	});

	it('reflects P(2,2) over Q(0,-1) and R(0,1)', () => {
		const { x, y } = reflectOverLine({ x: 2, y: 2 }, { x: 0, y: -1 }, { x: 0, y: 1 });

		expect(fixFloat(x)).to.equal(-2);
		expect(y).to.equal(2);
	});

	it('reflects P(2,2) over Q(-1,-1) and R(1,1)', () => {
		const { x, y } = reflectOverLine({ x: 2, y: 2 }, { x: -1, y: -1 }, { x: 1, y: 1 });

		expect(x).to.equal(2);
		expect(y).to.equal(2);
	});
});
