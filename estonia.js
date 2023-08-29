
function setup() {
  createCanvas(600, 300);
}

function draw() {
  //set blue background
  background(0, 114, 206);
  //create black color
  const c = color((10, 19, 11));
  //fill next rectangle with color
  fill(c);
  rect(0,100,600,100)
  //create white color
  const b = color((255,255,255));
  //fill next rectangle with color
  fill(b);
  rect(0,200,700,100)
}
