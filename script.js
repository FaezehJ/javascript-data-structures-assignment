//START OF REVIEW

// As discussed in class, 2 of the most common and important
// data structures native to javascript: Arrays and Objects

//To review, an array is an ordered collection of data where each item is assigned
//an index starting from 0
//e.g.
let mySampleArray = ["Index 0", "Index 1", "Index 2"];

//An object, is used to store collections of data in a key-value pair format,
//where each key is a string (although quotes are optional for keys without spaces in them) and
//the values can be any data type

let mySampleObject = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

//END OF REVIEW

//START OF ASSIGNMENT
//Given what we just learned, your assignment is to create an array of objects!
//Set the myZooAnimals variable underneath this text to an array of objects that have the
//following keys:
//1. animalType
//2. name
//3. age
//4. pictureURl

//Hint: go to https://unsplash.com for some great, high-res pics and search up whatever animal you want!

//Make sure to make at least 3 animal objects with these keys inside of the myZooAnimals array!

let myZooAnimals = [
  {
      animalType: "Horse",
      name: "Rahna",
      age: 5,
      pictureURL: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },

  {
    animalType: "Parrot",
    name: "Cocka",
    age: 5,
    pictureURL: "https://images.unsplash.com/photo-1623329423038-18c441734417?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
},

  {
      animalType: "Squirrel",
      name: "Sam",
      age: 2,
      pictureURL: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Squirrel_%28183809435%29.jpeg",
  },
  
  {
    animalType: "Lion",
    name: "Sima",
    age: 1,
    pictureURL: "https://cdn.pixabay.com/photo/2019/06/12/09/55/lion-4268869_1280.jpg",
},

{
  animalType: "Dolphin",
  name: "Joya",
  age: 3,
  pictureURL: "https://cdn.pixabay.com/photo/2015/08/25/04/35/dolphin-906176_1280.jpg",
},

{
    animalType: "Peacock",
    name: "Cidar",
    age: 5,
    pictureURL: "https://cdn.pixabay.com/photo/2017/05/29/02/03/peacock-2352723_1280.jpg",
},

];

console.log(myZooAnimals);


//END OF ASSIGNMENT


