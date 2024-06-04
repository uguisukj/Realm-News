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
    const adminPassword = "suaSenhaAdmin";

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.key === "k") {
            event.preventDefault();
            const senha = prompt("Digite a senha administrativa:");
            if (senha === adminPassword) {
                isAdmin = true;
                alert("Login realizado com sucesso!");
            } else {
                alert("Senha incorreta!");
            }
        }
    });

    // Sistema de Registro de Usuário
    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.key === "y") {
            const senha = prompt("Digite a senha:");
            if (senha === "batataassada") {
                const username = prompt("Digite o nome de usuário:");
                const password = prompt("Digite a senha:");

                if (username && password) {
                    // Aqui você pode implementar a lógica para registrar o usuário
                    alert(`Usuário "${username}" registrado com sucesso!`);
                } else {
                    alert("Nome de usuário e senha são obrigatórios.");
                }
            } else {
                alert("Senha incorreta!");
            }
        }
    });

    // Sistema de Publicação de Notícias
    const formNoticia = document.getElementById("form-noticia");
    formNoticia.addEventListener("submit", function(event) {
        event.preventDefault();
        if (isAdmin) {
            const titulo = document.getElementById("titulo").value.trim();
            const resumo = document.getElementById("resumo").value.trim();
            const conteudo = document.getElementById("conteudo").value.trim();
            const categoria = document.getElementById("categoria").value;

            if (titulo && resumo && conteudo) {
                const article = document.createElement("article");
                article.classList.add("noticia");
                article.innerHTML = `
                    <h3>${titulo}</h3>
                    <p>${resumo}</p>
                    <div class="interacoes">
                        <button class="like-btn"><i class="fas fa-thumbs-up"></i> <span class="like-count">0</span></button>
                    </div>
                    <div class="comentarios">
                        <h4>Comentários</h4>
                        <form class="comentario-form">
                            <textarea placeholder="Adicione um comentário"></textarea>
                            <button type="button" class="comentario-btn">Comentar</button>
                        </form>
                        <div class="comentario-lista"></div>
                    </div>
                    <p>${conteudo}</p>
                `;

                const section = document.getElementById(categoria);
                section.querySelector("p").style.display = "none"; // Remove a mensagem "Nenhuma notícia publicada"
                section.appendChild(article);

                // Adiciona funcionalidade aos novos botões de like e comentários
                const likeButton = article.querySelector(".like-btn");
                likeButton.addEventListener("click", function() {
                    const likeCount = this.querySelector(".like-count");
                    let count = parseInt(likeCount.textContent);
                    likeCount.textContent = count + 1;
                });

                const comentarioForm = article.querySelector(".comentario-form");
                const comentarioLista = comentarioForm.nextElementSibling;
                comentarioForm.querySelector(".comentario-btn").addEventListener("click", function() {
                    const textarea = comentarioForm.querySelector("textarea");
                    const comentarioTexto = textarea.value.trim();

                    if (comentarioTexto) {
                        const comentarioItem = document.createElement("div");
                        comentarioItem.classList.add("comentario-item");
                        comentarioItem.textContent = comentarioTexto;
                        comentarioLista.appendChild(comentarioItem);

                        textarea.value = ""; // Limpa o campo de texto
                    }
                });
            }
        } else {
            alert("Você precisa fazer login como administrador para publicar notícias.");
        }
    });
});
