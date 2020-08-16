import { isVector } from './is-vector.js';


describe('Is Vector', () => {
	it('returns true for valid vector object', () => {
		const result = isVector({ x: 0, y: 1 });

		expect(result).to.be.true;
	});

	it('returns false for invalid object', () => {
		const result = isVector({ x: 0, y: 'nope' });

		expect(result).to.be.false;
	});

	it('returns false for invalid type', () => {
		const result = isVector(9);

		expect(result).to.be.false;
	});
});
