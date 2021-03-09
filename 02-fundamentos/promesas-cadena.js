const empleados = [
    {
        id: 1,
        nombre: 'Felipe'
    },
    {
        id: 2,
        nombre: 'Leidy'
    },
    {
        id: 3,
        nombre: 'Gratta'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = (id) => {
    
    return new Promise( (resolve, reject) => {

        const empleado = empleados.find((e) => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`El emepleado con id: ${id} no existe`)
    });
   
}

const getSalario = (id) => {
    
    return new Promise( (resolve, reject) =>{

        const salario = salarios.find((s) => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`El salario con id: ${id} no existe`)
    }); 
}



const id = 3;
let nombre;
getEmpleado(id)
    .then(empleado =>{  //.then(empleado => getSalario(id))
        //console.log(empleado);
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log(`El emepleado:`, nombre, `tiene un salario de:`, salario))
    .catch(err => console.log(err));