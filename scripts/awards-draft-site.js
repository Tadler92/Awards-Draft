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
    'Best Actor Drama Nom': 4,
    'Best Director Nom': 4,
    'Best Supporting Actor Nom': 3,
    'Best Supporting Actress Nom': 3,
    'Best Screenplay Nom': 2,
    'Best Original Score Nom': 2,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actor Nom': 3,
    'Best Director Nom': 3,
    'Best Supporting Actor Nom': 2,
    'Best Supporting Actress Nom': 2,
    'Best Acting Ensemble Nom': 2,
    'Best Adapted Screenplay Nom': 1,
  },
}
const killersOfFlowerMoon = {
  Globes: {
    'Best Drama Nom': 5,
    'Best Actor Drama Nom': 4,
    'Best Actress Drama Nom': 4,
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
}
const zoneOfInterest = {
  Globes: {
    'Best Drama Nom': 5,
    'Best Original Score Nom': 2,
    'Best Foreign Film Nom': 2,
  }
}
const anatomyOfAFall = {
  Globes: {
    'Best Drama Nom': 5,
    'Best Actress Drama Nom': 4,
    'Best Screenplay Nom': 2,
    'Best Foreign Film Nom': 2,
  },
  Critics: {
    'Best Actress Nom': 3,
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
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actress Nom': 3,
    'Best Director Nom': 3,
    'Best Supporting Actor Nom': 2,
    'Best Supporting Actress Nom': 2,
    'Best Acting Ensemble Nom': 2,
    'Best Original Screenplay Nom': 1,
  },
}
const poorThings = {
  Globes: {
    'Best Musical/Comedy Nom': 5,
    'Best Actress Musical/Comedy Nom': 4,
    'Best Director Nom': 4,
    'Best Supporting Actor Nom': (3 + 3),
    'Best Screenplay Nom': 2,
    'Best Original Score Nom': 2,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actress Nom': 3,
    'Best Director Nom': 3,
    'Best Supporting Actor Nom': 2,
    'Best Adapted Screenplay Nom': 1,
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
  },
}
const theHoldovers = {
  Globes: {
    'Best Musical/Comedy Nom': 5,
    'Best Actor Musical/Comedy Nom': 4,
    'Best Supporting Actress Nom': 3,
  },
  Critics: {
    'Best Picture Nom': 4,
    'Best Actor Nom': 3,
    'Best Director Nom': 3,
    'Best Supporting Actress Nom': 2,
    'Best Acting Ensemble Nom': 2,
    'Best Original Screenplay Nom': 1,
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
}
const rustin = {
  Globes: {
    'Best Actor Drama Nom': 4,
    'Best Original Song Nom': 2,
  },
  Critics: {
    'Best Actor Nom': 3,
  },
}
const allOfUsStrangers = {
  Globes: {
    'Best Actor Drama Nom': 4,
  },
  Critics: {
    'Best Adapted Screenplay Nom': 1,
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
}
const nyad = {
  Globes: {
    'Best Actress Drama Nom': 4,
    'Best Supporting Actress Nom': 3,
  },
  Critics: {
    'Best Supporting Actress Nom': 2,
  },
}
const priscilla = {
  Globes: {
    'Best Actress Drama Nom': 4,
  }
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
}
const noHardFeelings = {
  Globes: {
    'Best Actress Musical/Comedy Nom': 4,
  }
}
const fallenLeaves = {
  Globes: {
    'Best Actress Musical/Comedy Nom': 4,
    'Best Foreign Film Nom': 2,
  }
}
const dreamScenario = {
  Globes: {
    'Best Actor Musical/Comedy Nom': 4,
  }
}
const wonka = {
  Globes: {
    'Best Actor Musical/Comedy Nom': 4,
  }
}
const beauIsAfraid = {
  Globes: {
    'Best Actor Musical/Comedy Nom': 4,
  }
}
const boyAndTheHeron = {
  Globes: {
    'Best Animated Feature Nom': 4,
    'Best Original Score Nom': 2,
  }
}
const elemental = {
  Globes: {
    'Best Animated Feature Nom': 4,
  }
}
const acrossSpiderVerse = {
  Globes: {
    'Best Animated Feature Nom': 4,
    'Best Original Score Nom': 2,
  }
}
const superMarioMovie = {
  Globes: {
    'Best Animated Feature Nom': 4,
    'Best Original Song Nom': 2,
  }
}
const suzume = {
  Globes: {
    'Best Animated Feature Nom': 4,
  }
}
const wish = {
  Globes: {
    'Best Animated Feature Nom': 4,
  }
}
const sheCameToMe = {
  Globes: {
    'Best Original Song Nom': 2,
  }
}
const ioCapitano = {
  Globes: {
    'Best Foreign Film Nom': 2,
  }
}
const societyOfTheSnow = {
  Globes: {
    'Best Foreign Film Nom': 2,
  }
}
const areUThereMeMargaret = {
  Critics: {
    'Best Adapted Screenplay Nom': 1,
  }
}




// Adding the points using JS:
document.body.onload = addPoints;
const eeaaoRow = document.querySelector('#EEAAO-row');

const airRow = document.querySelector('#air-row');
const airArr = Object.values(air.Globes).concat(Object.values(air.Critics));
const airPoints = airArr.reduce((num, next) => num + next);

const colorPurpleRow = document.querySelector('#color-purple-row');
const cpArr = Object.values(theColorPurple.Globes).concat(Object.values(theColorPurple.Critics));
const cpPoints = cpArr.reduce((num, next) => num + next);

const barbieRow = document.querySelector('#barbie-row');
const barbieArr = Object.values(barbie.Globes).concat(Object.values(barbie.Critics));
const barbiePoints = barbieArr.reduce((num, next) => num + next);

const holdoversRow = document.querySelector('#holdovers-row');
const holdoversArr = Object.values(theHoldovers.Globes).concat(Object.values(theHoldovers.Critics));
const holdoverPoints = holdoversArr.reduce((num, next) => num + next);

const saltburnRow = document.querySelector('#saltburn-row');
const saltburnArr = Object.values(saltburn.Globes).concat(Object.values(saltburn.Critics));
const saltburnPoints = saltburnArr.reduce((num, next) => num + next);

const maestroRow = document.querySelector('#maestro-row');
const maestroArr = Object.values(maestro.Globes).concat(Object.values(maestro.Critics));
const maestroPoints = maestroArr.reduce((num, next) => num + next);

const pastLivesRow = document.querySelector('#past-lives-row');
const plArr = Object.values(pastLives.Globes).concat(Object.values(pastLives.Critics));
const plPoints = plArr.reduce((num, next) => num + next);

function addPoints() {
  const newTd = document.createElement('td');
  const sumOfPoints = (15 + 15 + 15);
  newTd.innerText = `${sumOfPoints}`;

  // Either Way Works

  // newTd.innerText = (15 + 15 + 15);
  // return eeaaoRow.appendChild(newTd);
  eeaaoRow.appendChild(newTd);

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