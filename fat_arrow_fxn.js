// const sum = function(a,b){
//     return a+b;
// }

// console.log(sum(1,2));

// fat arrow
// const add = (a,b) =>  a+b;

// console.log(add(1,5));

// const double = number => 2*number;
// console.log(double(5));

// const a = ( sum => sum+50);
// console.log(a(50));


// const team = {
//     members : ['jane', 'bill'],
//     teamName: 'Super squad',
//     teamSummary: function(){
//         let self = this;
//         return this.members.map(member =>{
//             return `${member} is on team ${self.teamName}`;
//         })
//     }
// }

// console.log(team.teamSummary())


const team = {
    members : ['jane', 'bill'],
    teamName: 'Super squad',
    teamSummary: function(){
        return this.members.map(member =>{
            return `${member} is on team ${this.teamName}`;
        })
    }
}
console.log(team.teamSummary())