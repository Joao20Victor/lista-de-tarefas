const tarefas = []
const input = document.querySelector("input")     

function add(){ 
  if(input.value==""){
    alert("Escreva uma tarefa")
  }
  else {   
 const tarefa = input.value
 tarefas.push(tarefa)
 console.log(tarefa)

 input.value = ""
 render()
}}

function render(){
  const ul = document.querySelector("ul")
  ul.innerHTML = null
  tarefas.forEach(function (tarefa) {
    const li = document.createElement("li")
   li.innerText = tarefa   
    ul.appendChild(li)
   
     const apagar = document.createElement("button")
     apagar.innerText = "x"
     li.appendChild(apagar)
     apagar.addEventListener("click", function(){
     const index = tarefas.indexOf(tarefa)
     tarefas.splice(index,1)
     render()
    })
   
  })
  }


render() 
 