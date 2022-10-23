const Posicion=require('./Posicion');
test("Letrero apagado", ()=>{
    var posicion=new Posicion()

    expect(posicion.estadoActual()).toBe("Apagado");
})