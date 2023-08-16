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

const filmList = ['Everything Everywhere All At Once', 'Borat'];


/*
const filmList = [{
  name: 'Everything Everywhere All At Once',
  points: '16'
 }, {
  name: 'Borat',
  points: '5'
}];
*/
//^Will use once I figure out points

renderFilmList();

function renderFilmList() {
  let filmListHTML = '';

/*
  filmList.forEach(function(filmObject, index) {
    //const name = filmObject.name;
    //const points = filmObject.points;
    const { name, points } = filmObject
    const html = `<p>${name} ${points}</p>`;
    filmListHTML += html;
  })
*/
//^Preferred method

  for (let i = 0; i < filmList.length; i++) {
    if (i === 8) {
      break;
      if (i += 8) {
        alert("Only 8 films can be submitted.")};
    }
    const film = filmList[i];
    //const name = filmObject.name;
    //const points = filmObject.points;
    //const { name, points } = filmObject
    const html = `<p>${film}`;
    //const html = `<p>${name} ${points}</p>`;
    filmListHTML += html;
  }


  console.log(filmListHTML)

  document.querySelector('.js-film-list')
    .innerHTML = filmListHTML;
}

function addFilm() {
  const inputElement = document.querySelector('.js-film-input');
  const film = inputElement.value;

  filmList.push(film);
  console.log(filmList);

  inputElement.value = '';

  renderFilmList();
}