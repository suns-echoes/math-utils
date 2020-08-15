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

	// it('throws if "number" has invalid type', () => {
	// 	function fail() {
	// 		setFixFloatPrecision(null);
	// 	}

	// 	expect(fail).to.throw(TypeError);
	// });

	// it('throws if "number" has invalid value (below 0)', () => {
	// 	function fail() {
	// 		setFixFloatPrecision(-1);
	// 	}

	// 	expect(fail).to.throw(Error);
	// });

	// it('throws if "number" has invalid value (above max)', () => {
	// 	function fail() {
	// 		setFixFloatPrecision(FIX_FLOAT.PRECISION.MAXIMUM + 1);
	// 	}

	// 	expect(fail).to.throw(Error);
	// });

	// it('throws if "number" has invalid value (float)', () => {
	// 	function fail() {
	// 		setFixFloatPrecision(1.1);
	// 	}

	// 	expect(fail).to.throw(Error);
	// });
});
