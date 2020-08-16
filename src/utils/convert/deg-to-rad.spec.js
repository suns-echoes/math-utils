import { degToRad } from './deg-to-rad.js';


describe('Convert degrees to radians', () => {
	it('returns proper conversion for 0 degrees', () => {
		const theta = degToRad(0);

		expect(theta).to.equal(0);
	});

	it('returns proper conversion for 45 degrees', () => {
		const theta = degToRad(45);

		expect(theta).to.equal(Math.PI / 4);
	});

	it('returns proper conversion for 90 degrees', () => {
		const theta = degToRad(90);

		expect(theta).to.equal(Math.PI / 2);
	});

	it('returns proper conversion for 247 degrees', () => {
		const theta = degToRad(247);

		expect(theta).to.equal(4.310963252425994);
	});

	it('throws when argument is not a number', () => {
		function fail() {
			degToRad(null);
		}

		expect(fail).to.throw(TypeError);
	});
});
