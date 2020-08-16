import { fixFloat } from './fix-float.js';


describe('Fix float numbers', () => {
	it('rounds 0.9999999999999999 to 1', () => {
		const rounded = fixFloat(0.9999999999999999);

		expect(rounded).to.equal(1);
	});

	it('rounds -1.9999999999999996 to -2', () => {
		const rounded = fixFloat(-1.9999999999999996);

		expect(rounded).to.equal(-2);
	});

	it('rounds 1.0000000000000004 to 1', () => {
		const rounded = fixFloat(1.0000000000000004);

		expect(rounded).to.equal(1);
	});

	it('rounds 1.0000000000000114 to 1', () => {
		const rounded = fixFloat(1.0000000000000114);

		expect(rounded).to.equal(1.00000000000001);
	});

	it('rounds 0.012345678912345 to 0.012345678901235', () => {
		const rounded = fixFloat(0.012345678912345);

		expect(rounded).to.equal(0.01234567891235);
	});

	it('throws if "number" has invalid type', () => {
		function fail() {
			fixFloat(null);
		}

		expect(fail).to.throw(TypeError);
	});
});
