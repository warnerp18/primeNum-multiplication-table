const menus = {
  main: `
    prime [command] <options>

    n .............. where n is a the number of elements in the multiplication table you want to show
    version ............ show package version
    help ............... show help menu for a command`

}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus.main)
}
