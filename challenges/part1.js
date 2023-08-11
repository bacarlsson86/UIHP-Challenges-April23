/** Write your code below */
let post = ""

jsInput = document.querySelector('input')
jsDiv = document.querySelector('div')

jsDiv.textContent = post;

const handleInput = () => {
  post = jsInput.value;
  jsDiv.textContent = post;
}

jsInput.oninput = handleInput;