// trouver la longeur de la plus longue série de parenthèses

const data = ')((())))(()())';

const tab = data.split('');

console.log(tab);
let max = 0;
let openedBracket = 0;
let closedBracket = 0;

for (let i = 0; i < tab.length; i++) {
  if (tab[i] === '(') {
    openedBracket++;
  } else if (tab[i] === ')') {
    closedBracket++;
  }
}

console.log(openedBracket);
console.log(closedBracket);
