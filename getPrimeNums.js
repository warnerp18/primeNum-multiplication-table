module.exports = (numOfPrimeNumnbers=10) => {
  let primeNums = [];

  function getPrime(num) {
    if (num === 1) {
      return;
    }

    if(num === 2) {
      primeNums = [...primeNums, num];
    } else if ( num % 2 ) {

      let upperLimit = Math.floor(num/2);

      for(var i = 3; i < upperLimit; i++) {
        if(num % i){    
          continue;
        } else {
          return; 
        }
      } // END FOR LOOP

      primeNums = [...primeNums, num];
      return;
    } // END IF
  } // END getPrime FUNCTION

  let i = 0;
  while(primeNums.length < numOfPrimeNumnbers) {
    getPrime(i)
    i++;
  }
  return primeNums;
}
