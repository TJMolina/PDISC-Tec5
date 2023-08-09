const alun = [
{nombre : "alan", edad :17},
{nombre : "melina", edad :40},
{nombre : "tobi", edad :16},
{nombre : "abigail", edad :18},
{nombre : "franco", edad :32},
];

const cont = alun.filter(item =>item.edad>21);
console.log(cont);