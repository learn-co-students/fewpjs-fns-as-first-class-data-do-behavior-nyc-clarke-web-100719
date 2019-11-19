/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let timeArr = time.split(':');
  let timeInt = Number.parseInt(timeArr[0]);
  if (timeInt >= 0 && timeInt < 12) {
    return "Good Morning";
  } else if (timeInt >= 12 && timeInt < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}