const randomPos = require("./randomPos");

// const newArr = [];
// let maxPos = arr.length - 1;
// pop - мутирует исх (нужна копия!) и врзвращ удаленный ЭЛЕМЕНТ
// через объект, ключи по длине массива и рандомно вынимать и пушит

function shuffle(arr) {
  const newArr = [];
  const positionBaza = [];
  const repeated = [];

  for (let i = 0; i < arr.length; i += 1) {
    const position = randomPos(arr);

    if (positionBaza.includes(position)) {
      repeated.push(position);
      // eslint-disable-next-line no-plusplus
      i--;
    } else {
      positionBaza.push(position);

      const el = Number(arr.slice(position, position + 1).join(""));
      newArr.push(el);
    }
  }
  return newArr;
}

console.log(shuffle([1, 5, 3, 7, 9]));

/*   let el = Number(arr.slice(position, position + 1).join(''));
          console.log(el);
          newArr.push(el);
  
          console.log(newArr); */

// return newArr;
/*  for (let i = 0; i < arr.length; i += 1) {
         return newArr.push(el);
     } */

/* for (let i = 0; i < arr.length; i += 1) {
        //slice - исходный массив не изменится
        // возвращает часть массива
 
        //Math.random -для рандомной позиции
        //  условие, чтобы не было повторов
 
    } */

// return newArr;
