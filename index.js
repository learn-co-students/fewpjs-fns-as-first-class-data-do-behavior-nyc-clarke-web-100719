/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let timeParse = parseInt(time)
  if (timeParse < 12){
    return "Good Morning"
  }
  else if (timeParse >= 12 && timeParse < 17){
    return "Good Afternoon"
  }
  else if (timeParse >= 17){
    return "Good Evening"
  }
}

function displayMessage(string){
  let update = document.getElementById("greeting")
  update.innerText = `${string}`
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
