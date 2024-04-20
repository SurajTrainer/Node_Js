
// here discussed how we use npm in node js

// about npm 

//npm global - command , comes with node
//npm version

// local depedency - use it only particular project
// npm i <package name>

// global dependecy - use it in any project
// npm i -g <packageName> 
//sudo npm i -g <packageName> (mac)

// package.json - manifest file
// manual approach 
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// example with lodash
// npm i lodash

const _ = require('lodash');

const item = [1,[2,[3,[4,[9]]]]] ;

const newItem = _.flattenDeep(item)
console.log(newItem);
