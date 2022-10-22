const Letrero=require('./Letrero');
test("Letrero apagado", ()=>{
    var letrero=new Letrero();
    expect(letrero.estado(posicion)).toBe("Apagado");
})