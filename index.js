/* Given Code, don't edit */

const log = {
  line: () => {
    const strLine = new Array(50).fill("-");
    console.log(strLine.join(""));
  }
};



function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(dateTime) {
  const intTime = dateTime.split(":");
  const intHour = intTime[0];

  if (intHour < 12) {
    return 'Good Morning';
  } else if (intHour > 12 && intHour < 19) {
    return 'Good Afternoon';
  } else if (intHour >= 19) {
    return 'Good Evening';
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(strMsg) {
  const h1IdGreeting = document.querySelector("#greeting");
  h1IdGreeting.innerText = strMsg;
}