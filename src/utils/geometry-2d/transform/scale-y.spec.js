import { scaleY } from './scale-y.js';


describe('Scale point y coordinate', () => {
	it('returns point with scaled coordinates', () => {
		const p = scaleY({ x: -3, y: 5.5 }, 3);

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(16.5);
	});

	it('returns point with scaled coordinates (origin)', () => {
		const p = scaleY({ x: -3, y: 5.5 }, 4, { x: 1, y: 2 });

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(16);
	});

	it('throws if "point" has invalid type', () => {
		const fail = () => {
			scaleY(null, 4);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "y" has invalid type', () => {
		const fail = () => {
			scaleY({ x: 1, y: 1 }, null);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "origin" has invalid type', () => {
		const fail = () => {
			scaleY({ x: 1, y: 1 }, 1, null);
		};

		expect(fail).to.throw(TypeError);
	});
});
