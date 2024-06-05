/**
 * @author ktortolini
 *
 * @name ~MyGradientArt~
 * @date on 06/05/2024
 */

const randomDeviation = 0.5;

let iter = 0;

const colorArray = addRandomToColorArray([
	[215, 38, 61],
	[1, 151, 246],
	[99, 212, 113],
	[99, 164, 108],
	[73, 220, 177],
]);

// deno-lint-ignore no-unused-vars
function setup() {
	/**
	 * This application uses p5.js and p5 createCanvas() method,
	 * see: {@link https://p5js.org/reference/#/p5/createCanvas}
	 */

	const canvas = createCanvas(1200, 1200);

	/**/

	canvas.parent('gradientArt');

	/**
	 * This application uses p5.js and p5 smooth() method,
	 * see: {@link https://p5js.org/reference/#/p5/smooth}
	 */

	smooth(3);

	/**/

	background(0, 0, 0);
}

// deno-lint-ignore no-unused-vars
function draw() {
	if (iter >= 10) {
		noLoop();
		return;
	}

	scale(4.5);
}
