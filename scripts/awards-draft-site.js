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
        alert("Only 8 films can be submitted.")
      };
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

  // document.querySelector('.js-film-list')
  //   .innerHTML = filmListHTML;
}

function addFilm() {
  const inputElement = document.querySelector('.js-film-input');
  const film = inputElement.value;

  filmList.push(film);
  console.log(filmList);

  inputElement.value = '';

  renderFilmList();
}


// Menu JS:

const menu = document.querySelector('.menu');
const menuItmes = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('#hamburger');
// const closeIcon = document.querySelector('.close-icon');
// const menuIcon = document.querySelector('.menu-icon');
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    hamburger.classList.remove('hide-hamburger');
    // closeIcon.style.display = 'none';
    // menuIcon.style.display = 'block';
  }
  else {
    menu.classList.add('showMenu');
    hamburger.classList.add('hide-hamburger');
    // closeIcon.style.display = 'block';
    // menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);
menuItmes.forEach(
  function (menuItem) {
    menuItem.addEventListener('click', toggleMenu);
  }
);



// Points object:
const points = {
  Oscars: {
    'Best Picture Nom': 8,
    'Best Picture Win': 8,
    'Best Director Nom': 6,
    'Best Director Win': 6,
    'Best Actress Nom': 6,
    'Best Actress Win': 6,
    'Best Actor Nom': 6,
    'Best Actor Win': 6,
    'Best Animated Feature Nom': 6,
    'Best Animated Feature Win': 6,
    'Best Supporting Actress Nom': 4,
    'Best Supporting Actress Win': 4,
    'Best Supporting Actor Nom': 4,
    'Best Supporting Actor Win': 4,
    'Best Original Screemplay Nom': 4,
    'Best Original Screemplay Win': 4,
    'Best Adapted Screemplay Nom': 4,
    'Best Adapted Screemplay Win': 4,
    'Best Documentary Nom': 3,
    'Best Documentary Win': 3,
    'Best Documentary Short Nom': 3,
    'Best Documentary Short Win': 3,
    'Best Animated Short Nom': 3,
    'Best Animated Short Win': 3,
    'Best Live Action Short Nom': 3,
    'Best Live Action Short Win': 3,
    'Best Original Score Nom': 3,
    'Best Original Score Win': 3,
    'Best Original Song Nom': 3,
    'Best Original Song Win': 3,
    'Best Foreign Film Nom': 3,
    'Best Foreign Film Win': 3,
    'Best Cinematography Nom': 3,
    'Best Cinematography Win': 3,
    'Best Costume Design Nom': 3,
    'Best Costume Design Win': 3,
    'Best Makeup and Hairstyling Nom': 3,
    'Best Makeup and Hairstyling Win': 3,
    'Best Production Design Nom': 3,
    'Best Production Design Win': 3,
    'Best Sound Editing Nom': 3,
    'Best Sound Editing Win': 3,
    'Best Sound Mixing Nom': 3,
    'Best Sound Mixing Win': 3,
    'Best Visual Effects Nom': 3,
    'Best Visual Effects Win': 3,
    'Best Film Editing Nom': 3,
    'Best Film Editing Win': 3,
  },
  Globes: {
    'Best Drama Nom': 5,
    'Best Drama Win': 5,
    'Best Musical/Comedy Nom': 5,
    'Best Musical/Comedy Win': 5,
    'Best Actor Drama Nom': 4,
    'Best Actor Drama Win': 4,
    'Best Actress Drama Nom': 4,
    'Best Actress Drama Win': 4,
    'Best Actor Musical/Comedy Nom': 4,
    'Best Actor Musical/Comedy Win': 4,
    'Best Actress Musical/Comedy Nom': 4,
    'Best Actress Musical/Comedy Win': 4,
    'Best Director Nom': 4,
    'Best Director Win': 4,
    'Best Animated Feature Nom': 4,
    'Best Animated Feature Win': 4,
    'Best Supporting Actor Nom': 3,
    'Best Supporting Actor Win': 3,
    'Best Supporting Actress Nom': 3,
    'Best Supporting Actress Win': 3,
    'Best Screemplay Nom': 2,
    'Best Screemplay Win': 2,
    'Best Original Score Nom': 2,
    'Best Original Score Win': 2,
    'Best Original Song Nom': 2,
    'Best Original Song Win': 2,
    'Best Foreign Film Nom': 2,
    'Best Foreign Film Win': 2,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Picture Win': 4,
    'Best Actor Nom': 3,
    'Best Actor Win': 3,
    'Best Actress Nom': 3,
    'Best Actress Win': 3,
    'Best Director Nom': 3,
    'Best Director Win': 3,
    'Best Supporting Actor Nom': 2,
    'Best Supporting Actor Win': 2,
    'Best Supporting Actress Nom': 2,
    'Best Supporting Actress Win': 2,
    'Best Acting Ensemble Nom': 2,
    'Best Acting Ensemble Win': 2,
    'Best Original Screemplay Nom': 1,
    'Best Original Screemplay Win': 1,
    'Best Adapted Screemplay Nom': 1,
    'Best Adapted Screemplay Win': 1,
  },
  SAG: {
    'Best Ensemble Nom': 4,
    'Best Ensemble Win': 4,
    'Best Actress Nom': 3,
    'Best Actress Win': 3,
    'Best Actor Nom': 3,
    'Best Actor Win': 3,
    'Best Supporting Actress Nom': 2,
    'Best Supporting Actress Win': 2,
    'Best Supporting Actor Nom': 2,
    'Best Supporting Actor Win': 2,
    'Best Stunt Nom': 1,
    'Best Stunt Win': 1,
  },
  DGA: {
    'Best Director Theatrical Film Nom': 3,
    'Best Director Theatrical Film Win': 3,
    'Best First-Time Director Nom': 2,
    'Best First-Time Director Win': 2,
    'Best Director Documentary Nom': 2,
    'Best Director Documentary Win': 2,
  },
  WGA: {
    'Best Original Screenplay Nom': 2,
    'Best Original Screenplay Win': 2,
    'Best Adapted Screenplay Nom': 2,
    'Best Adapted Screenplay Win': 2,
    'Best Documentary Screenplay Nom': 1,
    'Best Documentary Screenplay Win': 1,
  },
  Razzies: {
    'Worst Picture Nom': 4,
    'Worst Picture Win': 4,
    'Worst Actor Nom': 3,
    'Worst Actor Win': 3,
    'Worst Actress Nom': 3,
    'Worst Actress Win': 3,
    'Worst Director Nom': 3,
    'Worst Director Win': 3,
    'Worst Supporting Actor Nom': 2,
    'Worst Supporting Actor Win': 2,
    'Worst Supporting Actress Nom': 2,
    'Worst Supporting Actress Win': 2,
    'Worst Screenplay Nom': 1,
    'Worst Screenplay Win': 1,
    'Worst Prequel/Remake/Sequel Nom': 1,
    'Worst Prequel/Remake/Sequel Win': 1,
    'Worst Screen Combo Nom': 1,
    'Worst Screen Combo Win': 1,
  }
}

// Movie Objects to keep track of Awards and points:
const oppenheimer = {
  Globes: {
    'Best Drama Nom': 5,
    'Best Drama Win': 5,
    'Best Actor Drama Nom': 4,
    'Best Actor Drama Win': 4,
    'Best Director Nom': 4,
    'Best Director Win': 4,
    'Best Supporting Actor Nom': 3,
    'Best Supporting Actor Win': 3,
    'Best Supporting Actress Nom': 3,
    'Best Screenplay Nom': 2,
    'Best Original Score Nom': 2,
    'Best Original Score Win': 2,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Picture Win': 4,
    'Best Actor Nom': 3,
    'Best Director Nom': 3,
    'Best Director Win': 3,
    'Best Supporting Actor Nom': 2,
    'Best Supporting Actor Win': 2,
    'Best Supporting Actress Nom': 2,
    'Best Acting Ensemble Nom': 2,
    'Best Acting Ensemble Win': 2,
    'Best Adapted Screenplay Nom': 1,
  },
  Sag: {
    'Best Ensemble Nom': 4,
    'Best Actor Nom': 3,
    'Best Supporting Actress Nom': 2,
    'Best Supporting Actor Nom': 2,
  },
  Dga: {
    'Best Director Theatrical Film Nom': 3,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Director Nom': 6,
    'Best Actor Nom': 6,
    'Best Supporting Actress Nom': 4,
    'Best Supporting Actor Nom': 4,
    'Best Adapted Screenplay Nom': 4,
    'Best Original Score Nom': 3,
    'Best Cinematography Nom': 2,
    'Best Costume Design Nom': 2,
    'Best Makeup and Hairstyling Nom': 2,
    'Best Production Design Nom': 2,
    'Best Sound Nom': 2,
    'Best Film Editing Nom': 2,
  },
}
const killersOfFlowerMoon = {
  Globes: {
    'Best Drama Nom': 5,
    'Best Actor Drama Nom': 4,
    'Best Actress Drama Nom': 4,
    'Best Actress Drama Win': 4,
    'Best Director Nom': 4,
    'Best Supporting Actor Nom': 3,
    'Best Screenplay Nom': 2,
    'Best Original Score Nom': 2,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actor Nom': 3,
    'Best Actress Nom': 3,
    'Best Director Nom': 3,
    'Best Supporting Actor Nom': 2,
    'Best Acting Ensemble Nom': 2,
    'Best Adapted Screenplay Nom': 1,
  },
  Sag: {
    'Best Ensemble Nom': 4,
    'Best Actress Nom': 3,
    'Best Supporting Actor Nom': 2,
  },
  Dga: {
    'Best Director Theatrical Film Nom': 3,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Director Nom': 6,
    'Best Actress Nom': 6,
    'Best Supporting Actor Nom': 4,
    'Best Original Score Nom': 3,
    'Best Original Song Nom': 3,
    'Best Cinematography Nom': 2,
    'Best Costume Design Nom': 2,
    'Best Production Design Nom': 2,
    'Best Film Editing Nom': 2,
  },
}
const maestro = {
  Globes: {
    'Best Drama Nom': 5,
    'Best Actor Drama Nom': 4,
    'Best Actress Drama Nom': 4,
    'Best Director Nom': 4,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actor Nom': 3,
    'Best Actress Nom': 3,
    'Best Director Nom': 3,
    'Best Original Screenplay Nom': 1,
  },
  Sag: {
    'Best Actress Nom': 3,
    'Best Actor Nom': 3,
  },
  Dga: {
    'no Noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Actor Nom': 6,
    'Best Actress Nom': 6,
    'Best Original Screenplay Nom': 4,
    'Best Cinematography Nom': 2,
    'Best Makeup and Hairstyling Nom': 2,
    'Best Sound Nom': 2,
  },
}
const pastLives = {
  Globes: {
    'Best Drama Nom': 5,
    'Best Actress Drama Nom': 4,
    'Best Director Nom': 4,
    'Best Screenplay Nom': 2,
    'Best Foreign Film Nom': 2,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actress Nom': 3,
    'Best Original Screenplay Nom': 1,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'Best First-Time Director Nom': 2,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Original Screenplay Nom': 4,
  },
}
const zoneOfInterest = {
  Globes: {
    'Best Drama Nom': 5,
    'Best Original Score Nom': 2,
    'Best Foreign Film Nom': 2,
  },
  Critics: {
    'no noms': 0
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no Noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Director Nom': 6,
    'Best Adapted Screenplay Nom': 4,
    'Best Foreign Film Nom': 3,
    'Best Sound Nom': 2,
  },
}
const anatomyOfAFall = {
  Globes: {
    'Best Drama Nom': 5,
    'Best Actress Drama Nom': 4,
    'Best Screenplay Nom': 2,
    'Best Screenplay Win': 2,
    'Best Foreign Film Nom': 2,
    'Best Foreign Film Win': 2,
  },
  Critics: {
    'Best Actress Nom': 3,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no Noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Director Nom': 6,
    'Best Actress Nom': 6,
    'Best Original Screenplay Nom': 4,
    'Best Film Editing Nom': 2,
  },
}
const barbie = {
  Globes: {
    'Best Musical/Comedy Nom': 5,
    'Best Actress Musical/Comedy Nom': 4,
    'Best Director Nom': 4,
    'Best Supporting Actor Nom': 3,
    'Best Screenplay Nom': 2,
    'Best Original Song Nom': (2 + 2 + 2),
    'Best Original Song Win': 2,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actress Nom': 3,
    'Best Director Nom': 3,
    'Best Supporting Actor Nom': 2,
    'Best Supporting Actress Nom': 2,
    'Best Acting Ensemble Nom': 2,
    'Best Original Screenplay Nom': 1,
    'Best Original Screenplay Win': 1,
  },
  Sag: {
    'Best Ensemble Nom': 4,
    'Best Actress Nom': 3,
    'Best Supporting Actor Nom': 2,
    'Best Stunt Nom': 1,

  },
  Dga: {
    'Best Director Theatrical Film Nom': 3,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Supporting Actress Nom': 4,
    'Best Supporting Actor Nom': 4,
    'Best Adapted Screenplay Nom': 4,
    'Best Original Song Nom': (3 + 3),
    'Best Costume Design Nom': 2,
    'Best Production Design Nom': 2,
  },
}
const poorThings = {
  Globes: {
    'Best Musical/Comedy Nom': 5,
    'Best Musical/Comedy Win': 5,
    'Best Actress Musical/Comedy Nom': 4,
    'Best Actress Musical/Comedy Win': 4,
    'Best Director Nom': 4,
    'Best Supporting Actor Nom': (3 + 3),
    'Best Screenplay Nom': 2,
    'Best Original Score Nom': 2,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actress Nom': 3,
    'Best Actress Win': 3,
    'Best Director Nom': 3,
    'Best Supporting Actor Nom': 2,
    'Best Adapted Screenplay Nom': 1,
  },
  Sag: {
    'Best Actress Nom': 3,
    'Best Supporting Actor Nom': 2,
  },
  Dga: {
    'Best Director Theatrical Film Nom': 3,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Director Nom': 6,
    'Best Actress Nom': 6,
    'Best Supporting Actor Nom': 4,
    'Best Adapted Screenplay Nom': 4,
    'Best Original Score Nom': 3,
    'Best Cinematography Nom': 2,
    'Best Costume Design Nom': 2,
    'Best Makeup and Hairstyling Nom': 2,
    'Best Production Design Nom': 2,
    'Best Film Editing Nom': 2,
  },
}
const americanFiction = {
  Globes: {
    'Best Musical/Comedy Nom': 5,
    'Best Actor Musical/Comedy Nom': 4,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actor Nom': 3,
    'Best Supporting Actor Nom': 2,
    'Best Adapted Screenplay Nom': 1,
    'Best Adapted Screenplay Win': 1,
  },
  Sag: {
    'Best Ensemble Nom': 4,
    'Best Actor Nom': 3,
    'Best Supporting Actor Nom': 2,
  },
  Dga: {
    'Best First-Time Director Nom': 2,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Actor Nom': 6,
    'Best Supporting Actor Nom': 4,
    'Best Adapted Screenplay Nom': 4,
    'Best Original Score Nom': 3,
  },
}
const theHoldovers = {
  Globes: {
    'Best Musical/Comedy Nom': 5,
    'Best Actor Musical/Comedy Nom': 4,
    'Best Actor Musical/Comedy Win': 4,
    'Best Supporting Actress Nom': 3,
    'Best Supporting Actress Win': 3,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actor Nom': 3,
    'Best Actor Win': 3,
    'Best Director Nom': 3,
    'Best Supporting Actress Nom': 2,
    'Best Supporting Actress Win': 2,
    'Best Acting Ensemble Nom': 2,
    'Best Original Screenplay Nom': 1,
  },
  Sag: {
    'Best Actor Nom': 3,
    'Best Supporting Actress Nom': 2,
  },
  Dga: {
    'Best Director Theatrical Film Nom': 3,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Picture Nom': 8,
    'Best Actor Nom': 6,
    'Best Supporting Actress Nom': 4,
    'Best Original Screenplay Nom': 4,
    'Best Film Editing Nom': 2,
  },
}
const mayDecember = {
  Globes: {
    'Best Musical/Comedy Nom': 5,
    'Best Actress Musical/Comedy Nom': 4,
    'Best Supporting Actor Nom': 3,
    'Best Supporting Actress Nom': 3,
  },
  Critics: {
    'Best Supporting Actor Nom': 2,
    'Best Supporting Actress Nom': 2,
    'Best Original Screenplay Nom': 1,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Original Screenplay Nom': 4,
  },
}
const air = {
  Globes: {
    'Best Musical/Comedy Nom': 5,
    'Best Actor Musical/Comedy Nom': 4,
  },
  Critics: {
    'Best Acting Ensemble Nom': 2,
    'Best Original Screenplay Nom': 1,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const rustin = {
  Globes: {
    'Best Actor Drama Nom': 4,
    'Best Original Song Nom': 2,
  },
  Critics: {
    'Best Actor Nom': 3,
  },
  Sag: {
    'Best Actor Nom': 3,
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Actor Nom': 6,
  },
}
const fiveNights = {
  Globes: {
    'no noms': 0,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'Worst Supporting Actress Nom': 2,
  },
  Oscars: {
    'no noms': 0,
  },
}
const saltburn = {
  Globes: {
    'Best Actor Drama Nom': 4,
    'Best Supporting Actress Nom': 3,
  },
  Critics: {
    'Best Picture Nom': 4,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const nyad = {
  Globes: {
    'Best Actress Drama Nom': 4,
    'Best Supporting Actress Nom': 3,
  },
  Critics: {
    'Best Supporting Actress Nom': 2,
  },
  Sag: {
    'Best Actress Nom': 3,
    'Best Supporting Actress Nom': 2,
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Actress Nom': 6,
    'Best Supporting Actress Nom': 4,
  },
}
const ironClaw = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const theColorPurple = {
  Globes: {
    'Best Actress Musical/Comedy Nom': 4,
    'Best Supporting Actress Nom': 3,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Supporting Actress Nom': 2,
    'Best Acting Ensemble Nom': 2,
  },
  Sag: {
    'Best Ensemble Nom': 4,
    'Best Supporting Actress Nom': 2,
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Supporting Actress Nom': 4,
  },
}
const noHardFeelings = {
  Globes: {
    'Best Actress Musical/Comedy Nom': 4,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const leaveWorldBehind = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const hungerGames = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const wonka = {
  Globes: {
    'Best Actor Musical/Comedy Nom': 4,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const insidious = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const boyAndTheHeron = {
  Globes: {
    'Best Animated Feature Nom': 4,
    'Best Animated Feature Win': 4,
    'Best Original Score Nom': 2,
  },
  Critics: {
    'no noms': 0
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Animated Film Nom': 6,
  },
}
const granTurismo = {
  Globes: {
    'no noms': 0,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const acrossSpiderVerse = {
  Globes: {
    'Best Animated Feature Nom': 4,
    'Best Original Score Nom': 2,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Animated Film Nom': 6,
  },
}
const superMarioMovie = {
  Globes: {
    'Best Animated Feature Nom': 4,
    'Best Original Song Nom': 2,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const dungeonsDragons = {
  Globes: {
    'no noms': 0,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const knockCabin = {
  Globes: {
    'no noms': 0,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const johnWick = {
  Globes: {
    'no noms': 0,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'Best Stunt Nom': 1,
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const sixtyFive = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const renfield = {
  Globes: {
    'no noms': 0,
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const areUThereMeMargaret = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'Best Adapted Screenplay Nom': 1,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}

const boysBoat = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}

const rebelMoon = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}

const godzilla = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Visual Effects Nom': 2,
  },
}

const millionMiles = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}

const blackberry = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}
const missionImpossible = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'Best Stunt Nom': 1,
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'Best Sound Nom': 2,
    'Best Visual Effects Nom': 2,
  },
}
const clonedTyrone = {
  Globes: {
    'no noms': 0
  },
  Critics: {
    'no noms': 0,
  },
  Sag: {
    'no noms': 0
  },
  Dga: {
    'no noms': 0,
  },
  Razzies: {
    'no noms': 0,
  },
  Oscars: {
    'no noms': 0,
  },
}




// Adding the points using JS:
document.body.onload = addPoints;
const eeaaoRow = document.querySelector('#EEAAO-row');

const airRow = document.querySelector('#air-row');
const airArr = Object.values(air.Globes).concat(Object.values(air.Critics)).concat(Object.values(air.Sag)).concat(Object.values(air.Dga)).concat(Object.values(air.Razzies)).concat(Object.values(air.Oscars));
const airPoints = airArr.reduce((num, next) => num + next);

const colorPurpleRow = document.querySelector('#color-purple-row');
const cpArr = Object.values(theColorPurple.Globes).concat(Object.values(theColorPurple.Critics)).concat(Object.values(theColorPurple.Sag)).concat(Object.values(theColorPurple.Dga)).concat(Object.values(theColorPurple.Razzies)).concat(Object.values(theColorPurple.Oscars));
const cpPoints = cpArr.reduce((num, next) => num + next);

const barbieRow = document.querySelector('#barbie-row');
const barbieArr = Object.values(barbie.Globes).concat(Object.values(barbie.Critics)).concat(Object.values(barbie.Sag)).concat(Object.values(barbie.Dga)).concat(Object.values(barbie.Razzies)).concat(Object.values(barbie.Oscars));
const barbiePoints = barbieArr.reduce((num, next) => num + next);

const holdoversRow = document.querySelector('#holdovers-row');
const holdoversArr = Object.values(theHoldovers.Globes).concat(Object.values(theHoldovers.Critics)).concat(Object.values(theHoldovers.Sag)).concat(Object.values(theHoldovers.Dga)).concat(Object.values(theHoldovers.Razzies)).concat(Object.values(theHoldovers.Oscars));
const holdoverPoints = holdoversArr.reduce((num, next) => num + next);

const saltburnRow = document.querySelector('#saltburn-row');
const saltburnArr = Object.values(saltburn.Globes).concat(Object.values(saltburn.Critics)).concat(Object.values(saltburn.Sag)).concat(Object.values(saltburn.Dga)).concat(Object.values(saltburn.Razzies)).concat(Object.values(saltburn.Oscars));
const saltburnPoints = saltburnArr.reduce((num, next) => num + next);

const maestroRow = document.querySelector('#maestro-row');
const maestroArr = Object.values(maestro.Globes).concat(Object.values(maestro.Critics)).concat(Object.values(maestro.Sag)).concat(Object.values(maestro.Dga)).concat(Object.values(maestro.Razzies)).concat(Object.values(maestro.Oscars));
const maestroPoints = maestroArr.reduce((num, next) => num + next);

const pastLivesRow = document.querySelector('#past-lives-row');
const plArr = Object.values(pastLives.Globes).concat(Object.values(pastLives.Critics)).concat(Object.values(pastLives.Sag)).concat(Object.values(pastLives.Dga)).concat(Object.values(pastLives.Razzies)).concat(Object.values(pastLives.Oscars));
const plPoints = plArr.reduce((num, next) => num + next);

const poorThingsRow = document.querySelector('#poor-things-row');
const ptArr = Object.values(poorThings.Globes).concat(Object.values(poorThings.Critics)).concat(Object.values(poorThings.Sag)).concat(Object.values(poorThings.Dga)).concat(Object.values(poorThings.Razzies)).concat(Object.values(poorThings.Oscars));
const ptPoints = ptArr.reduce((num, next) => num + next);

const boysBoatRow = document.querySelector('#boys-boat-row');
const boysBoatArr = Object.values(boysBoat.Globes).concat(Object.values(boysBoat.Critics)).concat(Object.values(boysBoat.Sag)).concat(Object.values(boysBoat.Dga)).concat(Object.values(boysBoat.Razzies)).concat(Object.values(boysBoat.Oscars));
const boysBoatPoints = boysBoatArr.reduce((num, next) => num + next);

const amerFicRow = document.querySelector('#amer-fic-row');
const amFicArr = Object.values(americanFiction.Globes).concat(Object.values(americanFiction.Critics)).concat(Object.values(americanFiction.Sag)).concat(Object.values(americanFiction.Dga)).concat(Object.values(americanFiction.Razzies)).concat(Object.values(americanFiction.Oscars));
const amFicPoints = amFicArr.reduce((num, next) => num + next);

const nyadRow = document.querySelector('#nyad-row');
const nyadArr = Object.values(nyad.Globes).concat(Object.values(nyad.Critics)).concat(Object.values(nyad.Sag)).concat(Object.values(nyad.Dga)).concat(Object.values(nyad.Razzies)).concat(Object.values(nyad.Oscars));
const nyadPoints = nyadArr.reduce((num, next) => num + next);

const rustinRow = document.querySelector('#rustin-row');
const rustinArr = Object.values(rustin.Globes).concat(Object.values(rustin.Critics)).concat(Object.values(rustin.Sag)).concat(Object.values(rustin.Dga)).concat(Object.values(rustin.Razzies)).concat(Object.values(rustin.Oscars));
const rustinPoints = rustinArr.reduce((num, next) => num + next);

const rebelMoonRow = document.querySelector('#rebel-moon-row');
const rebMoonArr = Object.values(rebelMoon.Globes).concat(Object.values(rebelMoon.Critics)).concat(Object.values(rebelMoon.Sag)).concat(Object.values(rebelMoon.Dga)).concat(Object.values(rebelMoon.Razzies)).concat(Object.values(rebelMoon.Oscars));
const rebMoonPoints = rebMoonArr.reduce((num, next) => num + next);

const flowerMoonRow = document.querySelector('#flower-moon-row');
const flowerMoonArr = Object.values(killersOfFlowerMoon.Globes).concat(Object.values(killersOfFlowerMoon.Critics)).concat(Object.values(killersOfFlowerMoon.Sag)).concat(Object.values(killersOfFlowerMoon.Dga)).concat(Object.values(killersOfFlowerMoon.Razzies)).concat(Object.values(killersOfFlowerMoon.Oscars));
const flowerMoonPoints = flowerMoonArr.reduce((num, next) => num + next);

const mayDecRow = document.querySelector('#may-dec-row');
const mayDecArr = Object.values(mayDecember.Globes).concat(Object.values(mayDecember.Critics)).concat(Object.values(mayDecember.Sag)).concat(Object.values(mayDecember.Dga)).concat(Object.values(mayDecember.Razzies)).concat(Object.values(mayDecember.Oscars));
const mayDecPoints = mayDecArr.reduce((num, next) => num + next);

const anatomyFallRow = document.querySelector('#anatomy-fall-row');
const anatomyFallArr = Object.values(anatomyOfAFall.Globes).concat(Object.values(anatomyOfAFall.Critics)).concat(Object.values(anatomyOfAFall.Sag)).concat(Object.values(anatomyOfAFall.Dga)).concat(Object.values(anatomyOfAFall.Razzies)).concat(Object.values(anatomyOfAFall.Oscars));
const anatomyFallPoints = anatomyFallArr.reduce((num, next) => num + next);

const zoneInterestRow = document.querySelector('#zone-interest-row');
const zoneInterestArr = Object.values(zoneOfInterest.Globes).concat(Object.values(zoneOfInterest.Critics)).concat(Object.values(zoneOfInterest.Sag)).concat(Object.values(zoneOfInterest.Dga)).concat(Object.values(zoneOfInterest.Razzies)).concat(Object.values(zoneOfInterest.Oscars));
const zoneInterestPoints = zoneInterestArr.reduce((num, next) => num + next);

const boyHeronRow = document.querySelector('#boy-heron-row');
const boyHeronArr = Object.values(boyAndTheHeron.Globes).concat(Object.values(boyAndTheHeron.Critics)).concat(Object.values(boyAndTheHeron.Sag)).concat(Object.values(boyAndTheHeron.Dga)).concat(Object.values(boyAndTheHeron.Razzies)).concat(Object.values(boyAndTheHeron.Oscars));
const boyHeronPoints = boyHeronArr.reduce((num, next) => num + next);

const fiveNightsRow = document.querySelector('#five-nights-row');
const fiveNightsArr = Object.values(fiveNights.Globes).concat(Object.values(fiveNights.Critics)).concat(Object.values(fiveNights.Sag)).concat(Object.values(fiveNights.Dga)).concat(Object.values(fiveNights.Razzies)).concat(Object.values(fiveNights.Oscars));
const fiveNightsPoints = fiveNightsArr.reduce((num, next) => num + next);

const ironClawRow = document.querySelector('#iron-claw-row');
const ironClawArr = Object.values(ironClaw.Globes).concat(Object.values(ironClaw.Critics)).concat(Object.values(ironClaw.Sag)).concat(Object.values(ironClaw.Dga)).concat(Object.values(ironClaw.Razzies)).concat(Object.values(ironClaw.Oscars));
const ironClawPoints = ironClawArr.reduce((num, next) => num + next);

const leaveWorldRow = document.querySelector('#leave-world-row');
const leaveWorldArr = Object.values(leaveWorldBehind.Globes).concat(Object.values(leaveWorldBehind.Critics)).concat(Object.values(leaveWorldBehind.Sag)).concat(Object.values(leaveWorldBehind.Dga)).concat(Object.values(leaveWorldBehind.Razzies)).concat(Object.values(leaveWorldBehind.Oscars));
const leaveWorldPoints = leaveWorldArr.reduce((num, next) => num + next);

const sixtyFiveRow = document.querySelector('#sixty-five-row');
const sixtyFiveArr = Object.values(sixtyFive.Globes).concat(Object.values(sixtyFive.Critics)).concat(Object.values(sixtyFive.Sag)).concat(Object.values(sixtyFive.Dga)).concat(Object.values(sixtyFive.Razzies)).concat(Object.values(sixtyFive.Oscars));
const sixtyFivePoints = sixtyFiveArr.reduce((num, next) => num + next);

const hungerGamesRow = document.querySelector('#hunger-games-row');
const hungerGamesArr = Object.values(hungerGames.Globes).concat(Object.values(hungerGames.Critics)).concat(Object.values(hungerGames.Sag)).concat(Object.values(hungerGames.Dga)).concat(Object.values(hungerGames.Razzies)).concat(Object.values(hungerGames.Oscars));
const hungerGamesPoints = hungerGamesArr.reduce((num, next) => num + next);

const insidiousRow = document.querySelector('#insidious-row');
const insidiousArr = Object.values(insidious.Globes).concat(Object.values(insidious.Critics)).concat(Object.values(insidious.Sag)).concat(Object.values(insidious.Dga)).concat(Object.values(insidious.Razzies)).concat(Object.values(insidious.Oscars));
const insidiousPoints = insidiousArr.reduce((num, next) => num + next);

const spiderverseRow = document.querySelector('#spiderverse-row');
const spiderverseArr = Object.values(acrossSpiderVerse.Globes).concat(Object.values(acrossSpiderVerse.Critics)).concat(Object.values(acrossSpiderVerse.Sag)).concat(Object.values(acrossSpiderVerse.Dga)).concat(Object.values(acrossSpiderVerse.Razzies)).concat(Object.values(acrossSpiderVerse.Oscars));
const spiderversePoints = spiderverseArr.reduce((num, next) => num + next);

const godzillaRow = document.querySelector('#godzilla-row');
const godzillaArr = Object.values(godzilla.Globes).concat(Object.values(godzilla.Critics)).concat(Object.values(godzilla.Sag)).concat(Object.values(godzilla.Dga)).concat(Object.values(godzilla.Razzies)).concat(Object.values(godzilla.Oscars));
const godzillaPoints = godzillaArr.reduce((num, next) => num + next);

const millionMilesRow = document.querySelector('#million-miles-row');
const millionMilesArr = Object.values(millionMiles.Globes).concat(Object.values(millionMiles.Critics)).concat(Object.values(millionMiles.Sag)).concat(Object.values(millionMiles.Dga)).concat(Object.values(millionMiles.Razzies)).concat(Object.values(millionMiles.Oscars));
const millionMilesPoints = millionMilesArr.reduce((num, next) => num + next);

const blackberryRow = document.querySelector('#blackberry-row');
const blackberryArr = Object.values(blackberry.Globes).concat(Object.values(blackberry.Critics)).concat(Object.values(blackberry.Sag)).concat(Object.values(blackberry.Dga)).concat(Object.values(blackberry.Razzies)).concat(Object.values(blackberry.Oscars));
const blackberryPoints = blackberryArr.reduce((num, next) => num + next);

const wonkaRow = document.querySelector('#wonka-row');
const wonkaArr = Object.values(wonka.Globes).concat(Object.values(wonka.Critics)).concat(Object.values(wonka.Sag)).concat(Object.values(wonka.Dga)).concat(Object.values(wonka.Razzies)).concat(Object.values(wonka.Oscars));
const wonkaPoints = wonkaArr.reduce((num, next) => num + next);

const noHFRow = document.querySelector('#hard-feelings-row');
const noHFArr = Object.values(noHardFeelings.Globes).concat(Object.values(noHardFeelings.Critics)).concat(Object.values(noHardFeelings.Sag)).concat(Object.values(noHardFeelings.Dga)).concat(Object.values(noHardFeelings.Razzies)).concat(Object.values(noHardFeelings.Oscars));
const noHFPoints = noHFArr.reduce((num, next) => num + next);

const youThereRow = document.querySelector('#you-there-row');
const youThereArr = Object.values(areUThereMeMargaret.Globes).concat(Object.values(areUThereMeMargaret.Critics)).concat(Object.values(areUThereMeMargaret.Sag)).concat(Object.values(areUThereMeMargaret.Dga)).concat(Object.values(areUThereMeMargaret.Razzies)).concat(Object.values(areUThereMeMargaret.Oscars));
const youTherePoints = youThereArr.reduce((num, next) => num + next);

const oppenheimerRow = document.querySelector('#oppenheimer-row');
const oppenheimerArr = Object.values(oppenheimer.Globes).concat(Object.values(oppenheimer.Critics)).concat(Object.values(oppenheimer.Sag)).concat(Object.values(oppenheimer.Dga)).concat(Object.values(oppenheimer.Razzies)).concat(Object.values(oppenheimer.Oscars));
const oppenheimerPoints = oppenheimerArr.reduce((num, next) => num + next);

const granTurismoRow = document.querySelector('#gran-turismo-row');
const granTurismoArr = Object.values(granTurismo.Globes).concat(Object.values(granTurismo.Critics)).concat(Object.values(granTurismo.Sag)).concat(Object.values(granTurismo.Dga)).concat(Object.values(granTurismo.Razzies)).concat(Object.values(granTurismo.Oscars));
const granTurismoPoints = granTurismoArr.reduce((num, next) => num + next);

const dungeonsDragonsRow = document.querySelector('#dungeons-dragons-row');
const dungeonsDragonsArr = Object.values(dungeonsDragons.Globes).concat(Object.values(dungeonsDragons.Critics)).concat(Object.values(dungeonsDragons.Sag)).concat(Object.values(dungeonsDragons.Dga)).concat(Object.values(dungeonsDragons.Razzies)).concat(Object.values(dungeonsDragons.Oscars));
const dungeonsDragonsPoints = dungeonsDragonsArr.reduce((num, next) => num + next);

const superMarioRow = document.querySelector('#mario-row');
const superMarioArr = Object.values(superMarioMovie.Globes).concat(Object.values(superMarioMovie.Critics)).concat(Object.values(superMarioMovie.Sag)).concat(Object.values(superMarioMovie.Dga)).concat(Object.values(superMarioMovie.Razzies)).concat(Object.values(superMarioMovie.Oscars));
const superMarioPoints = superMarioArr.reduce((num, next) => num + next);

const knockCabinRow = document.querySelector('#knock-cabin-row');
const knockCabinArr = Object.values(knockCabin.Globes).concat(Object.values(knockCabin.Critics)).concat(Object.values(knockCabin.Sag)).concat(Object.values(knockCabin.Dga)).concat(Object.values(knockCabin.Razzies)).concat(Object.values(knockCabin.Oscars));
const knockCabinPoints = knockCabinArr.reduce((num, next) => num + next);

const johnWickRow = document.querySelector('#john-wick-row');
const johnWickArr = Object.values(johnWick.Globes).concat(Object.values(johnWick.Critics)).concat(Object.values(johnWick.Sag)).concat(Object.values(johnWick.Dga)).concat(Object.values(johnWick.Razzies)).concat(Object.values(johnWick.Oscars));
const johnWickPoints = johnWickArr.reduce((num, next) => num + next);

const renfieldRow = document.querySelector('#renfield-row');
const renfieldArr = Object.values(renfield.Globes).concat(Object.values(renfield.Critics)).concat(Object.values(renfield.Sag)).concat(Object.values(renfield.Dga)).concat(Object.values(renfield.Razzies)).concat(Object.values(renfield.Oscars));
const renfieldPoints = renfieldArr.reduce((num, next) => num + next);

const missionImpossibleRow = document.querySelector('#mission-impossible-row');
const missionImpossibleArr = Object.values(missionImpossible.Globes).concat(Object.values(missionImpossible.Critics)).concat(Object.values(missionImpossible.Sag)).concat(Object.values(missionImpossible.Dga)).concat(Object.values(missionImpossible.Razzies)).concat(Object.values(missionImpossible.Oscars));
const missionImpossiblePoints = missionImpossibleArr.reduce((num, next) => num + next);

const clonedTyroneRow = document.querySelector('#tyrone-row');
const clonedTyroneArr = Object.values(clonedTyrone.Globes).concat(Object.values(clonedTyrone.Critics)).concat(Object.values(clonedTyrone.Sag)).concat(Object.values(clonedTyrone.Dga)).concat(Object.values(clonedTyrone.Razzies)).concat(Object.values(clonedTyrone.Oscars));
const clonedTyronePoints = clonedTyroneArr.reduce((num, next) => num + next);

function addPoints() {
  const newTd = document.createElement('td');
  const sumOfPoints = (15 + 15 + 15);
  newTd.innerText = `${sumOfPoints}`;

  // Either Way Works

  // newTd.innerText = (15 + 15 + 15);
  // return eeaaoRow.appendChild(newTd);
  // eeaaoRow.appendChild(newTd);

  const airTd = document.createElement('td');
  airTd.innerText = `${airPoints}`;
  airTd.classList.add('points-td');
  airRow.appendChild(airTd);

  const cpurpleTd = document.createElement('td');
  cpurpleTd.innerText = `${cpPoints}`;
  cpurpleTd.classList.add('points-td');
  colorPurpleRow.appendChild(cpurpleTd);

  const barbieTd = document.createElement('td');
  barbieTd.innerText = `${barbiePoints}`;
  barbieTd.classList.add('points-td');
  barbieRow.appendChild(barbieTd);

  const holdoversTd = document.createElement('td');
  holdoversTd.innerText = `${holdoverPoints}`;
  holdoversTd.classList.add('points-td');
  holdoversRow.appendChild(holdoversTd);

  const saltburnTd = document.createElement('td');
  saltburnTd.innerText = `${saltburnPoints}`;
  saltburnTd.classList.add('points-td');
  saltburnRow.appendChild(saltburnTd);

  const maestroTd = document.createElement('td');
  maestroTd.innerText = `${maestroPoints}`;
  maestroTd.classList.add('points-td');
  maestroRow.appendChild(maestroTd);

  const plivesTd = document.createElement('td');
  plivesTd.innerText = `${plPoints}`;
  plivesTd.classList.add('points-td');
  pastLivesRow.appendChild(plivesTd);

  const pThingsTd = document.createElement('td');
  pThingsTd.innerText = `${ptPoints}`;
  pThingsTd.classList.add('points-td');
  poorThingsRow.appendChild(pThingsTd);

  const boysBoatTd = document.createElement('td');
  boysBoatTd.innerText = `${boysBoatPoints}`;
  boysBoatTd.classList.add('points-td');
  boysBoatRow.appendChild(boysBoatTd);

  const amFicTd = document.createElement('td');
  amFicTd.innerText = `${amFicPoints}`;
  amFicTd.classList.add('points-td');
  amerFicRow.appendChild(amFicTd);

  const nyadTd = document.createElement('td');
  nyadTd.innerText = `${nyadPoints}`;
  nyadTd.classList.add('points-td');
  nyadRow.appendChild(nyadTd);

  const rustinTd = document.createElement('td');
  rustinTd.innerText = `${rustinPoints}`;
  rustinTd.classList.add('points-td');
  rustinRow.appendChild(rustinTd);

  const rebMoonTd = document.createElement('td');
  rebMoonTd.innerText = `${rebMoonPoints}`;
  rebMoonTd.classList.add('points-td');
  rebelMoonRow.appendChild(rebMoonTd);

  const flowerMoonTd = document.createElement('td');
  flowerMoonTd.innerText = `${flowerMoonPoints}`;
  flowerMoonTd.classList.add('points-td');
  flowerMoonRow.appendChild(flowerMoonTd);

  const mayDecTd = document.createElement('td');
  mayDecTd.innerText = `${mayDecPoints}`;
  mayDecTd.classList.add('points-td');
  mayDecRow.appendChild(mayDecTd);

  const anatFallTd = document.createElement('td');
  anatFallTd.innerText = `${anatomyFallPoints}`;
  anatFallTd.classList.add('points-td');
  anatomyFallRow.appendChild(anatFallTd);

  const zoneIntTd = document.createElement('td');
  zoneIntTd.innerText = `${zoneInterestPoints}`;
  zoneIntTd.classList.add('points-td');
  zoneInterestRow.appendChild(zoneIntTd);

  const boyHeronTd = document.createElement('td');
  boyHeronTd.innerText = `${boyHeronPoints}`;
  boyHeronTd.classList.add('points-td');
  boyHeronRow.appendChild(boyHeronTd);

  const fiveNightsTd = document.createElement('td');
  fiveNightsTd.innerText = `${fiveNightsPoints}`;
  fiveNightsTd.classList.add('points-td');
  fiveNightsRow.appendChild(fiveNightsTd);

  const ironClawTd = document.createElement('td');
  ironClawTd.innerText = `${ironClawPoints}`;
  ironClawTd.classList.add('points-td');
  ironClawRow.appendChild(ironClawTd);

  const leaveWorldTd = document.createElement('td');
  leaveWorldTd.innerText = `${leaveWorldPoints}`;
  leaveWorldTd.classList.add('points-td');
  leaveWorldRow.appendChild(leaveWorldTd);

  const sixtyFiveTd = document.createElement('td');
  sixtyFiveTd.innerText = `${sixtyFivePoints}`;
  sixtyFiveTd.classList.add('points-td');
  sixtyFiveRow.appendChild(sixtyFiveTd);

  const hungerGamesTd = document.createElement('td');
  hungerGamesTd.innerText = `${hungerGamesPoints}`;
  hungerGamesTd.classList.add('points-td');
  hungerGamesRow.appendChild(hungerGamesTd);

  const insidiousTd = document.createElement('td');
  insidiousTd.innerText = `${insidiousPoints}`;
  insidiousTd.classList.add('points-td');
  insidiousRow.appendChild(insidiousTd);

  const spiderverseTd = document.createElement('td');
  spiderverseTd.innerText = `${spiderversePoints}`;
  spiderverseTd.classList.add('points-td');
  spiderverseRow.appendChild(spiderverseTd);

  const godzillaTd = document.createElement('td');
  godzillaTd.innerText = `${godzillaPoints}`;
  godzillaTd.classList.add('points-td');
  godzillaRow.appendChild(godzillaTd);

  const millionMilesTd = document.createElement('td');
  millionMilesTd.innerText = `${millionMilesPoints}`;
  millionMilesTd.classList.add('points-td');
  millionMilesRow.appendChild(millionMilesTd);

  const blackberryTd = document.createElement('td');
  blackberryTd.innerText = `${blackberryPoints}`;
  blackberryTd.classList.add('points-td');
  blackberryRow.appendChild(blackberryTd);

  const wonkaTd = document.createElement('td');
  wonkaTd.innerText = `${wonkaPoints}`;
  wonkaTd.classList.add('points-td');
  wonkaRow.appendChild(wonkaTd);

  const noHFTd = document.createElement('td');
  noHFTd.innerText = `${noHFPoints}`;
  noHFTd.classList.add('points-td');
  noHFRow.appendChild(noHFTd);

  const youThereTd = document.createElement('td');
  youThereTd.innerText = `${youTherePoints}`;
  youThereTd.classList.add('points-td');
  youThereRow.appendChild(youThereTd);

  const oppenheimerTd = document.createElement('td');
  oppenheimerTd.innerText = `${oppenheimerPoints}`;
  oppenheimerTd.classList.add('points-td');
  oppenheimerRow.appendChild(oppenheimerTd);

  const granTurismoTd = document.createElement('td');
  granTurismoTd.innerText = `${granTurismoPoints}`;
  granTurismoTd.classList.add('points-td');
  granTurismoRow.appendChild(granTurismoTd);

  const dungeonsDragonsTd = document.createElement('td');
  dungeonsDragonsTd.innerText = `${dungeonsDragonsPoints}`;
  dungeonsDragonsTd.classList.add('points-td');
  dungeonsDragonsRow.appendChild(dungeonsDragonsTd);

  const superMarioTd = document.createElement('td');
  superMarioTd.innerText = `${superMarioPoints}`;
  superMarioTd.classList.add('points-td');
  superMarioRow.appendChild(superMarioTd);

  const knockCabinTd = document.createElement('td');
  knockCabinTd.innerText = `${knockCabinPoints}`;
  knockCabinTd.classList.add('points-td');
  knockCabinRow.appendChild(knockCabinTd);

  const johnWickTd = document.createElement('td');
  johnWickTd.innerText = `${johnWickPoints}`;
  johnWickTd.classList.add('points-td');
  johnWickRow.appendChild(johnWickTd);

  const renfieldTd = document.createElement('td');
  renfieldTd.innerText = `${renfieldPoints}`;
  renfieldTd.classList.add('points-td');
  renfieldRow.appendChild(renfieldTd);

  const missionImpossibleTd = document.createElement('td');
  missionImpossibleTd.innerText = `${missionImpossiblePoints}`;
  missionImpossibleTd.classList.add('points-td');
  missionImpossibleRow.appendChild(missionImpossibleTd);

  const clonedTyroneTd = document.createElement('td');
  clonedTyroneTd.innerText = `${clonedTyronePoints}`;
  clonedTyroneTd.classList.add('points-td');
  clonedTyroneRow.appendChild(clonedTyroneTd);
}


// Column Graph:
// function drawChart() {
//   // Set Data
//   const data = google.visualization.arrayToDataTable([
//     ['Name', 'Points', { role: 'style' }, { role: 'annotation' }],
//     ['Trevor', 'Points', blue, 'Trevor'],
//     ['Kellie', 'Points', purple, 'Kellie'],
//     ['Kaylyn', 'Points', yellow, 'Kaylyn'],
//     ['Travis', 'Points', green, 'Travis'],
//     ['Kyle', 'Points', red, 'Kyle'],
//     ['Haley', 'Points', orange, 'Haley'],
//   ]);

//   // Set Options
//   const options = {
//     title: 'Points Leaders'
//   };

//   // Draw
//   const chart = new google.visualization.ColumnChart(document.getElementById('graph'));
//   chart.draw(data, options);
// }