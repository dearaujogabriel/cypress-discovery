var avengers = ['Tony Stark', 'Clint Barton', 'Nartasha Romanoff', 'Steve Rogers', 'Bruce Banner']
var novoVingador = document.querySelector('input[name=newAvenger')
console.log(novoVingador)

function addVingador() {
  if (novoVingador.value.length == 0) {
    alert('Nome do novo vingador e obrigatorio')
    return
  } else {
    alert('Novo Vingador adicionado!')
  }
  avengers.push(novoVingador.value)
  novoVingador.value = ''
}

function listarVingadores() {
  var ul = document.getElementById('avengers')
  ul.innerHTML = ''
  avengers.forEach(function (a) {
    var li = document.createElement('li')
    var texto = document.createTextNode(a)
    li.appendChild(texto)
    ul.appendChild(li)
  })
}
