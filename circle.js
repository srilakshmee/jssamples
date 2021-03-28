function circle(radius){
	this.radius = radius
  	this.area = function() {
		return Math.PI * radius * radius;
	}
}
var c1 = new circle(2);
console.log('Area of circle of radius 2 = ', c1.area().toFixed(2));