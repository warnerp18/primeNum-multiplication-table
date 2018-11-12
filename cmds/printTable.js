const Table = require('cli-table2');

module.exports = (args = 10, primeNums) => {
  // array of all numbers need to calculate based on user input
  const arrayOfNumsToCalculate = primeNums.slice(0, args); 

  // clone array. needed for cli-table2 to create the table th
  const tableHeader = arrayOfNumsToCalculate.slice(0);
  let currentIndex = 0;

  // add empty space for first cell in table header
  tableHeader.unshift(' ');

  let table = new Table({
    head: tableHeader,
  })

  while (currentIndex < arrayOfNumsToCalculate.length) {

    let arrayOfCalculatedNums = arrayOfNumsToCalculate.map( num => {
      return num * arrayOfNumsToCalculate[currentIndex];
    });

    let tableRow = {};
    tableRow[arrayOfNumsToCalculate[currentIndex]] = arrayOfCalculatedNums; 
    table.push(tableRow)
    currentIndex++;
  }

  console.log(table.toString());
}
