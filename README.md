# Prime Number Multiplication Table cli

# Objective
Write a program that prints out a multiplication table of the first 10 prime numbers.
* The program must run from the command line and print one table to STDOUT.
* The first row and column of the table should have the 10 primes, with each cell containing the product of the primes from the corresponding row and column.

## Requirements
* [node.js 8.x][node-js]
* [npm][npm]

## Dependencies
* cli-table2
* minimist
* jest

## Installation
```shell
$ git clone git@github.com:warnerp18/primeNum-multiplication-table.git
$ cd primeNum-multiplication-table
$ npm i
$ npm link
```
## How to use
After install, run command `prime` to print table
To specify the amount of Prime numbers wanted in table pass a number after `prime` command
ex: `prime 5` will print a multiplication table of the first 5 prime numbers

If no number is passed to `prime` command the program will default to 10 prime numbers

For help pass the `--help` or `-h` flag to `prime` command

For version pass `--version` or `-v` flag to `prime` command

## Tests
To run tests `npm run test`


