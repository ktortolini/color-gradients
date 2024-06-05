/**
 * @author ktortolini
 *
 * @name ~MyShapeArt~
 * @date on 05/28/2024
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

	canvas.parent('shapeArt');

	/**
	 * This application uses p5.js and p5 smooth() method,
	 * see: {@link https://p5js.org/reference/#/p5/smooth}
	 */

	smooth(3);

	/**/

	background(0, 0, 0);
}

function addRandomToColorArray(array) {
	return array.map((subArray) =>
		subArray.map((value) => value + Math.floor(Math.random() * 6))
	);
}

class CustomShape {
	constructor(paramX, paramY) {
		this.customX = paramX;
		this.customY = paramY;
	}

	CustomBezierShape(vertX, vertY, controlPoints) {
		for (let i = 0; i < controlPoints.length; i++) {
			const cPoint1X = vertX +
				random(
					(controlPoints[i][0]) - (0.50 + randomDeviation),
					(controlPoints[i][0]) + (0.50 + randomDeviation),
				);
			const cPoint1Y = vertY +
				random(
					(controlPoints[i][1]) - (1.00 + randomDeviation),
					(controlPoints[i][1]) + (1.00 + randomDeviation),
				);
			const cPoint2X = vertX +
				random(
					(controlPoints[i][2]) - (2.50 + randomDeviation),
					(controlPoints[i][2]) + (2.50 + randomDeviation),
				);
			const cPoint2Y = vertY +
				random(
					(controlPoints[i][3]) - (2.50 + randomDeviation),
					(controlPoints[i][3]) + (2.50 + randomDeviation),
				);
			const endPointX = vertX +
				random(
					(controlPoints[i][4]) - (1.00 + randomDeviation),
					(controlPoints[i][4]) + (1.00 + randomDeviation),
				);
			const endPointY = vertY +
				random(
					(controlPoints[i][5]) - (0.50 + randomDeviation),
					(controlPoints[i][5]) + (0.50 + randomDeviation),
				);

			/**/

			bezierVertex(
				cPoint1X,
				cPoint1Y,
				cPoint2X,
				cPoint2Y,
				endPointX,
				endPointY,
			);

			/**/

			vertX = endPointX;
			vertY = endPointY;
		}
		return new CustomShape(vertX, vertY);
	}
}

class Shape {
	constructor() {
		/**/
	}

	getRandomColor() {
		const color = colorArray[Math.floor(Math.random() * colorArray.length)];
		return color.map((value) => value + Math.floor(Math.random() * 6));
	}

	boogleShape() {
		const [r, g, b] = this.getRandomColor();

		/**/

		stroke(r, g, b);

		strokeWeight(random(1, 3));

		noFill();

		beginShape();

		/**/

		const startingX = 25.9192;
		const startingY = 0.6462;

		/**
		 * This application uses p5.js and p5 vertex() method,
		 * see: {@link https://p5js.org/reference/#/p5/vertex}
		 */

		vertex(
			random(startingX, startingX),
			random(startingY, startingY),
		);

		/**/

		let boogle = new CustomShape(startingX, startingY);
		boogle = boogle.CustomBezierShape(
			startingX,
			startingY,
			[
				[-2.0456, -2.5492, -5.5113, 47.5163, 8.5795, 64.7458],
				[20.6065, 22.3558, 62.7692, 7.13, 63.2947, -23.8727],
				[0.5009, -6.3877, -0.1815, -20.3193, -8.9733, -20.8515],
				[-14.0251, -0.2678, -16.6372, 24.993, -32.3129, 19.1489],
				[-17.5875, -7.7719, -1.982, -27.3521, -4.6688, -38.5243],
			],
		);

		/**/

		endShape(CLOSE);
	}

	thoogleShape() {
		const [r, g, b] = this.getRandomColor();

		/**/

		stroke(r, g, b);

		strokeWeight(random(1, 3));

		noFill();

		beginShape();

		// This has been checked

		const startingX = 14.3644;
		const startingY = 143.5376;

		/**
		 * This application uses p5.js and p5 vertex() method,
		 * see: {@link https://p5js.org/reference/#/p5/vertex}
		 */

		vertex(
			random(startingX, startingX),
			random(startingY, startingY),
		);

		/**/

		let thoogle = new CustomShape(startingX, startingY);
		thoogle = thoogle.CustomBezierShape(
			startingX,
			startingY,
			[
				[54.6362, -24.9105, -1.8492, -223.6263, -9.7432, -99.6557],
				[1.2844, 17.6918, -15.0983, 100.2921, 9.7432, 99.6557],
			],
		);

		/**/

		endShape();
	}

	doodleShape() {
		const [r, g, b] = this.getRandomColor();

		/**/

		stroke(r, g, b);

		strokeWeight(random(1, 3));

		noFill();

		beginShape();

		const startingX = 44.0314;
		const startingY = 53.8931;

		/**
		 * This application uses p5.js and p5 vertex() method,
		 * see: {@link https://p5js.org/reference/#/p5/vertex}
		 */

		vertex(
			random(startingX, startingX),
			random(startingY, startingY),
		);

		/**/

		let doodle = new CustomShape(startingX, startingY);
		doodle = doodle.CustomBezierShape(
			startingX,
			startingY,
			[
				[-113.6113, 79.8194, 56.0555, 93.0333, 33.8143, 36.3636],
				[-5.2093, -16.0436, -9.4738, -50.6838, -33.8143, -36.3636],
			],
		);

		/**/

		endShape();
	}
}

// deno-lint-ignore no-unused-vars
function draw() {
	if (iter >= 10) {
		noLoop();
		return;
	}

	scale(4.5);

	/**/

	const shape = new Shape();

	/**/

	translate(100, 50);

	shape.boogleShape();
	shape.thoogleShape();
	shape.doodleShape();

	/**/

	iter++;
}
