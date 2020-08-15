import { reflectY } from './reflect-y.js';


describe('Reflect point y coordinate', () => {
	it('returns proper point cordinates', () => {
		const p = reflectY(
			{ x: -3, y: 5.5 }
		);

		expect(p.x).to.equal(-3);
		expect(p.y).to.equal(-5.5);
	});

	it('reflects over (10,10)', () => {
		const { x, y } = reflectY({ x: 10, y: 10 }, { x: 10, y: 10 });

		expect(x).to.equal(10);
		expect(y).to.equal(10);
	});

	it('reflects over (5,5))', () => {
		const { x, y } = reflectY({ x: 10, y: 10 }, { x: 5, y: 5 });

		expect(x).to.equal(10);
		expect(y).to.equal(0);
	});

	it('reflects over (20,20))', () => {
		const { x, y } = reflectY({ x: 10, y: 10 }, { x: 20, y: 20 });

		expect(x).to.equal(10);
		expect(y).to.equal(30);
	});

	it('reflects over (-5,-5)', () => {
		const { x, y } = reflectY({ x: 10, y: 10 }, { x: -5, y: -5 });

		expect(x).to.equal(10);
		expect(y).to.equal(-20);
	});

	it('reflects over (-20,-20)', () => {
		const { x, y } = reflectY({ x: 10, y: 10 }, { x: -20, y: -20 });

		expect(x).to.equal(10);
		expect(y).to.equal(-50);
	});

	it('throws if "point" has invalid type', () => {
		const fail = () => {
			reflectY(null);
		};

		expect(fail).to.throw(TypeError);
	});

	it('throws if "origin" has invalid type', () => {
		const fail = () => {
			reflectY({ x: 10, y: 10 }, null);
		};

		expect(fail).to.throw(TypeError);
	});
});
