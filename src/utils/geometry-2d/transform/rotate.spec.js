import { fixFloat } from '../../tools/fix-float.js';
import { degToRad } from '../../convert/deg-to-rad.js';
import { rotate } from './rotate.js';


describe('Rotate point around origin', () => {
	it('returns rotated point cordinates (default origin)', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90)
		);

		expect(p.x).to.equal(5);
		expect(fixFloat(p.y)).to.equal(-3);
	});

	it('returns rotated point cordinates (default origin, counter clockwise)', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90),
			undefined,
			false
		);

		expect(p.x).to.equal(-5);
		expect(fixFloat(p.y)).to.equal(3);
	});

	it('returns rotated point cordinates (custom origin)', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90),
			{ x: 1, y: 2 }
		);

		expect(p.x).to.equal(4);
		expect(fixFloat(p.y)).to.equal(0);
	});

	it('returns rotated point cordinates (custom origin, counter clockwise)', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90),
			{ x: 1, y: 2 },
			false
		);

		expect(p.x).to.equal(-2);
		expect(fixFloat(p.y)).to.equal(4);
	});
});
