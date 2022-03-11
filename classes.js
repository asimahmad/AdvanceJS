// // contructure function
// function Car(options){
//     this.title = options.title;
// }

// //add methods to the Car using prototype
// Car.prototype.drive = function(){
//     return 'Vroom';
// }

// const car = new Car({title: 'Focus'});


// // console.log(car.drive());

// // prototypal inheritance

// function Toyota(options){   
//     Car.call(this, options)
//     this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
// Toyota.prototype.honk = function(){
//     return 'Beep';
// }

// const toyota = new Toyota({color: 'red', title:'daily driver'});



// console.log(toyota);
// console.log(toyota.drive());
// console.log(toyota.honk());



// refactor using classes.

class Car{
    constructor({title}){
        this.title = title
    }

    drive(){
        return 'vroom'
    }
}

class Toyota extends Car{
    constructor(options){
        super(options);
        this.color = options.color;
    }

    honk(){
        return 'beep';
    }
}

// const car = new Car({title:'Toyota'});

// console.log(car);

const car = new Toyota({color: 'red', title: 'Toyota'});

console.log(car);
console.log(car.honk())
console.log(car.drive());