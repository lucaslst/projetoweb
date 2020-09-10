function logar(){

    var usuario = document.getElementById("elogin").value;
    var senha = document.getElementById("slogin").value;

    if(usuario.trim().length == 0 || senha.trim().length == 0){
        alert("preencher todos os campos!");
    }
    else if(usuario.trim().length <= 5 ){
            alert("Email inválido!");
    }
    else if(senha.trim().length <= 7){
        alert("Senha muito inválida!");
    }
    else{
        
    }

}