document.body.onload = putInfoOnPage;


const killersOfFlowerMoon = {
  Globes: {
    'Best Drama': 5,
    'Best Actor Drama': 4,
    'Best Actress Drama': 4,
    'Best Director': 4,
    'Best Supporting Actor': 3,
    'Best Screenplay': 2,
    'Best Original Score': 2,
  },
  Critics: {
    'Best Picture': 4,
    'Best Actor': 3,
    'Best Actress': 3,
    'Best Director': 3,
    'Best Supporting Actor': 2,
    'Best Acting Ensemble': 2,
    'Best Adapted Screenplay': 1,
  },
}

// Putting Above info onto page:

const globesTbody = document.querySelector('#globes-table');
const globesPoints = Object.values(killersOfFlowerMoon.Globes);
const globesNoms = Object.keys(killersOfFlowerMoon.Globes);
const criticsTbody = document.querySelector('#critics-table');
const criticsPoints = Object.values(killersOfFlowerMoon.Critics);
const criticsNoms = Object.keys(killersOfFlowerMoon.Critics);

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
  globesWinTD1.innerText = '-----';
  globesWinTD1.classList.add('win-column');
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
  globesWinTD2.innerText = '-----';
  globesWinTD2.classList.add('win-column');
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
  globesWinTD3.innerText = '-----';
  globesWinTD3.classList.add('win-column');
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
  globesWinTD4.innerText = '-----';
  globesWinTD4.classList.add('win-column');
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
  globesWinTD5.innerText = '-----';
  globesWinTD5.classList.add('win-column');
  globesRow5.appendChild(globesWinTD5);
  globesTbody.appendChild(globesRow5);

  const globesRow6 = document.createElement('tr');
  const globesCatTD6 = document.createElement('td');
  const globesNomTD6 = document.createElement('td');
  const globesWinTD6 = document.createElement('td');
  globesCatTD6.innerText = `${globesNoms[5]}`;
  globesRow6.appendChild(globesCatTD6);
  globesNomTD6.innerText = `${globesPoints[5]} pts`;
  globesNomTD6.classList.add('nom-column');
  globesRow6.appendChild(globesNomTD6);
  globesWinTD6.innerText = '-----';
  globesWinTD6.classList.add('win-column');
  globesRow6.appendChild(globesWinTD6);
  globesTbody.appendChild(globesRow6);

  const globesRow7 = document.createElement('tr');
  const globesCatTD7 = document.createElement('td');
  const globesNomTD7 = document.createElement('td');
  const globesWinTD7 = document.createElement('td');
  globesCatTD7.innerText = `${globesNoms[6]}`;
  globesRow7.appendChild(globesCatTD7);
  globesNomTD7.innerText = `${globesPoints[6]} pts`;
  globesNomTD7.classList.add('nom-column');
  globesRow7.appendChild(globesNomTD7);
  globesWinTD7.innerText = '-----';
  globesWinTD7.classList.add('win-column');
  globesRow7.appendChild(globesWinTD7);
  globesTbody.appendChild(globesRow7);
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
  criticsWinTD1.innerText = '-----';
  criticsWinTD1.classList.add('win-column');
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
  criticsWinTD2.innerText = '-----';
  criticsWinTD2.classList.add('win-column');
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
  criticsWinTD3.innerText = '-----';
  criticsWinTD3.classList.add('win-column');
  criticsRow3.appendChild(criticsWinTD3);
  criticsTbody.appendChild(criticsRow3);

  const criticsRow4 = document.createElement('tr');
  const criticsCatTD4 = document.createElement('td');
  const criticsNomTD4 = document.createElement('td');
  const criticsWinTD4 = document.createElement('td');
  criticsCatTD4.innerText = `${criticsNoms[3]}`;
  criticsRow4.appendChild(criticsCatTD4);
  criticsNomTD4.innerText = `${criticsPoints[3]} pts`;
  criticsNomTD4.classList.add('nom-column');
  criticsRow4.appendChild(criticsNomTD4);
  criticsWinTD4.innerText = '-----';
  criticsWinTD4.classList.add('win-column');
  criticsRow4.appendChild(criticsWinTD4);
  criticsTbody.appendChild(criticsRow4);

  const criticsRow5 = document.createElement('tr');
  const criticsCatTD5 = document.createElement('td');
  const criticsNomTD5 = document.createElement('td');
  const criticsWinTD5 = document.createElement('td');
  criticsCatTD5.innerText = `${criticsNoms[4]}`;
  criticsRow5.appendChild(criticsCatTD5);
  criticsNomTD5.innerText = `${criticsPoints[4]} pts`;
  criticsNomTD5.classList.add('nom-column');
  criticsRow5.appendChild(criticsNomTD5);
  criticsWinTD5.innerText = '-----';
  criticsWinTD5.classList.add('win-column');
  criticsRow5.appendChild(criticsWinTD5);
  criticsTbody.appendChild(criticsRow5);

  const criticsRow6 = document.createElement('tr');
  const criticsCatTD6 = document.createElement('td');
  const criticsNomTD6 = document.createElement('td');
  const criticsWinTD6 = document.createElement('td');
  criticsCatTD6.innerText = `${criticsNoms[5]}`;
  criticsRow6.appendChild(criticsCatTD6);
  criticsNomTD6.innerText = `${criticsPoints[5]} pts`;
  criticsNomTD6.classList.add('nom-column');
  criticsRow6.appendChild(criticsNomTD6);
  criticsWinTD6.innerText = '-----';
  criticsWinTD6.classList.add('win-column');
  criticsRow6.appendChild(criticsWinTD6);
  criticsTbody.appendChild(criticsRow6);

  const criticsRow7 = document.createElement('tr');
  const criticsCatTD7 = document.createElement('td');
  const criticsNomTD7 = document.createElement('td');
  const criticsWinTD7 = document.createElement('td');
  criticsCatTD7.innerText = `${criticsNoms[6]}`;
  criticsRow7.appendChild(criticsCatTD7);
  criticsNomTD7.innerText = `${criticsPoints[6]} pts`;
  criticsNomTD7.classList.add('nom-column');
  criticsRow7.appendChild(criticsNomTD7);
  criticsWinTD7.innerText = '-----';
  criticsWinTD7.classList.add('win-column');
  criticsRow7.appendChild(criticsWinTD7);
  criticsTbody.appendChild(criticsRow7);
}