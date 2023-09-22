// let myName = "";
// let elems;

// const vDOM = [
//   [
//     "input",
//     myName,
//     function handle() {
//       myName = jsInput.value;
//     },
//   ],
//   ["div", `Hello, ${myName}!`],
//   ["div", 'yea'],
//   ['div', 'nah']
// ];

// function convert(node) {
//   const element = document.createElement(node[0]);
//   element.textContent = node[1];
//   element.value = node[1];
//   element.oninput = node[2];
//   return element;
// }

// elems = vDOM.map(node => convert(node));
// document.body.replaceChildren(...elems);

/** Step @todo */
/* uncomment the code below this line, and comment out the code above*/

let isFocus = false

let myName = '';
let jsInput;
let jsDiv;
let vDOM;
let elems;

function createVDOM() {
  return [
    [
      'input',
      myName,
      function handle() {
        myName = jsInput.value;
      },
    ],
    ['div', `Hello, ${myName}!`],
  ];
}

function updateDOM() {
  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
  vDOM = createVDOM();
  jsInput = convert(vDOM[0]);
  jsDiv = convert(vDOM[1]);
  elems = vDOM.map(node => convert(node));
  document.body.replaceChildren(jsInput, ...elems);
  if(isFocus) jsInput.focus()
}

function convert(node) {
    const element = document.createElement(node[0]);
    element.textContent = node[1];
    element.value = node[1];
    element.oninput = node[2];
    return element;
  }

setInterval(updateDOM, 15);
