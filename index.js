/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeArr = time.split(":");
  let num = parseInt(timeArr[0]);

  if (num < 12) {
    return "Good Morning"
  } else if (num > 12 && num < 17) {
    return "Good Afternoon"
  } else if (num > 17) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(str) {
  let greetingNode = document.getElementById('greeting');
  greetingNode.innerText = str;
}
