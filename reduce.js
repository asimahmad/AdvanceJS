var numbers = [10,20,30];
var sum =0;
for(let i=0; i<numbers.length ;i++)
{
    sum += numbers[i];
}
//console.log(sum);

let total = numbers.reduce((sum1, number)=>{
    return sum1+=number;
},0)

//console.log(total);

var primaryColors =[
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

var colors = primaryColors.reduce((arr, color)=>{
     arr.push(color.color);
     return arr;
},[]);

//console.log(colors);

// Balance Parentheses
function balancedParens(string){
    return !string.split("").reduce(function(prev, char){
        if(prev<0) { return prev;}
        if(char === "(") { return ++prev; }
        if(char === ")") { return --prev; }
        return prev;
    },0);
}

console.log(balancedParens(")("));