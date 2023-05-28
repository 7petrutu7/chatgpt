document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("user_name")) {
        document.getElementById("user-name").innerText = localStorage.getItem("user_name");
    } else {
        window.location.href = "login.html";
    }

    document.getElementById("logout-btn").addEventListener("click", function () {
        localStorage.removeItem("user_name");
        window.location.href = "login.html";
    });

    fetch('check_user_role.php')
        .then(response => response.json())
        .then(data => {

            if (data.role === 'admin') {
                // Ascunde butoanele anunturileMeleBtn, favoriteBtn, mesajeBtn și setariBtn
                document.getElementById('anunturileMeleBtn').style.display = 'none';
                document.getElementById('favoriteBtn').style.display = 'none';
                document.getElementById('mesajeBtn').style.display = 'none';
                document.getElementById('setariBtn').style.display = 'none';
                document.getElementById('verificaAnunturileBtn').style.display = 'block'; // Afișează butonul verificaAnunturileBtn
            } 
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
