var numbers = [1,2,3,4,5]
var sums =0;
function adder(number){
  sums += number;
}
numbers.forEach(adder)

sums;

var colors = ['red', 'yellow', 'blue'];
for(var i=0;i<colors.length;i++){
  colors[i];
}

colors.forEach(function(color){
	console.log(color);
});

var nums = [1,2,3,4,5]
var sum =0;
nums.forEach(num =>{
	sum += num;
})

sum