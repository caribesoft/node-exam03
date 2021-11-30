
const fs = require('fs');
const { argv } = require('process');
const crearArchivo = async ( base = 5, listar = false, renglones = 10 ) => {
  try {
            let salida = '';
        
            for(let i=1;i<=renglones;i++){
                salida += (`${ base } x ${ i }  =  ${ base * i}\n`)
            }

            fs.writeFileSync( `archivos/tabla-${ base }.txt`, salida);  
           
            if(listar){   
                //console.log(`tabla del ${ base } creada exitosamente...`);
                console.log('=======================');
                console.log('   Tabla del ',  base );
                console.log('=======================');
                console.log(salida);
            
            }   
        } catch (err) {
            throw err;
        } 
}

module.exports = {
    crearArchivo: crearArchivo 
}