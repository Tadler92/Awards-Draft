document.body.onload = putInfoOnPage;


const pastLives = {
  Globes: {
    'Best Drama': 5,
    'Best Actress Drama': 4,
    'Best Director': 4,
    'Best Screenplay': 2,
    'Best Foreign Film': 2,
  },
  Critics: {
    'Best Picture': 4,
    'Best Actress': 3,
    'Best Original Screenplay': 1,
  },
}

// Putting Above info onto page:

const globesTbody = document.querySelector('#globes-table');
const globesPoints = Object.values(pastLives.Globes);
const globesNoms = Object.keys(pastLives.Globes);
const criticsTbody = document.querySelector('#critics-table');
const criticsPoints = Object.values(pastLives.Critics);
const criticsNoms = Object.keys(pastLives.Critics);

function putInfoOnPage() {
  // const nom1 = document.createElement('p');
  const globesRow1 = document.createElement('tr');
  const globesCatTD1 = document.createElement('td');
  const globesNomTD1 = document.createElement('td');
  const globesWinTD1 = document.createElement('td');
  globesCatTD1.innerText = `${globesNoms[0]}`;
  globesRow1.appendChild(globesCatTD1);
  globesNomTD1.innerText = `${globesPoints[0]} pts`;
  globesNomTD1.classList.add('nom-column');
  globesRow1.appendChild(globesNomTD1);
  globesRow1.appendChild(globesWinTD1);
  globesTbody.appendChild(globesRow1);
  // const nom2 = document.createElement('p');
  const globesRow2 = document.createElement('tr');
  const globesCatTD2 = document.createElement('td');
  const globesNomTD2 = document.createElement('td');
  const globesWinTD2 = document.createElement('td');
  globesCatTD2.innerText = `${globesNoms[1]}`;
  globesRow2.appendChild(globesCatTD2);
  globesNomTD2.innerText = `${globesPoints[1]} pts`;
  globesNomTD2.classList.add('nom-column');
  globesRow2.appendChild(globesNomTD2);
  globesRow2.appendChild(globesWinTD2);
  globesTbody.appendChild(globesRow2);

  const globesRow3 = document.createElement('tr');
  const globesCatTD3 = document.createElement('td');
  const globesNomTD3 = document.createElement('td');
  const globesWinTD3 = document.createElement('td');
  globesCatTD3.innerText = `${globesNoms[2]}`;
  globesRow3.appendChild(globesCatTD3);
  globesNomTD3.innerText = `${globesPoints[2]} pts`;
  globesNomTD3.classList.add('nom-column');
  globesRow3.appendChild(globesNomTD3);
  globesRow3.appendChild(globesWinTD3);
  globesTbody.appendChild(globesRow3);

  const globesRow4 = document.createElement('tr');
  const globesCatTD4 = document.createElement('td');
  const globesNomTD4 = document.createElement('td');
  const globesWinTD4 = document.createElement('td');
  globesCatTD4.innerText = `${globesNoms[3]}`;
  globesRow4.appendChild(globesCatTD4);
  globesNomTD4.innerText = `${globesPoints[3]} pts`;
  globesNomTD4.classList.add('nom-column');
  globesRow4.appendChild(globesNomTD4);
  globesRow4.appendChild(globesWinTD4);
  globesTbody.appendChild(globesRow4);

  const globesRow5 = document.createElement('tr');
  const globesCatTD5 = document.createElement('td');
  const globesNomTD5 = document.createElement('td');
  const globesWinTD5 = document.createElement('td');
  globesCatTD5.innerText = `${globesNoms[4]}`;
  globesRow5.appendChild(globesCatTD5);
  globesNomTD5.innerText = `${globesPoints[4]} pts`;
  globesNomTD5.classList.add('nom-column');
  globesRow5.appendChild(globesNomTD5);
  globesRow5.appendChild(globesWinTD5);
  globesTbody.appendChild(globesRow5);

  // nom2.innerText = `Best Actor Musical/Comedy   ${globesPoints[1]}`;
  // globesNomDiv.appendChild(nom2);
  const criticsRow1 = document.createElement('tr');
  const criticsCatTD1 = document.createElement('td');
  const criticsNomTD1 = document.createElement('td');
  const criticsWinTD1 = document.createElement('td');
  criticsCatTD1.innerText = `${criticsNoms[0]}`;
  criticsRow1.appendChild(criticsCatTD1);
  criticsNomTD1.innerText = `${criticsPoints[0]} pts`;
  criticsNomTD1.classList.add('nom-column');
  criticsRow1.appendChild(criticsNomTD1);
  criticsRow1.appendChild(criticsWinTD1);
  criticsTbody.appendChild(criticsRow1);
  // const nom2 = document.createElement('p');
  const criticsRow2 = document.createElement('tr');
  const criticsCatTD2 = document.createElement('td');
  const criticsNomTD2 = document.createElement('td');
  const criticsWinTD2 = document.createElement('td');
  criticsCatTD2.innerText = `${criticsNoms[1]}`;
  criticsRow2.appendChild(criticsCatTD2);
  criticsNomTD2.innerText = `${criticsPoints[1]} pts`;
  criticsNomTD2.classList.add('nom-column');
  criticsRow2.appendChild(criticsNomTD2);
  criticsRow2.appendChild(criticsWinTD2);
  criticsTbody.appendChild(criticsRow2);

  const criticsRow3 = document.createElement('tr');
  const criticsCatTD3 = document.createElement('td');
  const criticsNomTD3 = document.createElement('td');
  const criticsWinTD3 = document.createElement('td');
  criticsCatTD3.innerText = `${criticsNoms[2]}`;
  criticsRow3.appendChild(criticsCatTD3);
  criticsNomTD3.innerText = `${criticsPoints[2]} pts`;
  criticsNomTD3.classList.add('nom-column');
  criticsRow3.appendChild(criticsNomTD3);
  criticsRow3.appendChild(criticsWinTD3);
  criticsTbody.appendChild(criticsRow3);
}