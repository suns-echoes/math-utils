import { fixFloat } from '../../tools/fix-float.js';
import { degToRad } from '../../conversion/deg-to-rad.js';
import { rotate } from './rotate.js';


describe('Rotate point', () => {
	it('returns proper point cordinates', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90)
		);

		expect(p.x).to.equal(5);
		expect(fixFloat(p.y)).to.equal(-3);
	});

	it('returns proper point cordinates (counter clockwise)', () => {
		const p = rotate(
			{ x: 3, y: 5 },
			degToRad(90),
			false
		);

		expect(p.x).to.equal(-5);
		expect(fixFloat(p.y)).to.equal(3);
	});
});
