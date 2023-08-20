let myName = '';
let isFocus = false;
let jsInput;
let jsDiv;
let vDOM;

function createVDOM () {
  return [[
    'input',
    myName,
    function handle() {
      myName = jsInput.value;
    },
  ],['div', `Hello, ${myName}!`]];
}

function convert (node) {
  const elem = document.createElement(node[0]);
  // console.log(node);
  if (node[0] === 'div') {
    jsDiv = elem;
    elem.textContent = node[1];
  } else if (node[0] === 'input') {
    jsInput = elem;
    elem.value = node[1];
  }
  if (node[2]) elem.oninput = node[2];
  // console.log(elem);
  return elem;
}

function updateDOM () {
  // console.log('updating')
  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
  vDOM = createVDOM();
  // console.log(vDOM);
  const elems = vDOM.map(node => convert(node));
  document.body.replaceChildren(...elems);
  if (isFocus) jsInput.focus();

}

setInterval(updateDOM, 15)
