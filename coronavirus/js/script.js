
$(document).ready(function () {
    $("#divAlert").hide();
    $('#verificar-email').click(function () {
        //desabilitando o submit do form
        $("form").submit(function () { return false; });
        //atribuindo o valor do campo
        var sEmail = $("#email").val();
        // filtros
        var emailFilter = /^.+@.+\..{2,}$/;
        var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/
        // condição
        if (!(emailFilter.test(sEmail)) || sEmail.match(illegalChars)) { //verificam o se o email é INVALIDO!
            $("#divAlert").show().removeClass("alert alert-success").addClass("alert alert-danger")
            document.getElementById("divAlert").innerHTML = "<strong>Erro!</strong> Por favor, informe um e-mail válido.";
        } else {
            $("#divAlert").show().removeClass("alert alert-danger").addClass("alert alert-success")
            document.getElementById("divAlert").innerHTML = "<strong>Successo!</strong> Email informado está correto!";
        }
    });
    $('#email').focus(function () {
        $("#divAlert.erro").hide();
    });
    /*A validação ocorre quando pressionar o botão verificar-email.

    sEmail: recebe o valor digitado no campo
    !(emailFilter.test(sEmail)): o método test() é utilizado para localizar um valor igual na string (sEmail). Se encontrar 
    retorna true. Vale lembrar que estamos utilizando o sinal de exclamação (!) antes, querendo dizer, se for diferente de 
    true, exibe a mensagem.
    sEmail.match(illegalChars): verifica se o valor digitado contém alguns dos valores definido na variável illegalChars. 
    O método match() utiliza expressões regulares na busca. */



    $('#verifica-form').click(function () {
        $("#divAlert").hide();
        //desabilitando o submit do form
        $("form").submit(function () { return false; });
        //atribuindo o valor do campo
        var sNome = $("#nome").val();
        var sTelefone = $("#telefone").val();
        var sEmail = $("#email").val();
        var sMsg = $("#msg").val();
        // filtros
        var emailFilter = /^.+@.+\..{2,}$/;
        var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/
        // condição

        //Verificando se os campos foram preenchidos
        if((sNome === "") || (sTelefone === "") || (sEmail === " ") || (sMsg === "")){
            $("#divAlert").show().removeClass("alert alert-success").addClass("alert alert-danger")
                document.getElementById("divAlert").innerHTML = "<strong>Erro!</strong> Por favor, preencha todos os campos.";

        }else{
            //se os campos foram preenchidos, verificam o se o email é INVALIDO!
            if (!(emailFilter.test(sEmail)) || sEmail.match(illegalChars)){
                $("#divAlert").show().removeClass("alert alert-success").addClass("alert alert-danger")
                document.getElementById("divAlert").innerHTML = "<strong>Erro!</strong> Por favor, informe um e-mail válido.";

            } else {
                //Se o e-mail for valido, todos os dados sa~po verificados
                $("#divAlert").show().removeClass("alert alert-danger").addClass("alert alert-success")
                document.getElementById("divAlert").innerHTML = "<strong>Successo!</strong> Todos os campos foram preenchidos e o e-mail informado está correto!";
            }
        }
        
    });
    $('#email').focus(function () {
        $("#divAlert.erro").hide();
    });

});
