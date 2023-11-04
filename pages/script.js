document.addEventListener('DOMContentLoaded', function () {
    const openLoginModalButton = document.getElementById('openLoginModalButton');
    const openCadastroModalButton = document.getElementById('openCadastroModalButton');
    const loginModal = document.getElementById('loginModal');
    const cadastroModal = document.getElementById('cadastroModal');
    const closeButtons = document.querySelectorAll('.close');

    openLoginModalButton.addEventListener('click', function (event) {
        event.preventDefault();
        loginModal.style.display = 'block';
        cadastroModal.style.display = 'none';
    });

    openCadastroModalButton.addEventListener('click', function (event) {
        event.preventDefault();
        cadastroModal.style.display = 'block';
        loginModal.style.display = 'none';
    });

    // Adiciona funcionalidade de fechar para todos os botões de fechar
    closeButtons.forEach(function(closeButton) {
        closeButton.addEventListener('click', function () {
            loginModal.style.display = 'none';
            cadastroModal.style.display = 'none';
        });
    });

    // Impede o fechamento da modal ao clicar dentro dela
    cadastroModal.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    window.addEventListener('click', function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === cadastroModal) {
            cadastroModal.style.display = 'none';
        }
    });
});