function Posicion(posicionx,posiciony){
    if(posicionx>99){
        throw Error("La matriz tiene como eje x maximo 99");
    }
    else if(posiciony>99){
        throw Error("La matriz tiene como eje y maximo 99");
    }
    this.posicionx=posicionx;
    this.posiciony=posiciony;
    this.estado="Apagado";
    this.estadoActual=function(){
        return this.estado;
    }
}
module.exports=Posicion