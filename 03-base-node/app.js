const argv = require('./config/yargs');
require('colors');
const { demandOption, option, boolean } = require('yargs');
const { crearArchivo } = require('./helper/multiplicar');

//console.log(process.argv);
//Por posición
// const [ , ,arg3='base=3'] = process.argv;
// const [,base=5] = arg3.split('=');
// console.log(base);

//const base = 3;
// console.log(process.argv);
//console.log(argv);
//console.log(argv.b);


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creada'))
    .catch(err=> console.log(err));
