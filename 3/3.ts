abstract class Figure {
	getArea(): void {
		console.log("Not Implemented");
	}
}
class Rectangle extends Figure {
	constructor(public width: number, public height: number) {
		super();
	}

	getArea(): void {
		let square = this.width * this.height;
		console.log("Area =", square); 
	}
}

let someFigure: Figure = new Rectangle(20, 30);
someFigure.getArea();
//---------------------------------------------
abstract class Figure1 {
	abstract x: number;
	abstract y: number;
	abstract getArea1(): void;
}
class Rectangle1 extends Figure1 {
	constructor(public x: number, public y: number, public width1: number, public height1: number) {
		super();
	}

	getArea1(): void {
		let square1 = this.width1 * this.height1;
		console.log("Area =", square1);
	}
}
let someFigure1: Figure1 = new Rectangle1(10, 10, 20, 25);
someFigure1.getArea1();