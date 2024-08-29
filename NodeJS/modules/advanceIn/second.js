const greet = (name) => {
    return `Hello ${name}. Good Morning!`;
}
const add = (a, b) => {
    return a + b;
}

const less = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}


// module.exports.greet = greet;

// module.exports.add = add;

// this method's not working 




// best way to do if more than 1 export functions

module.exports = { greet, add, less, mul, div }
