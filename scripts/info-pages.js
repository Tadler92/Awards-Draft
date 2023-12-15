document.body.onload = putInfoOnPage;


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

// Putting Above info onto page:

const airGlobesTbody = document.querySelector('#globes-table');
const airGlobesPoints = Object.values(air.Globes);
const airCriticsTbody = document.querySelector('#critics-table');
const airCriticsPoints = Object.values(air.Critics);

function putInfoOnPage() {
  // const nom1 = document.createElement('p');
  const airGlobesRow1 = document.createElement('tr');
  const airGlobesCatTD1 = document.createElement('td');
  const airGlobesNomTD1 = document.createElement('td');
  const airGlobesWinTD1 = document.createElement('td');
  airGlobesCatTD1.innerText = 'Best Musical/Comedy';
  airGlobesRow1.appendChild(airGlobesCatTD1);
  airGlobesNomTD1.innerText = `${airGlobesPoints[0]}`;
  airGlobesNomTD1.classList.add('nom-column');
  airGlobesRow1.appendChild(airGlobesNomTD1);
  airGlobesRow1.appendChild(airGlobesWinTD1);
  airGlobesTbody.appendChild(airGlobesRow1);
  // const nom2 = document.createElement('p');
  const airGlobesRow2 = document.createElement('tr');
  const airGlobesCatTD2 = document.createElement('td');
  const airGlobesNomTD2 = document.createElement('td');
  const airGlobesWinTD2 = document.createElement('td');
  airGlobesCatTD2.innerText = 'Best Actor Musical/Comedy';
  airGlobesRow2.appendChild(airGlobesCatTD2);
  airGlobesNomTD2.innerText = `${airGlobesPoints[1]}`;
  airGlobesNomTD2.classList.add('nom-column');
  airGlobesRow2.appendChild(airGlobesNomTD2);
  airGlobesRow2.appendChild(airGlobesWinTD2);
  airGlobesTbody.appendChild(airGlobesRow2);
  // nom2.innerText = `Best Actor Musical/Comedy   ${globesPoints[1]}`;
  // globesNomDiv.appendChild(nom2);
  const airCriticsRow1 = document.createElement('tr');
  const airCriticsCatTD1 = document.createElement('td');
  const airCriticsNomTD1 = document.createElement('td');
  const airCriticsWinTD1 = document.createElement('td');
  airCriticsCatTD1.innerText = 'Best Acting Ensemble';
  airCriticsRow1.appendChild(airCriticsCatTD1);
  airCriticsNomTD1.innerText = `${airCriticsPoints[0]}`;
  airCriticsNomTD1.classList.add('nom-column');
  airCriticsRow1.appendChild(airCriticsNomTD1);
  airCriticsRow1.appendChild(airCriticsWinTD1);
  airCriticsTbody.appendChild(airCriticsRow1);
  // const nom2 = document.createElement('p');
  const airCriticsRow2 = document.createElement('tr');
  const airCriticsCatTD2 = document.createElement('td');
  const airCriticsNomTD2 = document.createElement('td');
  const airCriticsWinTD2 = document.createElement('td');
  airCriticsCatTD2.innerText = 'Best Original Screenplay';
  airCriticsRow2.appendChild(airCriticsCatTD2);
  airCriticsNomTD2.innerText = `${airCriticsPoints[1]}`;
  airCriticsNomTD2.classList.add('nom-column');
  airCriticsRow2.appendChild(airCriticsNomTD2);
  airCriticsRow2.appendChild(airCriticsWinTD2);
  airCriticsTbody.appendChild(airCriticsRow2);
}