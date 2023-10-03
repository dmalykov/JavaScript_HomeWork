// Inheritance and Polymorphism

class Animal {
	constructor(name, habitat) {
		this.name = name;
		this.habitat = habitat;
	}

	getInfo() {
		return `Name: ${this.name}, Habitat: ${this.habitat}`;
	}
}
class Mammal extends Animal {
	constructor(name, habitat) {
		super(name, habitat);
	}

	run() {
		return `${this.name} is running`;
	}

	getInfo() { 
		return `${super.getInfo()}, Action: ${this.run()}`;
	}
}

class Bird extends Animal {
	constructor(name, habitat) {
		super(name, habitat);
	}

	fly() {
		return `can fly`;
	}

	getInfo() {
		return `${super.getInfo()}, Action: ${this.fly()}`;
	}
}

class Dog extends Mammal {
	constructor(name, habitat, breed) {
		super(name, habitat);
		this.breed = breed;
	}

	whoIsGoodDog() {
		return `woof woof` ;
	}

	getInfo() {
		return `${super.getInfo()}, Breed: ${this.breed}, Voice: ${this.whoIsGoodDog()}`;
	}
}

class Penguin extends Bird {
	constructor(name, habitat, species) {
		super(name, habitat);
		this.species = species;
	}

	swim() {
		return `${this.name} is swimming`;
	}

	getInfo() {
		return `${super.getInfo()}, Species: ${this.species}, Action: ${this.swim()}`;
 }
}

const lion = new Mammal('Lion', 'Grasslands');
console.log(lion.getInfo());

const eagle = new Bird('Eagle', 'Mountains');
console.log(eagle.getInfo());

const goldenRetriever = new Dog('Buddy', 'Home', 'Golden Retriever');
console.log(goldenRetriever.getInfo());

const penguin = new Penguin('Penguin', 'Antarctica', 'Emperor Penguin');
console.log(penguin.getInfo());

// ------------------------------------------------------------------

// Encapsulation

class BankAccount {
	constructor(accountHolder, initialBalance) {
	  this._accountHolder = accountHolder;
	  this._balance = initialBalance;
	}
 
	get balance() {
	  return this._balance;
	}
 
	set balance(newBalance) {
	  if (typeof newBalance === 'number' && newBalance >= 0) {
		 this._balance = newBalance;
	  } else {
		 console.error('Invalid balance value. Balance must be a non-negative number.');
	  }
	}
 
	get accountHolder() {
	  return this._accountHolder;
	}
 
	deposit(amount) {
	  if (typeof amount === 'number' && amount > 0) {
		 this._balance += amount;
	  } else {
		 console.error('Invalid deposit amount. Amount must be a positive number.');
	  }
	}

	withdraw(amount) {
	  if (typeof amount === 'number' && amount > 0 && amount <= this._balance) {
		 this._balance -= amount;
	  } else {
		 console.error('Invalid withdrawal amount or insufficient balance.');
	  }
	}
 
	displayAccountInfo() {
		console.log(`Account Holder: ${this.accountHolder}`);
		console.log(`Balance: $${this.balance.toFixed(2)}`);
	 }
  }
 
 const myAccount = new BankAccount('John Doe', 1000);
 
 myAccount.displayAccountInfo();
 
 myAccount.deposit(500);
 myAccount.displayAccountInfo();

//  -------------------------------------------------------------------------

// OOP

class Vehicle {
	constructor(power, gasTank, mass) {
	  this.power = power;
	  this.gasTank = gasTank;
	  this.mass = mass;
	  this.started = false;
	  this.gasLevel = 0;
	}
 
	getMaxSpeed() {
	  return 0.84 * this.power / this.mass;
	}
 
	getGasUsage() {
	  return Math.round(this.getMaxSpeed() / this.power * 100);
	}
 
	startEngine() {
	  this.started = true;
	}
 
	stopEngine() {
	  this.started = false;
	}
 
	drive(speed, distance) {
	  if (!this.started) {
		 console.log("Cannot drive, engine is not started.");
		 return;
	  }
 
	  if (speed > this.getMaxSpeed() || speed < 0) {
		 console.log(`Invalid speed. Speed should be between 0 and ${this.getMaxSpeed()}`);
		 return;
	  }
 
	  const gasUsage = this.getGasUsage();
	  const gasNeeded = (speed * distance * gasUsage) / 100;
 
	  if (gasNeeded > this.gasTank) {
		 console.log("Not enough gas to complete the drive.");
		 return;
	  }
 
	  this.gasTank -= gasNeeded;
	  this.gasLevel += gasNeeded;
	  console.log(`Driving at ${speed} km/h for ${distance} km. Gas used: ${gasNeeded.toFixed(2)} liters.`);
	}
 
	addGas(amount) {
	  if (amount <= 0) {
		 console.log("Invalid amount of gas to add.");
		 return;
	  }
 
	  if (this.gasLevel + amount > this.gasTank) {
		 console.log("Cannot add more gas than the gas tank capacity.");
		 return;
	  }
 
	  this.gasLevel += amount;
	  console.log(`Added ${amount.toFixed(2)} liters of gas. New gas level: ${this.gasLevel.toFixed(2)} liters.`);
	}
 
	printInfo() {
	  console.log(`Power: ${this.power} kW, Gas Tank: ${this.gasTank} liters, Mass: ${this.mass} tons, Started: ${this.started}, Gas Level: ${this.gasLevel.toFixed(2)} liters`);
	}
 }
 
 class Car extends Vehicle {
	constructor(power, gasTank, mass, type, maxPassengerCount) {
	  super(power, gasTank, mass);
	  this.type = type;
	  this.maxPassengerCount = maxPassengerCount;
	  this.passengerCount = 0;
	}
 
	printInfo() {
	  super.printInfo();
	  console.log(`Type: ${this.type}, Max Passenger Count: ${this.maxPassengerCount}, Passenger Count: ${this.passengerCount}`);
	}
 }
 
 class Bus extends Car {
	constructor(power, gasTank, mass, type, maxPassengerCount) {
	  super(power, gasTank, mass, type, maxPassengerCount);
	}
 
	updatePassengers(passengers) {
	  if (passengers < 0 || passengers > this.maxPassengerCount) {
		 console.log("Invalid number of passengers.");
		 return;
	  }
 
	  this.passengerCount = passengers;
	}
 
	printInfo() {
	  super.printInfo();
	  console.log(`Passenger Count: ${this.passengerCount}`);
	}
 }
 
 const vehicle = new Vehicle(100, 50, 2);
 vehicle.startEngine();
 vehicle.drive(60, 100);
 vehicle.addGas(20);
 vehicle.printInfo();
//  ------------------------------------------------------------------