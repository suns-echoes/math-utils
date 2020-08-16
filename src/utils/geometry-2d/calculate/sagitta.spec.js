import { sagitta } from './sagitta.js';


describe('Calculate sagitta', () => {
	it('calculates value for r=0', () => {
		const s = sagitta(0, 0);

		expect(s).to.equal(0);
	});

	it('calculates value for l=0', () => {
		const s = sagitta(10, 0);

		expect(s).to.equal(0);
	});

	it('calculates value for r=4 and l=4', () => {
		const s = sagitta(4, 4);

		expect(s).to.equal(0.5358983848622456);
	});

	it('calculates value for r=4 and l=8', () => {
		const s = sagitta(4, 8);

		expect(s).to.equal(4);
	});

	it('throws if "radius" has invalid type', () => {
		function fail() {
			sagitta(null, 1);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "radius" has invalid value', () => {
		function fail() {
			sagitta(-1, 1);
		}

		expect(fail).to.throw(Error);
	});

	it('throws if "length" has invalid type', () => {
		function fail() {
			sagitta(1, null);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if "length" has invalid value', () => {
		function fail() {
			sagitta(1, -1);
		}

		function fail2() {
			sagitta(1, 10);
		}

		expect(fail).to.throw(Error);
		expect(fail2).to.throw(Error);
	});
});
