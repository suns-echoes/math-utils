import { scaleX } from './scale-x.js';


describe('Scale point x coordinate', () => {
	it('returns point with scaled coordinates', () => {
		const p = scaleX({ x: -3, y: 5.5 }, 3);

		expect(p.x).to.equal(-9);
		expect(p.y).to.equal(5.5);
	});

	it('returns point with scaled coordinates (origin)', () => {
		const p = scaleX({ x: -3, y: 5.5 }, 4, { x: 1, y: 2 });

		expect(p.x).to.equal(-15);
		expect(p.y).to.equal(5.5);
	});

	it('throws if "point" has invalid type', () => {
		const fail = () => {
			scaleX(null, 4);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "x" has invalid type', () => {
		const fail = () => {
			scaleX({ x: 1, y: 1 }, null);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "origin" has invalid type', () => {
		const fail = () => {
			scaleX({ x: 1, y: 1 }, 1, null);
		};

		expect(fail).to.throw(TypeError);
	});
});
