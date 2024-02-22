<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>
        <title>Validação com JavaScript</title>
        <script>
            // Função para validar o campo 'nome' do formulário
            function valida(f) {
                // Verifica se o campo 'nome' está vazio
                if (f.nome.value == "") {
                    alert("O campo nome não pode ficar vazio!"); // Exibe um alerta se o campo estiver vazio
                    return false; // Impede o envio do formulário
                }
            }
        </script>
    </head>
    
    <body>
        <!-- A mensagem abaixo será sempre exibida ao abrir a página, o que pode não ser o desejado -->
        <h1>Formulário enviado com sucesso!!!</h1>
        <p>
            <h3>Parabéns! Você acabou de criar uma página!!!</h3>
        </p> <!-- Fechamento da tag <p> corrigido -->
        <a href="Criandopaginahtml4.html">Clique aqui para voltar ao Formulário</a>

        <!-- Exemplo de formulário para utilizar a função 'valida' -->
        <form onsubmit="return valida(this);">
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome" />
            <input type="submit" value="Enviar" />
        </form>
    </body>
</html>
