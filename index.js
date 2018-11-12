const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] ;

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }


  if ( typeof cmd === "number" || cmd === undefined) {
    // don't load unnecessary files.
    // check command and only load need files
    if (cmd === undefined) {
      console.log('negative value or no value provided to command. Defaulted to multiplication of 10 prime nums');
    }

    const primeNums = require('./getPrimeNums')(cmd);
    require('./cmds/printTable')(cmd, primeNums);
    return;
  } else if (cmd === 'version'){
    require('./cmds/version')(args)
    return;
  } else if (cmd === 'help'){
    require('./cmds/help')(args)
    return;
  } 
  console.error(`"${cmd}" is not a valid command. For a full list of 10 prime number multiplication table do not pass any arguements. If you want a certain amount of prime numbers then pass 1-10`);
  return;
}
