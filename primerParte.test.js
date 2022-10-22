const Letrero=require('./Letrero');
const Posicion=require('./Posicion');
test("Letrero apagado", ()=>{
    var letrero=new Letrero();
    var posicion=new Posicion()
    letrero.crearLetrero();
    expect(letrero.estado(posicion)).toBe("Apagado");
})