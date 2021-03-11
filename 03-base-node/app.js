const yargs = require('yargs');
const { demandOption, option, boolean } = require('yargs');
const { crearArchivo } = require('./helper/multiplicar');
const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true
        })
        .option('l', {
            alias: 'listar', 
            type: 'boolean',
            demandOption: true,
            default: false
        })
        .check((argv,option) => {
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un numero'
            }
            return true;
        })
        .argv;

//console.log(process.argv);
//Por posición
// const [ , ,arg3='base=3'] = process.argv;
// const [,base=5] = arg3.split('=');
// console.log(base);

//const base = 3;
// console.log(process.argv);
console.log(argv);
//console.log(argv.b);


crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
    .catch(err=> console.log(err));
