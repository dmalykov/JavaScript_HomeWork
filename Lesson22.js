// Prototype inheritance

const university = {
	universityName: "Polytechnic",
	dean: "Dean Name",
 };
 
 const faculty = Object.create(university);
 
 faculty.facultyName = "Faculty of Engineering";
 faculty.groups = [[]];
 
 faculty.enlistStudent = function (studentName) {

	const lastGroup = this.groups[this.groups.length - 1];
	if (lastGroup.length < 12) {
	  lastGroup.push(studentName);
	} else {

	  this.groups.push([studentName]);
	}
 };

 console.log(faculty.universityName);
 
 faculty.enlistStudent("Taras");
 console.log(faculty.groups);

//  ---------------------------------------------------------

// Prototype constructor

function Animal(name) {
	this.name = name;
 }
 
 Animal.prototype.getInfo = function () {
	return `This is ${this.name}.`;
 };
 
 function Mammal(name, live) {

	Animal.call(this, name);
	this.live = live;
 }
 
 Mammal.prototype = Object.create(Animal.prototype);
 
 Mammal.prototype.run = function () {
	return `${this.name} is running.`;
 };

 function Bird(name, live) {

	Animal.call(this, name);
	this.live = live;
 }
 
 Bird.prototype = Object.create(Animal.prototype);
 
 Bird.prototype.fly = function () {
	return `${this.name} can fly.`;
 };
 
 function Dog(name, live, breed) {

	Mammal.call(this, name, live);
	this.breed = breed;
 }
 
 Dog.prototype = Object.create(Mammal.prototype);
 
 Dog.prototype.whoIsGoodDog = function () {
	return 'woof woof';
 };
 
 function Penguin(name, live, species) {

	Bird.call(this, name, live);
	this.species = species;
 }
 
 Penguin.prototype = Object.create(Bird.prototype);
 
 Penguin.prototype.fly = function () {
	return "Can't fly.";
 };
 
 Penguin.prototype.swim = function () {
	return `${this.name} can swim.`;
 };
 
 const lion = new Mammal('Lion', 'on land');
 const eagle = new Bird('Eagle', 'in the sky');
 const goldenRetriever = new Dog('Buddy', 'on land', 'Golden Retriever');
 const emperorPenguin = new Penguin('Emperor Penguin', 'in the water', 'Emperor');
 
 console.log(lion.getInfo());
 console.log(eagle.fly());
 console.log(goldenRetriever.whoIsGoodDog());
 console.log(emperorPenguin.fly());
 console.log(emperorPenguin.swim());

//  --------------------------------------------------------------------