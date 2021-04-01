const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        //choices: ['opt1', 'opt2', 'opt3']
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea'
            },
            {
                value: '6',
                name: '6. Borrar tareas'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
];



const inquirerMenu = async() =>{

    console.clear();
    console.log('\n=========================='.green);
    console.log('==seleccione una opción===');
    console.log('==========================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() =>{

    const question =[
        {
            type: 'input',
            name: 'enter',
            message: `Preione ${'enter'.green} para continuar`
        },
    ];
    
    return await inquirer.prompt(question);

}

module.exports = {
    inquirerMenu,
    pausa
}