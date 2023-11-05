const data = ')((())))(()())';
// const data = ')()(()))';

/**
 *  Affiche la longeur (integer) de la plus longue série "normale" de parenthèses
 * @param {Array} data
 */
const maxBracketLength = (data) => {
  const tab = data.split('');
  let max = 0;
  for (let i = 0; i < tab.length; i++) {
    let unclosedBracket = 0;
    let sequenceBracket = 0;
    for (let j = i; j < tab.length; j++) {
      if (tab[j] === '(') {
        unclosedBracket++;
      }
      if (tab[j] === ')') {
        unclosedBracket--;
      }
      if (unclosedBracket < 0) {
        break;
      }
      if (unclosedBracket === 0) {
        sequenceBracket = j - i + 1;
      }
    }
    if (sequenceBracket > max) max = sequenceBracket;
  }
  console.log(`la longueur max de parenthèses est: ${max}`);
};

maxBracketLength(data);
