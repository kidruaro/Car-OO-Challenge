class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("Beep.")
    }
    toString(){
        console.log(`The vehicle is a ${make} ${model} from ${year}`)
    }

}

//---------------------------------------------

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
        
    }
}

//---------------------------------------------

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
            this.numWheels = 2;
    }    
    revEngine(){
            console.log("VROOM!!!");
    }
}

//---------------------------------------------

class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }

    let garage = new Garage(2);
    garage.vehicles; // []
    garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
    garage.vehicles; // [Car]
    garage.add("Taco"); // "Only vehicles are allowed in here!"

    garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
    // "Vehicle added!"
    garage.vehicles; // [Car, Motorcycle]

    garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
    // "Sorry, we're full."