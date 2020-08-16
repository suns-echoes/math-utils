import { scaleY } from './scale-y.js';


describe('Scale point y coordinate by vector', () => {
	it('returns point scaled by vector', () => {
		const p = scaleY({ x: -3, y: 5.5 }, { x: 4, y: 2 });

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(11);
	});

	it('returns point scaled by vector (origin)', () => {
		const p = scaleY({ x: -3, y: 5.5 }, { x: 4, y: 2 }, { x: 1, y: 2 });

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(9);
	});

	it('throws if "point" has invalid type', () => {
		const fail = () => {
			scaleY(null, { x: 1, y: 1 });
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "x" has invalid type', () => {
		const fail = () => {
			scaleY({ x: 1, y: 1 }, null);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "y" has invalid type', () => {
		const fail = () => {
			scaleY({ x: 1, y: 1 }, { x: 1, y: 1 }, null);
		};

		expect(fail).to.throw(TypeError);
	});
});
