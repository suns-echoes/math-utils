import { fixFloat } from '../../tools/fix-float.js';
import { degToRad } from '../../convert/deg-to-rad.js';
import { asagitta } from './asagitta.js';


describe('Calculate sagitta from angle', () => {
	it('calculates value for theta=0', () => {
		const s = asagitta(4, 0);

		expect(s).to.equal(0);
	});

	it('calculates value for r=4 and theta=45', () => {
		const s = asagitta(4, degToRad(45));

		expect(s).to.equal(0.30448186995485305);
	});

	it('calculates value for r=4 and theta=90', () => {
		const s = asagitta(4, degToRad(90));

		expect(s).to.equal(1.1715728752538097);
	});

	it('calculates value for r=4 and theta=180', () => {
		const s = asagitta(4, degToRad(180));

		expect(fixFloat(s)).to.equal(4);
	});

	it('throws if "radius" has invalid type', () => {
		function fail() {
			asagitta(null, 1);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "radius" has invalid value', () => {
		function fail() {
			asagitta(-1, 1);
		}

		expect(fail).to.throw(Error);
	});

	it('throws if "length" has invalid type', () => {
		function fail() {
			asagitta(1, null);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "length" has invalid value', () => {
		function fail() {
			asagitta(1, -1);
		}

		function fail2() {
			asagitta(1, 3.15);
		}

		expect(fail).to.throw(Error);
		expect(fail2).to.throw(Error);
	});
});
