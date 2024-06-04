document.addEventListener("DOMContentLoaded", function() {
    const categorias = ["destaques", "politica", "economia", "esportes", "entretenimento", "tecnologia"];

    // Sistema de Like
    const likeButtons = document.querySelectorAll(".like-btn");
    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const likeCount = this.querySelector(".like-count");
            let count = parseInt(likeCount.textContent);
            likeCount.textContent = count + 1;
        });
    });

    // Sistema de Comentários
    const comentarioForms = document.querySelectorAll(".comentario-form");
    comentarioForms.forEach(form => {
        const comentarioLista = form.nextElementSibling;
        form.querySelector(".comentario-btn").addEventListener("click", function() {
            const textarea = form.querySelector("textarea");
            const comentarioTexto = textarea.value.trim();

            if (comentarioTexto) {
                const comentarioItem = document.createElement("div");
                comentarioItem.classList.add("comentario-item");
                comentarioItem.textContent = comentarioTexto;
                comentarioLista.appendChild(comentarioItem);

                textarea.value = ""; // Limpa o campo de texto
            }
        });
    });

    // Sistema de Login para Área Administrativa
    let isAdmin = false;
    const adminPassword = "batataassada"; // Senha para acesso à área administrativa

    // Intercepta o evento de teclado para verificar se "Alt + Y" foi pressionado
    document.addEventListener("keydown", function(event) {
        if (event.altKey && event.key === "Y") {
            const senha = prompt("Digite a senha administrativa:");
            if (senha === adminPassword) {
                isAdmin = true;
                alert("Login realizado com sucesso!");
            } else {
                alert("Senha incorreta!");
            }
        }
    });

    // Intercepta o envio do formulário de registro para impedir a ação padrão
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    // Função para exibir o painel de registro
    function showRegistrationPanel() {
        const password = prompt("Digite a senha:");

        if (password === adminPassword) {
            isAdmin = true;
            alert("Login realizado com sucesso!");
        } else {
            alert("Senha incorreta!");
        }
    }

    // Verifica se a sequência de teclas "Alt + Y" foi pressionada
    document.addEventListener("keydown", function(event) {
        if (event.altKey && event.key === "Y") {
            showRegistrationPanel(); // Função para exibir o painel de registro
        }
    });
});
