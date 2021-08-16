// AUFGABE #1 10.8.2021

// - arr[1, 2, 4, 5, 7, 8] creare un oggetto tramite reduce uguale a questo:

// const result = {
// odd: [1, 5, 7],
// even: [2, 4, 8]
// }

const arr = [1, 2, 4, 5, 7, 8];

// console.log(arr.filter((num) => num % 2)).reduce((mod, num) => {

// })

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

console.log(sorter(arr));

const result = arr.reduce((acc, curr) =>
  curr % acc === 0 ? sortedArr.even.push(curr) : sortedArr.odd.push(curr)
  
);
