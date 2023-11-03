// trouver la longeur (integer) de la plus longue série "normale" de parenthèses

const data = ')((())))(()())';

const tab = data.split('');

let max = 0;

/**
 * valide que le symbole est bien symétrique selon l'axe de symétrie qui correspond à l'index
 * @param {integer} ind1
 * @param {integer} ind2
 * @returns
 */

const validation = (ind1, ind2) => {
  if (
    (tab[ind1] === '(' && tab[ind2] === ')') ||
    (tab[ind1] === ')' && tab[ind2] === '(')
  ) {
    return true;
  } else {
    return false;
  }
};

for (let i = 0; i < tab.length - 1; i++) {
  let j = 0;
  let openedBracket = 0;
  let closedBracket = 0;
  while (j <= i && validation(i - j, i + 1 + j)) {
    if (tab[i - j] === '(') {
      openedBracket++;
    } else if (tab[i - j] === ')') {
      closedBracket++;
    }
    //if (openedBracket === 1 && max === 0) max = 2;
    if (tab[i - j] === '(' && openedBracket >= closedBracket) {
      if (max < 2 * (j + 1)) max = 2 * (j + 1);
    }
    j++;
  }
}

console.log(`la longueur max est de ${max}`);
