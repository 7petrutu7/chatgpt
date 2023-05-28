// category-selector.js
document.addEventListener("DOMContentLoaded", () => {
    const categorii = [
        {
            name: "Auto, moto și ambarcațiuni",
            img: "url_catre_imagine_Auto_Moto_si_Ambarcatiuni",
            subcategorii: [
                {
                    name: "Autoturisme",
                    img: "url_catre_imagine_Autoturisme",
                },
                {
                    name: "Motociclete - Scutere - ATV",
                    img: "url_catre_imagine_Motociclete_Scutere_ATV",
                },
            ],
        },
        // ... Continuă cu celelalte categorii și adaugă subcategorii
    ];

    const categoryInput = document.getElementById("category-input");
    const categoryList = document.getElementById("category-list");
    const categoryPlaceholder = document.getElementById("category-placeholder");
    const selectedCategory = document.getElementById("selected-category");

    function displayCategories(categories, backButton = false) {
        categoryList.innerHTML = "";

        if (backButton) {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex align-items-center";
            li.textContent = "Înapoi";
            li.addEventListener("click", () => {
                displayCategories(categorii);
            });
            categoryList.appendChild(li);
        }

        categories.forEach((categorie) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex align-items-center";

            const img = document.createElement("img");
            img.src = categorie.img;
            img.alt = categorie.name;
            img.style.width = "25px";
            img.style.height = "25px";
            img.style.marginRight = "10px";
            li.appendChild(img);

            const span = document.createElement("span");
            span.textContent = categorie.name;
            li.appendChild(span);

            li.addEventListener("click", () => {
                if (categorie.subcategorii) {
                    displayCategories(categorie.subcategorii, true);
                } else {
                    categoryPlaceholder.style.display = "none";
                    selectedCategory.textContent = categorie.parent + " - " + categorie.name;
                    categoryList.classList.add("d-none");
                }
            });

            categoryList.appendChild(li);
        });
    }

    displayCategories(categorii);

    categoryInput.addEventListener("click", () => {
        categoryList.classList.toggle("d-none");
    });

    document.addEventListener("click", (event) => {
        if (!categoryInput.contains(event.target) && !categoryList.contains(event.target)) {
            categoryList.classList.add("d-none");
        }
    });
});
