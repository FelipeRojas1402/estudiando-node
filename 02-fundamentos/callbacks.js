

/*setTimeout( function() {
    console.log('Hola Mundo');
}, 3000);*/


const getUsuarioByID = (id, callback) =>{
    const usuario ={
        id,
        nombre: 'Felipe'
    }
    setTimeout(()=>{
        callback(usuario);
    }, 1500)
}

getUsuarioByID(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});



