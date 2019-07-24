
let titulo = document.querySelector('.titulo')
let clienteId = document.querySelector('.clienteId')
let button = document.querySelector('#puxar')

button.onclick = function (){

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
//   .then(json => console.log(json))
//   .then(function (json){
//   console.log(json)  
//   })
  .then(function (json){
    console.log(json)
    titulo.textContent = json.title
    clienteId.textContent = json.userId
    })
    
}


  
  