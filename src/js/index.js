document.getElementById("btn-enviar").addEventListener('click', () => {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const mensagem = document.getElementById('mensagem');
    
    const obrigatorioNome = document.getElementById('nome-obrigatorio');
    const obrigatorioEmail = document.getElementById('email-obrigatorio');
    const obrigatorioTelefone = document.getElementById('telefone-obrigatorio');
    const obrigatorioMensagem = document.getElementById('mensagem-obrigatorio');

    function validarFormulario(campo, mensagemDeErro) {
        if (campo.value.trim() === '') {
            campo.classList.add('borda-vermelha');
            campo.classList.remove('borda-verde');
            mensagemDeErro.style.display = 'block';
        } else {
            campo.classList.remove('borda-vermelha');
            campo.classList.add('borda-verde');
            mensagemDeErro.style.display = 'none';
        }
    }
    
    validarFormulario(nome, obrigatorioNome);
    validarFormulario(email, obrigatorioEmail);
    validarFormulario(telefone, obrigatorioTelefone);
    validarFormulario(mensagem, obrigatorioMensagem);
});