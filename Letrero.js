const Posicion = require("./Posicion");
function Letrero(){

    this.estado=function(posicion){
        return posicion.estadoActual;
    }
    this.crearLetrero=function (){
        this.tablero=[];
        for(i=0;i<99;i++){
            for(j=0;j<99;j++){
                (this.tablero)[i][j]=new Posicion([i][j]);
            }
        }
    }
}
module.exports=Letrero;