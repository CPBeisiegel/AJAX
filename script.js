
let titulo = document.querySelector('.titulo')
let clienteId = document.querySelector('.clienteId')
let button = document.querySelector('#puxar')
let buttonImg = document.querySelector('#puxarImg')

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

buttonImg.onclick = function (){
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
//   .then(json => console.log(json))
  .then(function (json){
    //console.log(json)
    let div = document.querySelector('div')
   for(let i=0;i< 10; i++){
    // informações da api 
    let img = json[i]
      // uma tag recem criada 
     let criarImg = document.createElement('img');
     criarImg.setAttribute('src', img.url)
    // para cada img que eu receber, vou pegar ela e colocar dentro da div.
     div.appendChild(criarImg)
   }
    })
}


  
  