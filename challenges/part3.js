let myName = '';
let isFocus = false;
let jsInput;
let vDOM;

function createVDOM () {
  return [[
    'input',
    myName,
    function handle() {
      myName = jsInput.value;
    },
  ],['div', `Hello, ${myName}!`, '', [ ['div', 'hi', '', [ ['div', 'hi'], ['div', 'yo'] ]], ['div', 'yo'] ]]];
}

function convert (node) {
  // this function takes in an array that characterizes an html element
  // and converts it to a dom node, then returns it

  // TODO need to refactor this so that line 28 and line 40 don't repeat the same action
  // in the case of a childless node 

  // TODO resolve this Invalid Path in liveServer.settings.root settings error
  // you probably need a local settings file to point live server to challenges/index.html?

  // first array element is the type
  const elem = document.createElement(node[0]);

  // second array element is the text
  if (node[0] === 'div') {
    elem.textContent = node[1];
  } else if (node[0] === 'input') {
    jsInput = elem;
    elem.value = node[1];
  }

  // third array element is the optional handler function
  if (node[2]) elem.oninput = node[2];

  // fourth array element is the nested elements
  if (node[3]){
    const nestedElems = node[3].map(node => convert(node));
    elem.replaceChildren(node[1], ...nestedElems);
  }
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
