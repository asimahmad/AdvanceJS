var expense ={
    type:'Business',
    amount: '$45 USD'
}
// var type = expense.type; // to make it in ES6 var {type} = expense;
// var amount = expense.amount;

// with ES6 

// const {type} = expense;
// const {amount} = expense;

// console.log(type);

// more suitable way in ES6
// const {type, amount} = expense;
// console.log(type);


var saveFile = {
    extension: 'jpg',
    name: 'Post',
    size: 14789
}

// old way
// function summaryFile(file){
//     return `The file ${file.name}.${file.extension} is of size ${file.size}`;
// }

// new modern way
// function summaryFile({name, extension, size}){
//     return `The file ${name}.${extension} is of size ${size}`;
// }
// console.log(summaryFile(saveFile));



// with arrays

// const companies = ['Google', 'facebook', 'Amazon'];
// const [company1, company2] = companies; // to destructure the element, use the []
// const {length} = companies;    // to destructure the property, use the {}
// console.log(length);
// console.log(company1 + " "+ company2);

// const companies = [
//     {name: 'Google', location: 'Mountain View'},
//     {name: 'Facebook', location: 'Menlo Park'},
//     {name: 'Uber', location: 'San Francisco'}
// ];
// // get location of google
// const [{location}] = companies;

// console.log(location);

// const Google = {
//     locations: ['India', 'USA', 'Canada','England']
// };
// // get location of Canada
// const {locations: [,,location]} = Google;

// console.log(location);


const points = [
    [2,1],
    [10,4],
    [5,5],
    [6,9]
];

// // output : [{x:value, y: value}]
// let op = points.map(pair =>{
//     const [x,y] = pair;
//     return {x:x, y: y};
// })
// console.log(op);

// another or best way

let op = points.map(([x,y]) =>  {
    return {x:x, y:y}
});
console.log(op);