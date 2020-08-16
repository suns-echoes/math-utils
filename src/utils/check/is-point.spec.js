import { isPoint } from './is-point.js';


describe('Is Point', () => {
	it('returns true for valid point object', () => {
		const result = isPoint({ x: 0, y: 1 });

		expect(result).to.be.true;
	});

	it('returns false for invalid object', () => {
		const result = isPoint({ x: 0, y: 'nope' });

		expect(result).to.be.false;
	});

	it('returns false for invalid type', () => {
		const result = isPoint(9);

		expect(result).to.be.false;
	});
});
