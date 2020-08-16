import { cos } from './cos.js';


describe('Cosine', () => {
	it('returns value for 0', () => {
		const result = cos(0);

		expect(result).to.equal(1);
	});

	it('returns value for π', () => {
		const result = cos(Math.PI);

		expect(result).to.equal(-1);
	});

	it('throws if "theta" has invalid type', () => {
		function fail() {
			cos(null);
		}

		expect(fail).to.throw(TypeError);
	});
});
