//your JS code here. If required.
// Get the target element with the id "level"
const targetElement = document.getElementById("level");

// Function to calculate the DOM level of an element
function getDomLevel(element) {
  let level = 0;
  let currentElement = element;

  // Traverse up the DOM tree until we reach the root element (html)
  while (currentElement) {
    level++;
    currentElement = currentElement.parentElement;
  }

  return level;
}

// Calculate the DOM level of the target element
const domLevel = getDomLevel(targetElement);

// Display the result using alert()
alert(`The level of the element is: ${domLevel}`);