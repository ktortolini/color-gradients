/**
 * @author ktortolini
 *
 * @name ~MyLineArt~
 * @date on 05/11/2024
 */

// deno-lint-ignore no-unused-vars
function setup() {
	/**
	 * This application uses p5.js and p5 createCanvas() method,
	 * see: {@link https://p5js.org/reference/#/p5/createCanvas}
	 */

	const canvas = createCanvas( 2048, 1080 );

	/**/

	canvas.parent('lineArt');

	/**
	 * This application uses p5.js and p5 smooth() method,
	 * see: {@link https://p5js.org/reference/#/p5/smooth}
	 */

	smooth(3);

	/**/

	background( 0, 0, 0 );

	/**
	 * This is the first attempt at line art using points.
	 */

	const pointCount = 300;
	const gapCount = width / (pointCount - 1);

	for ( let i = 0; i < pointCount; i++ ) {

		stroke( random(255) - i, random(255) - i, random(255) - i );
		strokeWeight( random( 1, 145 ) );
		point( gapCount * i, height / random( 1, 2.5) + random( -190, 190 ) );

	}

	/**
	 * This is the second attempt at line art using points.
	 */

	for ( let i = 0; i < pointCount; i++ ) {

		stroke( random( 255 ), random( 255 ), random( 0, 15 ) );
		strokeWeight( random( 1, 30 ) );
		point( gapCount * i, height / 2 + ( i * i) * 0.0045 );

	}

}

/**
 * This is the third attempt at line art using points.
 */

// const x = 0.0;
// const y = 0.0;

// const spd = 1.0;

let theta = 0.0;
const amp = 100.0;
const freq = 3.14159 / 180 * 15.0;

let w = 0.0;
let h = 0.0;

// deno-lint-ignore no-unused-vars
function draw() {

	/**
    * This is the third attempt at line art using points.
    */

	strokeWeight( random( 1, 8 ) );
	stroke( 0, 0, 0 );
	h = w = sin(theta) * amp;
	rect( width / 2 - w / 2, height / 2 - h / 2, w, h );
	theta += freq;

	for ( let i = 0; i < 400; i++ ) {
		stroke( 0 + random( 255 ), 0 + i, 0 );
		line( 100 * i, height / 2.5 + ( i * i) * 0.0045, 200 * i, height / 1.5 + ( i * i) * 0.0045 );
	}
}
