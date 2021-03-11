const fs = require('fs');

const crearArchivo = async(base = 5, listar = false) =>{
    //return 'hola mundo';
    try{
        let salida ='';
        for (let i = 1; i <= 10; i++) {
            multi = base * i;
            salida += `${base} x ${i} = ${multi}\n`;
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        if(listar){
            console.log(`==========================`)
            console.log(`=======TABLA DEL ${base}========`)
            console.log(`==========================`)
            console.log(salida);
        }
        return `tabla-${base}.txt`;
    }catch (error){
        
        throw error;
    }
}

module.exports = {
    crearArchivo
}