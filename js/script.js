localStorage.setItem('resultado', '')

function adicionar(val){
  let numero = document.getElementById('resultado').innerHTML;
  let result = document.getElementById('resultado').innerHTML = numero + val;
  localStorage.setItem('resultado', result)
  return result;
}

function limpar(){
  let result = document.getElementById('resultado').innerHTML = ''
  localStorage.setItem('resultado', result)
  return result;
}

function pegarValorDoStorage(){
  let storage = localStorage.getItem('resultado')
  let storageScreen = document.getElementById('storage')
  storageScreen.innerHTML = storage
}

setInterval( () => {
  let storage = localStorage.getItem('resultado')
  let storageScreen = document.getElementById('storage')
  storageScreen.innerHTML = storage
}, 200)