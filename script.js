document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.like').forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = 'Curtido';
        });
    });

    document.querySelectorAll('.comment').forEach(button => {
        button.addEventListener('click', () => {
            const comments = button.parentElement.nextElementSibling;
            comments.style.display = comments.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.querySelectorAll('.comments button').forEach(button => {
        button.addEventListener('click', () => {
            const commentText = button.previousElementSibling.value;
            if (commentText) {
                const commentList = button.nextElementSibling;
                const commentElement = document.createElement('p');
                commentElement.innerHTML = `<strong>Você:</strong> ${commentText}`;
                commentList.appendChild(commentElement);
                button.previousElementSibling.value = '';
            }
        });
    });

    document.getElementById('admin-login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'admin.html';
    });

    document.getElementById('journalist-login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'journalist.html';
    });

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Formulário enviado!');
        });
    });
});
