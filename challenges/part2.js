let post = undefined;

const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('div');
const jsButton = document.querySelector('button');

function dataToView () {
  // handleClick() simply returns this to the what's on ur mind. it SHOULD be allowing the empty post
  // if (post === '') jsInput.value = post;
  // else {jsInput.value = post ? post : `What's on your mind?`;}
  jsInput.value =
    post == undefined ? `What's on your mind?` : post;
  jsDiv.textContent = post;
}

function handleInput() {
  post = jsInput.value;
  dataToView();
}

function handleClick() {
  post = '';
  dataToView();
}

function handleSubmit () {
  // create a div that will hold the post
  const newDiv = document.createElement("div");
  let newPost
  if (post === undefined) {
    newPost = document.createTextNode(`What's on your mind?`);
  } else {
    newPost = document.createTextNode(post);
  }

  newDiv.appendChild(newPost);
  document.body.append(newDiv);
}

jsInput.oninput = handleInput;
jsInput.onclick = handleClick;
jsButton.onclick = handleSubmit;
setInterval(dataToView(), 50);
