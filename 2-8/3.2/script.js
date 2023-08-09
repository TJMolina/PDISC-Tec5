const alun = [
{nombre : "alan", edad :17},
{nombre : "fabricio", edad :40},
{nombre : "tobi", edad :16},
{nombre : "abigail", edad :18},
{nombre : "melina", edad:32},
];

const cont = alun.filter(item =>item.nombre.length>=5 && (2024 -item.edad)<=2000);
console.log(cont);