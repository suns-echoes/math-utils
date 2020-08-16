import { versin } from './versin.js';


describe('Versed sine', () => {
	it('returns value for 0', () => {
		const result = versin(0);

		expect(result).to.equal(0);
	});

	it('returns value for π', () => {
		const result = versin(Math.PI);

		expect(result).to.equal(2);
	});

	it('throws if "theta" has invalid type', () => {
		function fail() {
			versin(null);
		}

		expect(fail).to.throw(TypeError);
	});
});
