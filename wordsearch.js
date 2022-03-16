const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let arr = [];
  let length = letters[0].length;
  for (let i = 0; i <= length - 1; i++) {
    letters.map(ls => arr.push(ls.shift()));
    if (arr.join('').includes(word)) return true;
    arr = [];
  }
    
  return false;
};

module.exports = wordSearch;
