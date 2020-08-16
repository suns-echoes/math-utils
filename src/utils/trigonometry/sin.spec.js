import { fixFloat } from '../tools/fix-float.js';
import { sin } from './sin.js';


describe('Sine', () => {
	it('returns value for 0', () => {
		const result = sin(0);

		expect(result).to.equal(0);
	});

	it('returns value for π', () => {
		const result = sin(Math.PI);

		expect(fixFloat(result)).to.equal(0);
	});

	it('throws if "theta" has invalid type', () => {
		function fail() {
			sin(null);
		}

		expect(fail).to.throw(TypeError);
	});
});
