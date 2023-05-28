function handleImageContainerClick(inputContainer, imageContainers) {
  inputContainer.addEventListener("click", (e) => {
    const imageContainer = e.target.closest(".image-container");

    if (imageContainer) {
      if (imageContainer.classList.contains("has-image")) {
        enlargeImage(imageContainer, imageContainers);
      } else {
        const inputElement = document.createElement("input");
        inputElement.type = "file";
        inputElement.accept = "image/*,image/webp,image/jfif";
        inputElement.multiple = true;
        inputElement.style.display = "none";
        inputContainer.appendChild(inputElement);

        inputElement.addEventListener("change", () => {
          const files = inputElement.files;
          if (files.length > 0) {
            let fileIndex = 0;
            for (const container of imageContainers) {
              if (!hasImage(container)) {
                if (fileIndex >= files.length) {
                  break;
                }
                const file = files[fileIndex];
                const reader = new FileReader();
                reader.onload = (e) => {
                  container.style.backgroundImage = `url(${e.target.result})`;
                  container.style.backgroundSize = "cover";
                  container.style.backgroundPosition = "center";
                  container.style.backgroundRepeat = "no-repeat";
                  container.innerHTML = "";
                  container.dataset.fileIndex = fileIndex;
                  container.classList.add("has-image");
                };
                reader.readAsDataURL(file);
                fileIndex++;
              }
            }
            window.selectedFiles = files;

            const errorMsg = document.getElementById("error-msg");
            if (errorMsg) {
              errorMsg.style.display = "none";
            }
          }
        });

        inputElement.click();
      }
    }
  });
}

function createModal() {
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.className = "modal";

  const closeBtn = document.createElement("button");
  closeBtn.className = "close";
  closeBtn.innerHTML = "Inapoi";
  modal.appendChild(closeBtn);

  const rotateBtn = document.createElement("button");
  rotateBtn.className = "rotate";
  rotateBtn.textContent = "Rotește";
  modal.appendChild(rotateBtn);

  const modalImage = document.createElement("img");
  modalImage.className = "modal-content";
  modalImage.id = "modalImage";
  modal.appendChild(modalImage);

  const caption = document.createElement("div");
  caption.id = "caption";
  modal.appendChild(caption);

  const prevArrow = document.createElement("span");
  prevArrow.className = "nav-arrow prev-arrow";
  prevArrow.innerHTML = "&#10094;";
  modal.appendChild(prevArrow);

  const nextArrow = document.createElement("span");
  nextArrow.className = "nav-arrow next-arrow";
  nextArrow.innerHTML = "&#10095;";
  modal.appendChild(nextArrow);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "Șterge";
  modal.appendChild(deleteBtn);

  const setPrincipalButton = document.createElement("button");
  setPrincipalButton.className = "set-principal";
  setPrincipalButton.textContent = "Setează ca imagine principală";
  modal.appendChild(setPrincipalButton);

  document.body.appendChild(modal);
  return modal;
}

function deleteImage(imageContainer) {
  imageContainer.style.backgroundImage = "none";
  // Adaugă această linie pentru a resetat stilul de rotație al div-ului
  imageContainer.style.transform = "rotate(0deg)";
  imageContainer.dataset.rotation = "0";
  imageContainer.innerHTML = "+";
  imageContainer.classList.remove("has-image");
  closeModal();
}


function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
    document.body.removeChild(modal);
    toggleBackgroundScrolling(false); // 
  }
  
}

function hasImage(imageContainer) {
  return imageContainer.style.backgroundImage && imageContainer.style.backgroundImage !== "none";
}


function showPrevImage(imageContainers) {
  const modal = document.getElementById("imageModal");
  if (!modal) return;
  const currentImageContainer = modal.associatedImageContainer;
  const prevSibling = currentImageContainer.previousElementSibling;
  if (prevSibling && prevSibling.classList.contains("image-container") && hasImage(prevSibling)) {
    closeModal();
    enlargeImage(prevSibling, imageContainers);
  }
}

function showNextImage(imageContainers) {
  const modal = document.getElementById("imageModal");
  if (!modal) return;
  const currentImageContainer = modal.associatedImageContainer;
  let nextSibling = currentImageContainer.nextElementSibling;
  while (nextSibling && (!nextSibling.classList.contains("image-container") || !hasImage(nextSibling))) {
    nextSibling = nextSibling.nextElementSibling;
  }
  if (nextSibling && nextSibling.classList.contains("image-container") && hasImage(nextSibling)) {
    closeModal();
    enlargeImage(nextSibling, imageContainers);
  }
}


function setMainImage(index, imageContainers) {
  if (index === 0) {
    return;
  }

  const mainImageContainer = imageContainers[0];
  const currentImageContainer = imageContainers[index];

  const mainImageRotation = mainImageContainer.dataset.rotation || '0';
  const currentImageRotation = currentImageContainer.dataset.rotation || '0';

  // Schimbă rotațiile între cele două containere de imagini
  mainImageContainer.dataset.rotation = currentImageRotation;
  currentImageContainer.dataset.rotation = mainImageRotation;

  const mainImage = mainImageContainer.style.backgroundImage;
  const currentImage = currentImageContainer.style.backgroundImage;

  const tempSrc = mainImage;
  mainImageContainer.style.backgroundImage = currentImage;
  currentImageContainer.style.backgroundImage = tempSrc;

  // Aplică rotația corectă pentru fiecare container de imagine
  mainImageContainer.style.transform = `rotate(${currentImageRotation}deg)`;
  currentImageContainer.style.transform = `rotate(${mainImageRotation}deg)`;

  // Închideți modalul după ce ați schimbat imaginile
  closeModal();

  // Redeschideți imaginea care a fost mutată în primul div
  enlargeImage(mainImageContainer, imageContainers);
}



function rotateImage(imageElement, rotation, useTranslate) {
  const currentRotation = imageElement.dataset.rotation ? parseInt(imageElement.dataset.rotation) : 0;
  const newRotation = currentRotation + rotation;

  if (useTranslate) {
    imageElement.style.transform = `translate(-50%, -50%) rotate(${newRotation}deg)`;
  } else {
    imageElement.style.transform = `rotate(${newRotation}deg)`;
  }

  imageElement.dataset.rotation = newRotation;
}


function setupHammer(element, imageContainers) {
  const hammer = new Hammer(element);

  hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

  hammer.on('swipeleft', () => showNextImage(imageContainers));
  hammer.on('swiperight', () => showPrevImage(imageContainers));
}

function toggleBackgroundScrolling(disable) {
  if (disable) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
}



function enlargeImage(imageContainer, imageContainers) {
  const modal = createModal();

  const modalImage = document.getElementById("modalImage");

  setupHammer(modal, imageContainers);

  const backgroundImage = imageContainer.style.backgroundImage;
  const imageUrl = backgroundImage.slice(4, -1).replace(/['"]+/g, '');
  const rotation = parseInt(imageContainer.dataset.rotation) || 0;

  modal.associatedImageContainer = imageContainer;

  modal.style.display = "block";
  
  // Ascundeți imaginea înainte de a seta dimensiunile și sursa
  modalImage.style.visibility = "hidden";

  // Set the image dimensions based on the screen size
  modalImage.addEventListener("load", function () {
    modalImage.classList.add("modal-transition");
    const aspectRatio = this.naturalWidth / this.naturalHeight;
    const maxHeight = window.innerHeight * 0.8;
    const maxWidth = window.innerWidth * 0.8;

    if (this.naturalWidth > maxWidth || this.naturalHeight > maxHeight) {
      if (maxHeight * aspectRatio > maxWidth) {
        this.width = maxWidth;
        this.height = maxWidth / aspectRatio;
      } else {
        this.width = maxHeight * aspectRatio;
        this.height = maxHeight;
      }
    } else {
      this.width = this.naturalWidth;
      this.height = this.naturalHeight;
    }
    
    // Arată imaginea după ce dimensiunile au fost setate
    modalImage.style.visibility = "visible";
  });

  modalImage.src = imageUrl;
  modalImage.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
  modalImage.dataset.rotation = rotation;

  toggleBackgroundScrolling(true);

  const rotateBtn = document.getElementsByClassName("rotate")[0];
  rotateBtn.onclick = function () {
    rotateImage(modalImage, 90, true);
    rotateImage(imageContainer, 90, false);
  };

  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    closeModal();
  };

  const prevArrow = document.getElementsByClassName("prev-arrow")[0];
  prevArrow.onclick = function (event) {
    event.stopPropagation();
    modalImage.classList.remove("modal-transition");
    showPrevImage(imageContainers);
  };

  const nextArrow = document.getElementsByClassName("next-arrow")[0];
  nextArrow.onclick = function (event) {
    event.stopPropagation();
    modalImage.classList.remove("modal-transition");
    showNextImage(imageContainers);
  };

  const deleteBtn = document.getElementsByClassName("delete")[0];
  deleteBtn.onclick = function () {
    deleteImage(imageContainer);
  };

  const setPrincipalButton = document.getElementsByClassName("set-principal")[0];
  setPrincipalButton.textContent = imageContainer === imageContainers[0] ? "Imagine principală" : "Setează ca imagine principală";
  setPrincipalButton.onclick = function () {
    setMainImage(imageContainers.indexOf(imageContainer), imageContainers);
  };
}



function handleFormSubmit() {

  const imageContainers = document.querySelectorAll(".image-container");
  let hasImage = false;

  for (const container of imageContainers) {
    if (container.style.backgroundImage) {
      hasImage = true;
      break;
    }
  }

  const errorMsg = document.getElementById("error-msg");

  if (!hasImage) {
    // Prevenim evenimentul doar dacă nu există nicio imagine
    if (!errorMsg) {
      const errorMsg = document.createElement("p");
      errorMsg.className = "error-msg";
      errorMsg.id = "error-msg";
      errorMsg.textContent = "Trebuie să introduceți cel puțin o imagine.";
      const imageContainers = document.querySelectorAll(".image-container");
      const lastImageContainer = imageContainers[imageContainers.length - 1];
      lastImageContainer.insertAdjacentElement("afterend", errorMsg);

    } else {
      errorMsg.style.display = "block";
      errorMsg.textContent = "Trebuie să introduceți cel puțin o imagine.";
    }
  } else {
    if (errorMsg) {
      errorMsg.style.display = "none";
    }

    // Continuați aici cu trimiterea datelor formularului
    const formularAnunt = document.getElementById("formular-anunt");
    const formData = new FormData(formularAnunt);

    if (window.selectedFiles) {
      for (let i = 0; i < window.selectedFiles.length; i++) {
        const file = window.selectedFiles[i];
        formData.append("imagini[]", file);
      }
    }


    fetch("salveaza_anunt.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((result) => {
        if (result.includes("success")) {
          // Redirecționează către pagina de mulțumire
          window.location.href = "multumire.html";
        } else {
          // Tratează cazul în care anunțul nu a fost adăugat cu succes
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
