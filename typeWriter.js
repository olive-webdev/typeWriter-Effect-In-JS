const element = document.querySelector("em"), // Get element in DOM
  string = element.textContent, // Get Text inside element
  items = string.split(", "), // Splitting in array
  duration = 100, // Delay after a letter appears (or disappears)
  delai = 15, // Delay after text is fully written, before erasing
  colors = ["#ffa500", "#5f9ea0", "#32cd32"]; // Colors of texts

let count = -1, // Counter starts at -1 because immediatly incremented in function
  item = 0, // Item increments after erasing to select next text to display
    isWrittring = true; // Is writtring or erasing

const animation = () => {
    element.style.color = colors[item]; // Element style color changes for each text in "items"
  if (isWrittring) {
    count++;
    count === items[item].length + delai ? (isWrittring = false) : isWrittring;
    element.innerText = items[item].slice(0, count); // Display one more letter each "count" incremented
  }
  if (!isWrittring) {
    count === 1 ? (isWrittring = true) : isWrittring;
    element.innerText = items[item].slice(0, count); // Display one less letter each "count" decremented
    count--;
    count === 0 ? item++ : item;
    item === 3 ? (item = 0) : item;
  }
    const timer = setTimeout(animation, duration); // Call self function each "duration"
};

window.onload = function () {
  animation();
};
