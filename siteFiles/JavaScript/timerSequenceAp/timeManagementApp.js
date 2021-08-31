// function timerSequence(event) {
//   console.log("timerSequence"); //This is for de-bugging purposes
//   event.preventDefault(); //This is to prevent the page from auto reloading
//   iterations = 0; //This resets the iterations to zero if the user decides to put new numbers in
//   timeOne = getInputInMilliseconds("duration1");
//   timeTwo = getInputInMilliseconds("duration2");
//   timeThree = getInputInMilliseconds("duration3");
//   maxIterations = getInputValueAsInt("iterations");
//   howMany();
//   return false; //This is another bit of code to ensure prevention of auto reloading
// }

//This declares a function that takes the paramater elementId. When it is invoked in the timer sequence fucntion, it passes the value of duration1 into the parameter elementId.
function getInputInMilliseconds(elementId) {
  //
  let elemValue = getInputValueAsInt(elementId);
  return elemValue * 1000; // Convert to milliseconds
}

function getInputValueAsInt(elementId) {
  let elem = document.getElementById(elementId);
  let elemValue = parseInt(elem.value);
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
