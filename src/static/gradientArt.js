/**
 * @author ktortolini
 *
 * @name ~MyGradientArt~
 * @date on 06/07/2024
 */

const yAxis = 1;
const xAxis = 2;

const _colorArray = [
	[31, 224, 105],
	[224, 31, 150],
	[80, 175, 137],
	[80, 175, 89],
	[197, 82, 58],
	[58, 173, 197],
	[161, 158, 94],
	[94, 161, 158],
	[158, 94, 161],
	[125, 56, 199],
	[151, 96, 210],
];

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

	/**/

	noLoop();
}

/**
 * This piece of art makes use of the lerpColor() method, and an
 * example from the p5.js website to create a gradient - for more
 * see: {@link https://p5js.org/examples/color-linear-gradient.html}
 * @name setGradientTwoColors
 * @summary Set a gradient of two colors from one point to another
 */

function setGradientTwoColors(
	startX,
	startY,
	width,
	height,
	colorStart,
	colorEnd,
	axis,
) {
	/**/

	noFill();

	/**
	 * The following code was made with assistance from Copilot++ and Cursor, for
	 * more information see: {@link https://docs.cursor.com/cpp/introduction}
	 */

	if (axis === yAxis) {
		/**/

		for (let currentY = startY; currentY <= startY + height; currentY++) {
			/**/

			let interpolation = map(currentY, startY, startY + height, 0, 1);
			let gradientColor = lerpColor(colorStart, colorEnd, interpolation);

			/**/

			stroke(gradientColor);
			line(startX, currentY, startX + width, currentY);

			/**/
		}
	} else if (axis === xAxis) {
		/**/

		for (let currentX = startX; currentX <= startX + width; currentX++) {
			/**/

			let interpolation = map(currentX, startX, startX + width, 0, 1);

			/**/

			let gradientColor = lerpColor(colorStart, colorEnd, interpolation);

			/**/

			stroke(gradientColor);
			line(currentX, startY, currentX, startY + height);
		}
	}
}

/**
 * This piece of art makes use of the lerpColor() method, and an
 * example from the p5.js website to create a gradient - for more
 * see: {@link https://p5js.org/examples/color-linear-gradient.html}
 * @name setGradientThreeColors
 * @summary Set a gradient of three colors from one point to another
 */

function setGradientThreeColors(
	startX,
	startY,
	width,
	height,
	colorStart,
	colorMid,
	colorEnd,
	axis,
) {
	/**/

	noFill();

	/**
	 * The following code was made with assistance from Copilot++ and Cursor, for
	 * more information see: {@link https://docs.cursor.com/cpp/introduction}
	 */

	if (axis === yAxis) {
		/**/

		for (let currentY = startY; currentY <= startY + height; currentY++) {
			/**/

			let interpolation = map(currentY, startY, startY + height, 0, 1);

			/**/

			let gradientColor = (interpolation <= 0.5)
				? lerpColor(colorStart, colorMid, interpolation * 2)
				: lerpColor(colorMid, colorEnd, (interpolation - 0.5) * 2);

			/**/

			stroke(gradientColor);
			line(startX, currentY, startX + width, currentY);
		}
	} else if (axis === xAxis) {
		/**/

		for (let currentX = startX; currentX <= startX + width; currentX++) {
			/**/

			let interpolation = map(currentX, startX, startX + width, 0, 1);

			/**/

			let gradientColor = (interpolation <= 0.5)
				? lerpColor(colorStart, colorMid, interpolation * 2)
				: lerpColor(colorMid, colorEnd, (interpolation - 0.5) * 2);

			/**/

			stroke(gradientColor);
			line(currentX, startY, currentX, startY + height);
		}
	}
}

/**
 * @name primaryComplementary
 * @summary Set a complementary gradient
 */

function primaryComplementary() {
	setGradientTwoColors(
		0,
		0,
		width,
		height,
		color(_colorArray[0]),
		color(_colorArray[1]),
		xAxis,
	);
}

/**
 * @name secondaryComplementary
 * @summary Set a secondary complementary gradient
 */

function secondaryComplementary() {
	setGradientTwoColors(
		0,
		0,
		width,
		height,
		color(_colorArray[4]),
		color(_colorArray[5]),
		xAxis,
	);
}

/**
 * @name analogous
 * @summary Set a analogous gradient
 */

function analogous() {
	setGradientTwoColors(
		0,
		0,
		width,
		height,
		color(_colorArray[2]),
		color(_colorArray[3]),
		xAxis,
	);
}

/**
 * @name triad
 * @summary Set a triad gradient
 */

function triad() {
	setGradientThreeColors(
		0,
		0,
		width,
		height,
		color(_colorArray[6]),
		color(_colorArray[7]),
		color(_colorArray[8]),
		xAxis,
	);
}

function draw() {
	/**/

	// primaryComplementary();

	/**/

	// secondaryComplementary();

	/**/

	// analogous();

	/**/

	triad();

	scale(4.5);
}
