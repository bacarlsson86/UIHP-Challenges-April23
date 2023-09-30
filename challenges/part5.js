let vDOM;
let elems;
let isFocus = false;
let prevVDOM;
let data = {name: ''};

function createVDOM() {
  return [
    [
      "input",
      data.name,
      function handle(e) {
        updateData(e.target.value, 'name');
      },
    ],
    ["div", `Hello, ${data.name}!`],
    ["div", `Great job, Jonathan!`],
    ["div", `Great job, Alexa!`],
    ["div", `Great job, Emilia!`],
  ];
}

function updateDOM() {
  if (vDOM)
    document.activeElement == document.querySelector("input")
      ? (isFocus = true)
      : (isFocus = false); // keep this code
  vDOM = createVDOM();
  if(elems == undefined) {
    elems = vDOM.map(convert);
    document.body.append(...elems)
  }
  else {
    prevVDOM = [...vDOM];
    vDOM = createVDOM();
    findDiff(prevVDOM,vDOM)
  }
  if (isFocus) elems[0].focus(); //keep this code
}

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

function updateData(value, label) {
  data[label] = value;
  window.requestAnimationFrame(updateDOM);
}

updateDOM();

// for some reason this doesn't update the display
function findDiff(prevVDOM, currentVDOM) {
    for (let i = 0; i < currentVDOM.length; i++) {
        if(JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])){
            // change the actual DOM element related to that vDOM element!
            // there's something wrong here
            // i'm still working on it
            elems[i].textContent = currentVDOM[i][1];
            elems[i].value = current[i][1];
        }
    }
}

