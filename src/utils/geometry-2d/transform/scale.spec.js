import { scale } from './scale.js';


describe('Scale point by vector', () => {
	it('returns point scaled by vector', () => {
		const p = scale({ x: -3, y: 5.5 }, { x: 4, y: 2 });

		expect(p.x).to.equal(-12);
		expect(p.y).to.equal(11);
	});

	it('returns point scaled by vector (origin)', () => {
		const p = scale({ x: -3, y: 5.5 }, { x: 4, y: 2 }, { x: 1, y: 2 });

		expect(p.x).to.equal(-15);
		expect(p.y).to.equal(9);
	});

	it('throws if "point" has invalid type', () => {
		const fail = () => {
			scale(null, { x: 1, y: 1 });
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
			scale({ x: 1, y: 1 }, { x: 1, y: 1 }, null);
		};

		expect(fail).to.throw(TypeError);
	});
});
