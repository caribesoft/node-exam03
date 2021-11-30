
const { number, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const  argv   = require('./config/yargs');
const colors = require('colors');

console.clear();
  
//console.log( process.argv );
//  console.log( argv );
console.log( 'base: yargs', argv.base);

crearArchivo( argv.base, argv.listar, argv.renglones );
    
