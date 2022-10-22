const Letrero=require('./Letrero');
test("Letrero apagado", ()=>{
    var letrero=new Letrero();
    expect(letrero.estado([0,1])).toBe("Apagado");
})