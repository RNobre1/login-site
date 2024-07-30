let usuarioCorreto = [];
usuarioCorreto[0] = 'admin';

let senhaCorreta = [];
senhaCorreta[0] = 'admin';

function efetuarLogin() {
    const usuarioDigitado = document.getElementById('usuario').value;
    const senhaDigitada = document.getElementById('senha').value;
    let acess = false;

    try {
        usuarioCorreto.forEach(function(user) {
            senhaCorreta.forEach(function(password) {
                if (usuarioDigitado === user && senhaDigitada === password) {
                    acess = true;
                }
            });
        });

        if (acess == false) {
            throw new Error("Usuário ou senha incorretos. Tente novamente.");
        }
        else {
            alert('Logando');
            window.location.href = './public/logged.html';
        }
    } catch (erro) {
        alert(erro.message);
        window.location.href = './public/cadastrar.html';
    }
}
//cadastro não guarda os novos usuários
//for the future - linkar com banco de dados
function efetuarCadastro() {
    const usuarioDigitado = document.getElementById('usuario').value;
    const senhaDigitada = document.getElementById('senha').value;
    const primeiroNome = document.getElementById('primeiroNome').value;
    const sobrenome = document.getElementById('sobrenome').value;

    if (senhaDigitada.length < 8) {
        alert('A senha deve ter no minímo 8 caracteres');
    } 
    else if (usuarioDigitado.length == 0 || primeiroNome.length == 0 || sobrenome.length == 0){
        alert('Preencha todos os campos para prosseguir');
    } else {
        alert('Cadastro efetuado com sucesso, agora faça login');
        usuarioCorreto.push(usuarioDigitado);
        senhaCorreta.push(senhaDigitada);
        window.location.href = '../index.html';
    }
}