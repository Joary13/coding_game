//output correspond au pourcentage de chaque lettre classé par ordre alphabétique
// ex: input: 'hello';   output :e20 h20 l40 o20

const data = 'hello';

const sortData = data.split('').sort();

const newTab = sortData.map((el) => [el, Math.round(100 / sortData.length)]);
for (let i = 0; i < newTab.length; i++) {
  for (let j = i + 1; j < newTab.length; j++) {
    if (newTab[i][0] === newTab[j][0]) {
      newTab[i][1] = newTab[i][1] + newTab[j][1];
      newTab.splice(j, 1);
    } else {
      break;
    }
  }
}

const res = newTab.map((el) => el.join('')).join(' ');
console.log(res);
