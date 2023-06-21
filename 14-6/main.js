let form = document.createElement("form")
let select = document.createElement("select")
let BMW = document.createElement("option")
let messerati = document.createElement("option")
let input = document.createElement("input")
let input = document.createElement("label")

form.name ="usuario"
input.name ="input"
select.name ="select"

messerati.innerHTML ="messerati"
BMW.innerHTML = "BMW"
select.appendChild(BMW)
select.appendChild(messerati)
select.appendChild(messerati)
form.appendChild(select)


document.body.appendChild(form)
