function salvar(){

    var usuario = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var nascimento = document.getElementById("nascimento").value;
    var senha = document.getElementById("senha").value;
    var csenha = document.getElementById("confirmasenha").value;

    
    
    if(usuario.trim().length == 0 || email.trim().length == 0 || nascimento.trim().length == 0 || senha.trim().length == 0 || csenha.trim().length == 0 ){
    alert("preencher todos os campos!");
    }
    else{
    if(senha != csenha){
     alert("Senhas diferentes");    
        }
        else{
            if(senha.trim().length <= 7){
                alert("Senhas devem ter no mínimo 8 digitos")
            }
            else{
                //alert('oi');
                window.location.replace("pinicio.html");
                //redirecionamento para página inicial e futuramente salvamento do cadastro
            }
        }
    }
    }









