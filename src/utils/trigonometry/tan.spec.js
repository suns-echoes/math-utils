import { fixFloat } from '../tools/fix-float.js';
import { tan } from './tan.js';


describe('Tangent', () => {
	it('returns value for 0', () => {
		const result = tan(0);

		expect(result).to.equal(0);
	});

	it('returns value for π / 4', () => {
		const result = tan(Math.PI / 4);

		expect(fixFloat(result)).to.equal(1);
	});

	it('returns value for π', () => {
		const result = tan(Math.PI);

		expect(fixFloat(result)).to.equal(0);
	});

	it('throws if "theta" has invalid type', () => {
		function fail() {
			tan(null);
		}

		expect(fail).to.throw(TypeError);
	});
});
