document.addEventListener("vanzatorCreated", () => {
  const vanzatorSelect = document.getElementById("vanzator");

  function createTextInput(placeholder) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    return input;
  }

  function showFirmaInputs() {
    const input1 = createTextInput("Input 1");
    const input2 = createTextInput("Input 2");
    vanzatorSelect.insertAdjacentElement("afterend", input1);
    vanzatorSelect.insertAdjacentElement("afterend", input2);
  }

  function removeFirmaInputs() {
    const inputs = document.querySelectorAll("#vanzator ~ input[type='text']");
    inputs.forEach((input) => input.remove());
  }

  if (vanzatorSelect) {
    vanzatorSelect.addEventListener("change", (event) => {
      if (event.target.value === "firma") {
        showFirmaInputs();
      } else {
        removeFirmaInputs();
      }
    });
  }
});
