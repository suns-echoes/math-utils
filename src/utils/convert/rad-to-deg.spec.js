import { radToDeg } from './rad-to-deg.js';


describe('Convert radians to degrees', () => {
	it('returns proper conversion for 0 radians', () => {
		const theta = radToDeg(0);

		expect(theta).to.equal(0);
	});

	it('returns proper conversion for 1/4 PI radians', () => {
		const theta = radToDeg(Math.PI / 4);

		expect(theta).to.equal(45);
	});

	it('returns proper conversion for 1/2 PI radians', () => {
		const theta = radToDeg(Math.PI / 2);

		expect(theta).to.equal(90);
	});

	it('returns proper conversion for PI radians', () => {
		const theta = radToDeg(Math.PI);

		expect(theta).to.equal(180);
	});

	it('returns proper conversion for 4.31 radians', () => {
		const theta = radToDeg(4.31);

		expect(theta).to.equal(246.9448097013848);
	});

	it('throws when argument is not a number', () => {
		function fail() {
			radToDeg(null);
		}

		expect(fail).to.throw(TypeError);
	});
});
