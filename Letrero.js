const Posicion = require("./Posicion");

function Letrero(){

    this.estado=function(posicion){
        return posicion.estadoActual;
    }
    
}
module.exports=Letrero;