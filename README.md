<h1 style="color:orangered">Another TypeWriter JS Script</h1>
<br>

[⇨VIEW LIVE ON CODEPEN](https://codepen.io/olive-codepen/pen/PoEMWVN)

<br>

## SEO Friendly, Very Simple & Lightweight, A JS Script TypeWriter Effect ✌

<br>

<p style="font-size:28px">★ Only 339B minimized ⚡ ★</p>

NO NEED TO HAVE MONOSPACE FONT

❝ I tried to be the more efficient possible, and write the less code possible. ❞

☞ FEEL FREE TO GIVE A FEEDBACK, I'M BEGINNER, I WANT TO LEARN.

<br>


### `<HTML>`

Take a look at the `HTML`, all texts are already in DOM. Better for SEO.

In this example, we have 3 texts we want to display with typewriter effect, in the "em" element separated by comma.
```html
<h1>Hi, I’m Olivier Blachere, a <em>Web Developer, Blogger, Design Lover</em></h1>
```


### `{CSS}`

Few lines of `CSS` to make the blinking cursor. Just simple.
```css
em::after{
    content: "|";
    animation: blink 1s infinite;
}
@keyframes blink {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
```


### `${JAVASCRIPT}`

And the `JS` code which is **only 339B minimized**.

A customized color is applyed to each different text.

Easily and Manualy customisable.
```javascript
const el = document.querySelector("em"), // Get element in DOM
  string = el.textContent, // Get Text inside element
  items = string.split(", "), // Splitting in array
  duration = 100, // Delay after a letter appears (or disappears)
  delai = 15, // Delay after text is fully written, before erasing
  colors = ["#ffa500", "#5f9ea0", "#32cd32"]; // Colors of texts

let count = -1, // Counter starts at -1 because immediatly incremented in function
  item = 0, // Item increments after erasing to select next text to display
    isWrittring = true; // Is writtring or erasing

const animation = () => {
  if (isWrittring) {
    count++;
    count === items[item].length + delai ? (isWrittring = false) : isWrittring;
    el.style.color = colors[item]; // Element style color changes for each text in "items"
    el.innerText = items[item].slice(0, count); // Display one more letter each "count" incremented
  }
  if (!isWrittring) {
    count === 1 ? (isWrittring = true) : isWrittring;
    el.innerText = items[item].slice(0, count); // Display one less letter each "count" decremented
    count--;
    count === 0 ? item++ : item;
    item === 3 ? (item = 0) : item;
  }
  const timer = setTimeout(animation, duration); // Call self function each "duration"
};

window.onload = function () {
  animation();
};
```

minified:
```javascript
let h=-1,n=0,w=!0;const e=document.querySelector("em"),i=e.textContent.split(", "),d=100,l=15,c=["#ffa500","#5f9ea0","#32cd32"],a=()=>{e.style.color=c[n],w&&(h++,h===i[n].length+l&&(w=!1),e.innerText=i[n].slice(0,h)),w||(1===h&&(w=!0),e.innerText=i[n].slice(0,h),h--,0===h&&n++,3===n&&(n=0));const t=setTimeout(a,d)};window.onload=()=>a()
```
