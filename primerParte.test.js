const Posicion=require('./Posicion');
test("Letrero apagado", ()=>{
    var posicion=new Posicion(10,10);
    expect(posicion.estadoActual()).toBe("Apagado");
})

test("Letrero mas grande  que la matriz en eje x", ()=>{
    expect(()=>{var posicion=new Posicion(100,10);}).toThrow(new Error("La matriz tiene como eje x maximo 99"));
})