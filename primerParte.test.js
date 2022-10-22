test("Letrero apagado", ()=>{
    const letrero=new Letrero();
    expect(letrero.estado(posicion)).toBe("Apagado";)
})