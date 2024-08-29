import chalk from 'chalk';
import validator from 'validator';



let str = 'This is a String'
console.log(chalk.blue(str));

let valid = validator.isEmail('test@test.com')
let valid1 = validator.isEmail('test@test')
// console.log(valid);

if (valid === true && valid1 === false) {
    console.log(chalk.green(valid))
    console.log(chalk.red(valid1))
}
else {
    console.log(chalk.red(valid))
    console.log(chalk.green(valid1))
}

