const Posicion=require('./Posicion');
test("Letrero apagado", ()=>{
    var posicion=new Posicion(10,10);
    expect(posicion.estadoActual()).toBe("Apagado");
})