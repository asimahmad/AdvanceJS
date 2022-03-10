// // rest operator

// function addNumbers(...numbers){
//     return numbers.reduce((sum, number)=>{
//         return sum + number;
//     },0);
// }

// console.log(addNumbers(1,2,3,4,5,6,7,8,9,10));

// // spread operator
// const defaultColors = ['red','green'];
// const favColors = ['yellow', 'black'];
// const fallColors = ['fire red', 'fall orange']

// const allColors = defaultColors.concat(favColors); // using concat
// const allColorsBySpread = [...defaultColors, ...favColors] // using spread operator
// console.log(allColors);
// console.log(allColorsBySpread);

// console.log(['white', ...fallColors, ...defaultColors, ...favColors]);

function shopList(...items){
    if(items.indexOf('milk')<0){
        return ['milk', ...items];
    }
    return items;
}
console.log(shopList('butter', 'cake','oranges', 'eggs'));
console.log(shopList('milk', 'banana', 'apples', 'corriander'));