let p = [
    {
        provincia: "Buenos Aires",
        pais: "Argentina",
    },
    {
        provincia: "La Rochelle",
        pais: "Francia",
    },
    {
        provincia: "Montevideo",
        pais: "Uruguay",
    },
    {
        provincia: "Maldonado",
        pais: "Uruguay",
    },
    {
        provincia: "Bourdeaux",
        pais: "Francia",
    },
    {
        provincia: "Minas Gerais",
        pais: "Brasil",
    },
    {
        provincia: "Santa Catarina",
        pais: "Brasil",
    },
    {
        provincia: "Mato Grosso",
        pais: "Brasil",
    },
    {
        provincia: "Paris",
        pais: "Francia",
    },
    {
        provincia: "Canelones",
        pais: "Uruguay",
    },
    {
        provincia: "Tacuarembo",
        pais: "Uruguay",
    },
    {
        provincia: "Rouen",
        pais: "Francia",
    },
    {
        provincia: "Chaco",
        pais: "Argentina",
    },
    {
        provincia: "Chubut",
        pais: "Argentina",
    },
    {
        provincia: "Santa Cruz",
        pais: "Argentina",
    },
];
let aux = p.reduce((conjuntoDePaises,pais)=>{
    const obj = conjuntoDePaises.find(item=>item.pais===pais.pais)
    if (obj){
        obj.provincia.push(pais.provincia)
        obj.cantidad++
    }
    else{
        conjuntoDePaises.push({pais: pais.pais,provincia:[pais.provincia],cantidad: 1})
    }
    return conjuntoDePaises;
},[])
console.log(aux)