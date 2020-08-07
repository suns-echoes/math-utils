import { fixFloat } from '../../tools/fix-float.js';
import { degToRad } from '../../conversion/deg-to-rad.js';
import { rotateAroundOrigin } from './rotate-around-origin.js';


describe('Rotate point around origin', () => {
	it('returns proper point cordinates (default origin)', () => {
		const p = rotateAroundOrigin(
			{ x: 3, y: 5 },
			degToRad(90)
		);

		expect(p.x).to.equal(5);
		expect(fixFloat(p.y)).to.equal(-3);
	});

	it('returns proper point cordinates (default origin, counter clockwise)', () => {
		const p = rotateAroundOrigin(
			{ x: 3, y: 5 },
			degToRad(90),
			undefined,
			false
		);

		expect(p.x).to.equal(-5);
		expect(fixFloat(p.y)).to.equal(3);
	});

	it('returns proper point cordinates', () => {
		const p = rotateAroundOrigin(
			{ x: 3, y: 5 },
			degToRad(90),
			{ x: 1, y: 2 }
		);

		expect(p.x).to.equal(4);
		expect(fixFloat(p.y)).to.equal(0);
	});
});
