const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{
    //return 'hola mundo';
    try{
        let salida, consola ='';
        for (let i = 1; i <= hasta; i++) {
            multi = base * i;
            salida += `${base} x ${i} = ${multi}\n`;
            consola += `${base} ${'x'.bgBlue} ${i} ${'='.bgBlue} ${multi}\n`;
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if(listar){
            console.log(`==========================`.blue)
            console.log('TABLA DEL'.white,colors.green( base ));
            console.log(`==========================`.blue)
            console.log(salida);
        }
        //para reconstruir los modulos de node o los paquetes se debe ejecutar npm install
        return `tabla-${base}.txt`;
    }catch (error){
        
        throw error;
    }
}

module.exports = {
    crearArchivo
}