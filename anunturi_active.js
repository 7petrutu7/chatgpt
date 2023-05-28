window.onload = function() {
    fetch('get_announcements_active.php')
    .then(response => response.json())
    .then(data => {
        document.getElementById('nrAnunturi').textContent = data.length;

        if (data.length === 0) {
        document.getElementById('noAnunturi').style.display = 'flex';
    }

        data.forEach(anunt => {
            const anuntDiv = document.createElement('div');
            anuntDiv.classList.add('anunt');
            anuntDiv.classList.add('anunt_' + anunt.id_anunt);

            const imgDiv = document.createElement('div');
            imgDiv.classList.add('imgContainer');
            const img = document.createElement('img');
            img.src = "assets/imagini_anunturi/" + anunt.img1; 
            imgDiv.appendChild(img);

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('details');

            let postedDate = new Date(anunt.data_adaugarii.replace(" ", "T"));
            let now = new Date();

            let postedTimeString = ("0" + postedDate.getHours()).slice(-2) + ":" + ("0" + postedDate.getMinutes()).slice(-2);
            let postedDateString = "";

            let diffTime = Math.abs(now - postedDate);
            let diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); 
            let diffDays = Math.ceil(diffHours / 24);
            let diffMonths = Math.floor(diffDays / 30.436875);
            let diffYears = Math.floor(diffDays / 365.25);

            if (diffHours < 24) {
                postedDateString = "Azi - " + postedTimeString;
            } else if (diffHours < 48) {
                postedDateString = "Ieri - " + postedTimeString;
            } else if (diffDays <= 19) {
                postedDateString = "Acum " + diffDays + " zile";
            } else if (diffDays >= 20 && diffDays <= 30) {
                postedDateString = "Acum " + diffDays + " de zile";
            } else if (diffMonths === 1) {
                postedDateString = "Acum " + diffMonths + " luna";
            } else if (diffMonths < 12) {
                postedDateString = "Acum " + diffMonths + " luni";
            } else if (diffYears === 1) {
                postedDateString = "Acum " + diffYears + " an";
            } else {
                postedDateString = "Acum " + diffYears + " ani";
            }

            detailsDiv.innerHTML = `
                <h2>${anunt.titlu}</h2>
                <p>Stare: ${anunt.stare}</p>
                <p>Locație: ${anunt.locatie}, ${anunt.oras}</p>
                <p>Postat: ${postedDateString}</p>
                <p>Preț: ${anunt.pret} ${anunt.moneda}</p>
            `;

           // Create buttons
            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('buttonContainer');

            const editButton = document.createElement('button');
            editButton.textContent = "Editează";
            editButton.id = "editBtn_" + anunt.id_anunt; 

            const disableButton = document.createElement('button');
            disableButton.textContent = "Dezactivează";
            disableButton.id = "disableBtn_" + anunt.id_anunt; 

            buttonDiv.appendChild(editButton);
            buttonDiv.appendChild(disableButton);

            anuntDiv.appendChild(imgDiv);
            anuntDiv.appendChild(detailsDiv);
            anuntDiv.appendChild(buttonDiv);


            document.getElementById('anunturiContainer').appendChild(anuntDiv);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
