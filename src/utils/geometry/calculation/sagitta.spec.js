import { fixFloat } from '../../tools/fix-float.js';
import { degToRad } from '../../conversion/deg-to-rad.js';
import { sagitta } from './sagitta.js';


describe('Calculate sagitta', () => {
	it('returns proper value for r=0', () => {
		const s = sagitta(0, 0);

		expect(s).to.equal(0);
	});

	it('returns proper value for l=0', () => {
		const s = sagitta(10, 0);

		expect(s).to.equal(0);
	});

	it('returns proper value for r=4 and l=4', () => {
		const s = sagitta(4, 4);

		expect(s).to.equal(0.5358983848622456);
	});

	it('returns proper value for r=4 and l=8', () => {
		const s = sagitta(4, 8);

		expect(s).to.equal(4);
	});

	it('returns proper value for theta=0', () => {
		const s = sagitta(4, undefined, 0);

		expect(s).to.equal(0);
	});

	it('returns proper value for r=4 and theta=45', () => {
		const s = sagitta(4, undefined, degToRad(45));

		expect(s).to.equal(0.30448186995485305);
	});

	it('returns proper value for r=4 and theta=90', () => {
		const s = sagitta(4, undefined, degToRad(90));

		expect(s).to.equal(1.1715728752538097);
	});

	it('returns proper value for r=4 and theta=180', () => {
		const s = sagitta(4, undefined, degToRad(180));

		expect(fixFloat(s)).to.equal(4);
	});

	it('throws when length and theta are undefined or invalid', () => {
		function missingAllArgs() {
			sagitta();
		}

		function missingOptionalArgs() {
			sagitta(4);
		}

		function invalidArg1() {
			sagitta(null);
		}

		function invalidArg2() {
			sagitta(4, null);
		}

		function invalidArg3() {
			sagitta(4, undefined, null);
		}

		expect(missingAllArgs).to.throw(TypeError);
		expect(missingOptionalArgs).to.throw(TypeError);
		expect(invalidArg1).to.throw(TypeError);
		expect(invalidArg2).to.throw(TypeError);
		expect(invalidArg3).to.throw(TypeError);
	});
});
