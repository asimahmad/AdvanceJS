var computers = [
    {name: 'Apple', ram: 16},
    {name: 'Dell', ram: 4},
    {name: 'Acer', ram: 8},
    {name: 'HP', ram: 32},
];

var AllComputersCanRunProgram = true;
var OnlySomeComputersCanRunProgram = false;


for(let i=0; i<computers.length;i++)
{
    let computer = computers[i];
    if(computer.ram < 16)
    {
        AllComputersCanRunProgram = false;
    }
    else{
        OnlySomeComputersCanRunProgram = true;
    }
}

//console.log(AllComputersCanRunProgram);
//console.log(OnlySomeComputersCanRunProgram);

let all_can_run = computers.every(computer =>{
    return computer.ram >16;
})

let some_can_run = computers.some(computer =>{
    return computer.ram > 16;
})

// console.log(all_can_run);
// console.log(some_can_run);


// console.log(typeof(NaN));


function Field(value){
    this.value = value;
}


// Another example

Field.prototype.validate = function(){
    return this.value.length >0;
}

let username = new Field('user');
let password = new Field('pass');
let dob = new Field('10/10/2020');

console.log(username.validate() && password.validate());


var fields = [username, password, dob];

let form_isValid = fields.every(field =>{
    return field.validate();
})

if(form_isValid){
    // allow user to submit.
}
else{
    // show some error message.
}

