import { FIX_FLOAT } from './constants.js';


describe('Constants: FIX_FLOAT', () => {
	it('gets configuration object', () => {
		expect(FIX_FLOAT.PRECISION).to.eql({
			DEFAULT: 14,
			MAXIMUM: 14,
		});
	});

	it('sets precision', () => {
		FIX_FLOAT.PRECISION = 4;

		expect(FIX_FLOAT.PRECISION).to.eql({
			DEFAULT: 4,
			MAXIMUM: 14,
		});
	});

	it('sets default precision', () => {
		FIX_FLOAT.PRECISION = undefined;

		expect(FIX_FLOAT.PRECISION).to.eql({
			DEFAULT: 14,
			MAXIMUM: 14,
		});
	});

	it('sets default precision - throws if "number" has invalid type', () => {
		function fail() {
			FIX_FLOAT.PRECISION = null;
		}

		expect(fail).to.throw(TypeError);
	});

	it('sets default precision - throws if "number" has invalid value (below 0)', () => {
		function fail() {
			FIX_FLOAT.PRECISION = -1;
		}

		expect(fail).to.throw(Error);
	});

	it('sets default precision - throws if "number" has invalid value (above max)', () => {
		function fail() {
			FIX_FLOAT.PRECISION = FIX_FLOAT.PRECISION.MAXIMUM + 1;
		}

		expect(fail).to.throw(Error);
	});

	it('sets default precision - throws if "number" has invalid value (float)', () => {
		function fail() {
			FIX_FLOAT.PRECISION = 1.1;
		}

		expect(fail).to.throw(Error);
	});
});
