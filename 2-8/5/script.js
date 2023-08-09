const alumno =[
    {nommbre: "federico" , nota:[7,8,4] },
    {nommbre: "tiara" , nota:[7,8,4] },
    {nommbre: "gonza" , nota:[7,8,4] }
];
const pro = alumno.map(item => ({nommbre: item.nommbre, promedio: item.nota.reduce((acu,item) => acu+item ,0)/3}))
console.log(pro)