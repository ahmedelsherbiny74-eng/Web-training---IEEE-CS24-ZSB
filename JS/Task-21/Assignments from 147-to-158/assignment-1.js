class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return `Car Is Running Now`;
    }
    stop() {
        return `Car Is Stopped`;
    }
}


let firstCar = new Car("MG", 2022, 420000);
let secondCar = new Car("MG", 2022, 420000);
let thirdCar = new Car("MG", 2022, 420000);

console.log(`Car One Name Is ${firstCar.n} And Model Is ${firstCar.m} And Price Is ${firstCar.p}`)
console.log(firstCar.run())

//  Needed Output
  
//  "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//  "Car Is Running Now"