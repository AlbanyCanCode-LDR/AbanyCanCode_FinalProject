function timerSequence(event) {
  console.log("timerSequence");
  event.preventDefault();
  iterations = 0; //Reset counter for another run
  timeOne = getInputInMilliseconds("duration1");
  timeTwo = getInputInMilliseconds("duration2");
  timeThree = getInputInMilliseconds("duration3");
  timeFour = getInputInMilliseconds("duration4");
  maxIterations = getInputValueAsInt("iterations");
  howMany();
  return false;
}

///////////////////////////////////////////////////////////

function getInputInMilliseconds(elementId) {
  let elemValue = getInputValueAsInt(elementId);
  return elemValue * 1000 * 60; // Convert to milliseconds
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

// For the function named first,
// it takes the value of the Time One Variable and Passes it into
// sleep through the parameter ms

function first() {
  sleep(timeOne).then(() => {
    alert("Great Work!, Start Your Break");
    second();
  });
}

function second() {
  sleep(timeTwo).then(() => {
    alert("You Have Been On Break Long Enough, Time To Get Back To Work");
    third();
  });
}

function third() {
  sleep(timeThree).then(() => {
    alert("Great Work!, Start Your Break");
    fourth();
  });
}

function fourth() {
  sleep(timeFour).then(() => {
    alert("You Have Been On Another Break Long Enough, Time To Get Back To Work");
    howMany();
  });
}

//////////////////////////////////////////////////////////

function howMany() {
  iterations += 1;
  if (iterations <= maxIterations) {
    first();
  }
}

