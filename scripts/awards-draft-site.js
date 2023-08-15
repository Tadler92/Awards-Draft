const addName = []

function addUserName() {
  const inputElement = document.querySelector('.js-name-entry-one');
  const name = inputElement.value;
  console.log(name)

  const inputUserName = document.querySelector('.js-name-entry-one');
  const selectedName = document.createElement('p');
  selectedName.innerHTML = `${name}`;
  inputUserName.parentNode.replaceChild(selectedName, inputUserName);

  const submitButton = document.querySelector('.user-name-button');
  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  submitButton.parentNode.replaceChild(editButton, submitButton);
}


function addUserName2() {
  const inputElement = document.querySelector('.js-name-entry-two');
  const name = inputElement.value;
  console.log(name)

  const inputUserName = document.querySelector('.js-name-entry-two');
  const selectedName = document.createElement('p');
  selectedName.innerHTML = `${name}`;
  inputUserName.parentNode.replaceChild(selectedName, inputUserName);

  const submitButton = document.querySelector('.js-user-name-button-two');
  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  submitButton.parentNode.replaceChild(editButton, submitButton);
}

function addUserName3() {
  const inputElement = document.querySelector('.js-name-entry-three');
  const name = inputElement.value;
  console.log(name)

  const inputUserName = document.querySelector('.js-name-entry-three');
  const selectedName = document.createElement('p');
  selectedName.innerHTML = `${name}`;
  inputUserName.parentNode.replaceChild(selectedName, inputUserName);

  const submitButton = document.querySelector('.js-user-name-button-three');
  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  submitButton.parentNode.replaceChild(editButton, submitButton);
}

function addUserName4() {
  const inputElement = document.querySelector('.js-name-entry-four');
  const name = inputElement.value;
  console.log(name)

  const inputUserName = document.querySelector('.js-name-entry-four');
  const selectedName = document.createElement('p');
  selectedName.innerHTML = `${name}`;
  inputUserName.parentNode.replaceChild(selectedName, inputUserName);

  const submitButton = document.querySelector('.js-user-name-button-four');
  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  submitButton.parentNode.replaceChild(editButton, submitButton);
}

function addUserName5() {
  const inputElement = document.querySelector('.js-name-entry-five');
  const name = inputElement.value;
  console.log(name)

  const inputUserName = document.querySelector('.js-name-entry-five');
  const selectedName = document.createElement('p');
  selectedName.innerHTML = `${name}`;
  inputUserName.parentNode.replaceChild(selectedName, inputUserName);

  const submitButton = document.querySelector('.js-user-name-button-five');
  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  submitButton.parentNode.replaceChild(editButton, submitButton);
}

/*
function addUserName() {
  const inputUserName = document.querySelector('input');
  const selectedName = document.createElement('p');
  selectedName.innerHTML = `${name}`;
  inputUserName.parentNode.replaceChild(selectedName, inputUserName);

  console.log(selectedName.innerHTML)
}
*/