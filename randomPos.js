function randomPos(arr) {
  const maxPos = arr.length;
  const pos = Math.floor(Math.random() * maxPos);
  return pos;
}

// console.log(randomPos([2, 3, 4, 5]));

module.exports = randomPos;
