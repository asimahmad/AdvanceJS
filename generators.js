// // for..of loop
// // const colors = ['red','green', 'white', 'black'];
// // for(let color of colors){
// //     console.log(color);
// // }

/////////////////////

// // generator
// function* shopping(){   // function *number is also fine.
//     // stuff on the side walk
//     console.log('Side walk stuff');
//     // walking down the side walk
//     console.log('Side walk');
//     // go into the store with some
//     console.log('Go into the store');
    
//     const stuffFromStore = yield 'cash';
    
//     // walking to laundry 
//     const cleanClothes = yield 'laundry';

//     // walking back home
//     console.log('back to home');
//     return [stuffFromStore, cleanClothes];
// }

// // stuff in the store


// const gen = shopping();
// console.log(gen.next()); // leaving our house // will run until the first yield statement
// // walked in to the store
// // walking up and down the aisles
// // purchse our stuff
// // 
// console.log(gen.next('groceries')); // leaving the store with groceries

// console.log(gen.next('cleane clothes'));


/////////////////////


// function* colors(){
//     yield 'red';
//     yield 'blue';
//     yield 'green';
// }

// const gen = colors();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// const myColors =[];
// for(let color of colors()){
//     myColors.push(color);
// }
// console.log(myColors)


///////////////////

// const engineeringTeam ={
//     size: 3,
//     dept: 'Engineering',
//     lead: 'Jill',
//     manager: 'Alex',
//     engineering: 'Dave'
// }

// function* teamIterator(team){
//     yield team.lead;
//     yield team.manager;
//     yield team.engineering;
// }

// const names =[]
// for(let name of teamIterator(engineeringTeam)){
//     names.push(name);
// }

// console.log(names);

//////////////////////

// generator deligation 
// const testingTeam ={
//     lead: 'Amanda',
//     tester: 'Bill'
// }

// const engineeringTeam ={
//     testingTeam,
//     size: 3,
//     dept: 'Engineering',
//     lead: 'Jill',
//     manager: 'Alex',
//     engineering: 'Dave'
// };

// function* teamIterator(team){
//     yield team.lead;
//     yield team.manager;
//     yield team.engineering;
//     const testingTeamGenerator = testingTeamIterator(team.testingTeam);
//     yield* testingTeamGenerator;
// }

// function* testingTeamIterator(team){
//     yield team.lead;
//     yield team.tester;
// }

// const names =[]
// for(let name of teamIterator(engineeringTeam)){
//     names.push(name);
// }

// console.log(names);

//////////////////////////////

// using symbol iterator

const testingTeam ={
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam ={
    testingTeam,
    size: 3,
    dept: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineering: 'Dave',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.manager;
        yield this.engineering;
        yield* this.testingTeam;
    }
};

const names =[]
for(let name of engineeringTeam){
    names.push(name);
}

console.log(names);

