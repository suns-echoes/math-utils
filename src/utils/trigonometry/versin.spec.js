import { versin } from './versin.js';


describe('Versin', () => {
	it('returns proper value for 0', () => {
		const result = versin(0);

		expect(result).to.equal(0);
	});

	it('returns proper value for PI', () => {
		const result = versin(Math.PI);

		expect(result).to.equal(2);
	});
});
