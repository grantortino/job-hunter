// AUFGABE #1 10.8.2021

// - arr[1, 2, 4, 5, 7, 8] creare un oggetto tramite reduce uguale a questo:

// const result = {
// odd: [1, 5, 7],
// even: [2, 4, 8]
// }

const arr = [1, 2, 4, 5, 7, 8];

const sortedArr = {
  odd: [],
  even: [],
};

const sorter = (arr) => {
  arr.map((num) =>
    num % 2 === 0 ? sortedArr.even.push(num) : sortedArr.odd.push(num)
  );
  return sortedArr;
};

// const sorter2 = (arr) => {
//   arr.reduce((check, num) => {
//     if (num % check !== 0) {
//       sortedArr["odd"].push(num);
//       return check;
//     }
//     sortedArr["even"].push(num);
//     return check;
//   }, 2);
//   return sortedArr;
// };

// acc viene sempre comparato con gli altri valori del array e deve essere sempre il valore di ritorno poiché è il risultato finale del metodo "reduce"

const reducedArray = arr.reduce(
  function (acc, curr) {
    if (curr % 2 === 0) {
      acc.even.push(curr);
      return acc;
    } else {
      acc.odd.push(curr);
      return acc;
    }
  },
  { odd: [], even: [] }
);

// console.log("reduced array", sorter(arr));
console.log("reduced array", reducedArray);

console.log(new Date().getMonth() + 1, new Date().getFullYear());
