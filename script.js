document.addEventListener("DOMContentLoaded", function() {
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
});
