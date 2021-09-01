// let timeOne = 2000; //This sets the duration of the first timer
// let timeTwo = 4000; //This sets the duration of the first timer

// let timeThree = 5000; //This sets the duration of the first timer

// let iterations = 0; //This counter keeps track of how many times the sequence has been run so far
// let maxIterations = 2; ///This sets the total number of times the sequence will run

// function timerSequence(event) {
//   console.log("timerSequence");
//   event.preventDefault();
//   iterations = 0; //Reset counter for another run
//   timeOne = getInputInMilliseconds("duration1");
//   timeTwo = getInputInMilliseconds("duration2");
//   timeThree = getInputInMilliseconds("duration3");
//   maxIterations = getInputValueAsInt("iterations");
//   howMany();
//   return false;
// }

function getInputInMilliseconds(elementId) {
  let elemValue = getInputValueAsInt(elementId);
  return elemValue * 1000; // Convert to milliseconds
}

function getInputValueAsInt(elementId) {
  let elem = document.getElementById(elementId);
  let elemValue = parseInt(elem.value); // Need to validate inputs
  return elemValue;
}

///////////////////////////////////////////////////////

function sleep(ms) {
  function timeoutFunc(resolve) {
    setTimeout(resolve, ms);
  }

  let newProm = new Promise(timeoutFunc);
  return newProm;
}

//////////////////////////////////////////////////////////

// For the function named first, it takes the value of the Time One Variable and Passes it into sleep through the parameter ms

function first() {
  sleep(timeOne).then(() => {
    alert("firstAlert");
    second();
  });
}

function second() {
  sleep(timeTwo).then(() => {
    alert("secondAlert");
    third();
  });
}

function third() {
  sleep(timeThree).then(() => {
    alert("thirdAlert");
    howMany();
  });
}

function howMany() {
  iterations += 1;
  if (iterations <= maxIterations) {
    first();
  }
}

// The call needs to be in the handler for form submit

function timerSequence(event) {
  console.log("timerSequence");
  event.preventDefault();
  iterations = 0; //Reset counter for another run
  timeOne = getInputInMilliseconds("duration1");
  timeTwo = getInputInMilliseconds("duration2");
  timeThree = getInputInMilliseconds("duration3");
  maxIterations = getInputValueAsInt("iterations");
  howMany();
  return false;
}

//Promise Class >> Promise Object >> Promise object has methods and attributes

// somewhere in the Promise implementation, the "resolve" part allows for the implemenation of
// the "then" part

// To Do / Nice to Have:

// 1. clear inputs after every run

/////////////////////////////////////////////

// this model came from https://www.sitepoint.com/delay-sleep-pause-wait/

// function Promise  sleep(int ms)

/*
// Defining a named function
function myFunc(param1, param2) {

}
let myFunc = function(param1, param2) {

}
let myFunc = (param1, param2) => {

}
// Defining an anonymous function
function(param1, param2) {

}

///////////////////////////////////////////////

(param1, param2) => {

}
*/

// The function above is equivalent to the function below

// function (param1,param2){

// }

///////////////////////////////////////////////

// // There is a tendency in JavaScript to write more functionaliy /code on one line (It is a broad debate)
// function sleep(ms) {
//   // When you instantiate a Promise with new, you must pass a parameter;
//   // that parameter is a function, in this case timeoutFunc
//   // timeoutFunc takes one or two parameters, it must have resolve as a first parameter;
//   // the second parameter, reject, is optional
//   // resolve and reject are the names of functions
//   let timeoutFunc = (resolve) => {
//     setTimeout(resolve, ms);
//   };
//   return new Promise(timeoutFunc);
// }
// function myFunc(param1, param2) {

// }

// function sleep(ms) {
//   let myProm = new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   })
//   return myProm;
// }

// function myFun(myParam, myParam2) {
//   return new Promise((resolve, reject) => {
//     someCall(myParam, function(result) {
//       //get some value
//       resolve(result);
//     }, function(err) {
//       reject(err)
//     })
//   })
// }
// myFun.then((data) => {
// data here, was result up above
//})

// myReadFile().then((result) => {
//   // so something with result
// })

// promise definition:  I will do something later, number flashes on screen (resolve),

//code speak version of promise: create a new promise (it takes a function,

// this has two parameters (but its not necessarry for))

// then definition: the actual thing that you were waiting for happens

//////////////////////////////////////////////////////////////////////////

// .then

// names of function paramaters should not be the same as globally defined variables because of
//scope and confusion
// {} what is inside those curly brackets is the function body

// Have an html form and connect javascript to the form submit
// In the function that handles the form submit, you would check the
// value the user entered for maxIterations and set the JS
// variable maxIterations to that value
// THEN you would trigger howMany for the first time
// NOTE: Since you want to stay on the same page, make sure
// the form submit handler has preventDefault

// 1. Define global variables

// 2. ensure that when the user clicks on submit it has a prevent default call

//3. Set value of each global variable to user input value (this means each timer
//needs to be using a variable, not hard-coded value)

// 4. Call howMany
