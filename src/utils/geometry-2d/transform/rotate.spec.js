import { fixFloat } from '../../tools/fix-float.js';
import { degToRad } from '../../convert/deg-to-rad.js';
import { rotate } from './rotate.js';


describe('Rotate point around origin', () => {
	it('returns rotated point (default origin)', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90)
		);

		expect(p.x).to.equal(5);
		expect(fixFloat(p.y)).to.equal(-3);
	});

	it('returns rotated point (default origin, counter clockwise)', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90),
			undefined,
			false
		);

		expect(p.x).to.equal(-5);
		expect(fixFloat(p.y)).to.equal(3);
	});

	it('returns rotated point (custom origin)', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90),
			{ x: 1, y: 2 }
		);

		expect(p.x).to.equal(4);
		expect(fixFloat(p.y)).to.equal(0);
	});

	it('returns rotated point (custom origin, counter clockwise)', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90),
			{ x: 1, y: 2 },
			false
		);

		expect(p.x).to.equal(-2);
		expect(fixFloat(p.y)).to.equal(4);
	});

	it('throws if "point" has invalid type', () => {
		const fail = () => {
			rotate(null, 3.14);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "theta" has invalid type', () => {
		const fail = () => {
			rotate({ x: 3, y: 5 }, null);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "origin" has invalid type', () => {
		const fail = () => {
			rotate({ x: 3, y: 5 }, 3.14, null);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "origin" has invalid type', () => {
		const fail = () => {
			rotate({ x: 3, y: 5 }, 3.14, { x: 1, y: 2 }, null);
		};

		expect(fail).to.throw(TypeError);
	});
});
