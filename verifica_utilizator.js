fetch('check_user_role.php')
        .then(response => response.json())
        .then(data => {
            if (data.role !== 'admin') {
                // Redirecționați utilizatorul către index.html
                window.location.href = 'index.html';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });