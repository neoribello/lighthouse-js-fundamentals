// calculates the area of a rectangle
function calculateRectangleArea(length, width) {
    let rectangle = length * width
    if(length < 0 || width < 0) {
      return undefined;
    } else {
      return rectangle;
    }
  }
  
// calculates the area of the triangle
function calculateTriangleArea(base, height) {
    let triangle = (base * height) / 2;
    if(base < 0 || height < 0) {
        return undefined;
    } else {
        return triangle;
    }   
}

//calculates the area of the radius
function calculateCircleArea(radius) {
    let circle =  Math.PI * radius * radius;
    if (radius < 0) {
        return undefined;
    } else {
        return circle;
    }
}