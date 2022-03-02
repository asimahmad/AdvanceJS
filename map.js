
// first way
var k = [1,2,3,4];
var dk = k.map(i =>i*2)
console.log(dk);


// second way
var ddk = k.map(function(i){return i*3});
console.log(ddk);



// third way
function forth(i)
{
  return i*4;
}
var dddk = k.map(forth)

console.log(dddk);


var paints = [
  {color: 'red'},
  {color: 'blue'}
]

var kk = paints.map(paint => paint['color']);
var kkk = paints.map(paint => paint.color);
console.log(kk);
console.log(kkk);