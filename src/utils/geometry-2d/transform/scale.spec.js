import { scale } from './scale.js';
import { expect } from 'chai';


describe('Scale point', () => {
	it('returns point with scaled coordinates (default y)', () => {
		const p = scale({ x: -3, y: 5.5 }, 3);

		expect(p.x).to.equal(-9);
		expect(p.y).to.equal(16.5);
	});

	it('returns point with scaled coordinates', () => {
		const p = scale({ x: -3, y: 5.5 }, 4, 2);

		expect(p.x).to.equal(-12);
		expect(p.y).to.equal(11);
	});

	it('returns point with scaled coordinates (default y, origin)', () => {
		const p = scale({ x: -3, y: 5.5 }, 3, undefined, { x: 1, y: 2 });

		expect(p.x).to.equal(-11);
		expect(p.y).to.equal(12.5);
	});

	it('returns point with scaled coordinates (origin)', () => {
		const p = scale({ x: -3, y: 5.5 }, 4, 2, { x: 1, y: 2 });

		expect(p.x).to.equal(-15);
		expect(p.y).to.equal(9);
	});

	it('throws if "point" has invalid type', () => {
		const fail = () => {
			scale(null, 4);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "x" has invalid type', () => {
		const fail = () => {
			scale({ x: 1, y: 1 }, null);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "y" has invalid type', () => {
		const fail = () => {
			scale({ x: 1, y: 1 }, 1, null);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "origin" has invalid type', () => {
		const fail = () => {
			scale({ x: 1, y: 1 }, 1, 1, null);
		};

		expect(fail).to.throw(TypeError);
	});
});
