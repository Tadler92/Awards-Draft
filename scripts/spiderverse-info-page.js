document.body.onload = putInfoOnPage;


const acrossSpiderVerse = {
  Globes: {
    'Best Animated Feature': 4,
    'Best Original Score': 2,
  }
}

// Putting Above info onto page:

const globesTbody = document.querySelector('#globes-table');
const globesPoints = Object.values(acrossSpiderVerse.Globes);
const globesNoms = Object.keys(acrossSpiderVerse.Globes);
const criticsTbody = document.querySelector('#critics-table');
const criticsPoints = Object.values(acrossSpiderVerse.Critics);
const criticsNoms = Object.keys(acrossSpiderVerse.Critics);

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
}