// inputFileHandler.js

function handleFileInput(input, inputContainer) {
  if (input.tip === "file") {
    let br = document.createElement("br");
    inputContainer.appendChild(br);

    const label = document.createElement("label");
    label.innerText = input.eticheta;
    label.htmlFor = input.id;
    inputContainer.appendChild(label);

    let br2 = document.createElement("br");
    inputContainer.appendChild(br2);
  }
}
