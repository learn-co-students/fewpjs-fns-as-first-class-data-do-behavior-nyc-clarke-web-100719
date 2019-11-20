/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
let greatTime = document.querySelector("#greeting")

function greet(str) {
if (parseInt(str) < 12) {
  return "Good Morning";
} else if (parseInt(str) >= 12 && parseInt(str) <= 17) {
  return "Good Afternoon";
} else {
  return "Good Evening";
}
}

function displayMessage(str) {
  return greatTime.innerText = `${str}`;
}