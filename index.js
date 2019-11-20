/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(twentyFourHourTime) {
  const parsedTime = twentyFourHourTime.split(":");
  const hour = parsedTime[0];
  const min = parsedTime[1];
  if (hour <= 12) {
    return "Good Morning";
  } else if (hour > 12 && hour <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.querySelector("#greeting").innerText = message;
}
