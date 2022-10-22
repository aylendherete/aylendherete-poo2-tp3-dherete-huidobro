const Letrero=require('./Letrero');
test("Letrero apagado", ()=>{
    var letrero=new Letrero();
    var posicion=new Posicion()
    expect(letrero.estado(posicion)).toBe("Apagado");
})