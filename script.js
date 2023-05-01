user = document.getElementById("user")
senha = document.getElementById("senha")
btn=document.getElementById("btn")
mensagem = document.getElementById("mensagem")

btn.addEventListener("click", function(evento){
    evento.preventDefault()
    if(user.value === "Admin" && senha.value === "Admin"){
        user.classList.add("mensagem-sucesso")
        senha.classList.add("mensagem-sucesso")
        mensagem.innerHTML = "Seu Login está Correto!"
        mensagem.classList.add('mensagem-sucesso')
        mensagem.classList.remove("invalida")
    }

    else {
      mensagem.classList.remove('mensagem-sucesso')
      user.classList.remove("mensagem-sucesso")
      senha.classList.remove("mensagem-sucesso")
      mensagem.innerHTML = "Seu Login está Errado!"
      user.classList.add("invalida")
      senha.classList.add("invalida")
      mensagem.classList.add('invalida')
     
    }
  
})
