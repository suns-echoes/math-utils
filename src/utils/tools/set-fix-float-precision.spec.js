import { fixFloat } from './fix-float.js';
import { setFixFloatPrecision } from './set-fix-float-precision.js';

import { FIX_FLOAT } from '../constants.js';


describe('Set fix float precision', () => {
	it('rounds to 4 decimal places', () => {
		setFixFloatPrecision(4);

		const rounded = fixFloat(0.1111111111111111);

		expect(rounded).to.equal(0.1111);
	});

	it('rounds to integer', () => {
		setFixFloatPrecision(0);

		const rounded = fixFloat(-1.9999999999999996);

		expect(rounded).to.equal(-2);
	});

	it('rounds to default', () => {
		setFixFloatPrecision();

		const rounded = fixFloat(0.45645656);

		expect(rounded).to.equal(0.45645656);
	});

	it('throws if "number" has invalid type', () => {
		function fail() {
			setFixFloatPrecision(null);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "number" has invalid value (below 0)', () => {
		function fail() {
			setFixFloatPrecision(-1);
		}

		expect(fail).to.throw(Error);
	});

	it('throws if "number" has invalid value (above max)', () => {
		function fail() {
			setFixFloatPrecision(FIX_FLOAT.PRECISION.MAXIMUM + 1);
		}

		expect(fail).to.throw(Error);
	});

	it('throws if "number" has invalid value (float)', () => {
		function fail() {
			setFixFloatPrecision(1.1);
		}

		expect(fail).to.throw(Error);
	});
});
