const Table = require('cli-table2');

let obj = {};

module.exports = (args = 10, primeNums) => {
  primeNums.forEach( number => {
    obj[number] = function(param) {
      return number * param;
    };
  })

  // array of all numbers need to calculate based on user input
  const arrayOfNumsToCalculate = primeNums.slice(0, args);

  // clone array. needed for cli-table2 to create the table th
  const tableHeader = arrayOfNumsToCalculate.slice(0);
  // add empty space for first cell in table header
  tableHeader.unshift(' ');

  // create table
  let table = new Table({
    head: tableHeader,
  })

  var currentIteration = 1;

  function multiplyPrimeNums(totalIterations) {
    let arrayOfCalculatedNums = [];

    for(var prop in obj) {
      if(prop > arrayOfNumsToCalculate[totalIterations-1]) break;

      let currentPrimeNum = arrayOfNumsToCalculate[currentIteration-1];
      arrayOfCalculatedNums.push(obj[prop](currentPrimeNum));
    }


    let tableRow = {};
    tableRow[arrayOfNumsToCalculate[currentIteration-1]] = arrayOfCalculatedNums; 
    table.push(tableRow)


    while(currentIteration < totalIterations) {
      currentIteration++;
      multiplyPrimeNums(args, currentIteration);
    }
    return;
  }

  multiplyPrimeNums(args);

  console.log(table.toString());
}
