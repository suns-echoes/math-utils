import { reflectOverOrigin } from './reflect-over-origin.js';


describe('Reflect point (10,10) over the origin', () => {
	it('reflects over (0,0)', () => {
		const { x, y } = reflectOverOrigin({ x: 10, y: 10 });

		expect(x).to.equal(-10);
		expect(y).to.equal(-10);
	});

	it('reflects over (10,10)', () => {
		const { x, y } = reflectOverOrigin({ x: 10, y: 10 }, { x: 10, y: 10 });

		expect(x).to.equal(10);
		expect(y).to.equal(10);
	});

	it('reflects over (5,5))', () => {
		const { x, y } = reflectOverOrigin({ x: 10, y: 10 }, { x: 5, y: 5 });

		expect(x).to.equal(0);
		expect(y).to.equal(0);
	});

	it('reflects over (20,20))', () => {
		const { x, y } = reflectOverOrigin({ x: 10, y: 10 }, { x: 20, y: 20 });

		expect(x).to.equal(30);
		expect(y).to.equal(30);
	});

	it('reflects over (-5,-5)', () => {
		const { x, y } = reflectOverOrigin({ x: 10, y: 10 }, { x: -5, y: -5 });

		expect(x).to.equal(-20);
		expect(y).to.equal(-20);
	});

	it('reflects over (-20,-20)', () => {
		const { x, y } = reflectOverOrigin({ x: 10, y: 10 }, { x: -20, y: -20 });

		expect(x).to.equal(-50);
		expect(y).to.equal(-50);
	});
});
