const { resolve } = require('path');

require('colors');


const mostrarMenu = () => {

    return new Promise(resolve =>{
        console.clear();
        console.log('\n=========================='.green);
        console.log('==seleccione una opción===');
        console.log('==========================\n'.green);

        console.log(`${'1.'.green} Crear tareas`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas comletadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas`);
        console.log(`${'6.'.green} Borrar una tarea`);
        console.log(`${'0.'.green} Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (opt) =>{
            readline.close();
            resolve(opt);
        })
    });

    
}

const pausa = () =>{

    return new Promise(resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Presione ${'Enter'.green} para continuar`, (opt) =>{
            readline.close();
            resolve();
        })
    });

    

}

module.exports = {
    mostrarMenu, 
    pausa
}
