let recaptchaResponseField;

function onloadCallback() {
  recaptchaResponseField = document.createElement("input");
  recaptchaResponseField.type = "hidden";
  recaptchaResponseField.id = "recaptchaResponse";
  recaptchaResponseField.name = "g-recaptcha-response";
  document.getElementById("login-form").appendChild(recaptchaResponseField);

  grecaptcha.render("recaptcha-container", {
    sitekey: "6LdjqCMlAAAAABopKBRjZdUxcVFEvUEdT_p4-BaA",
    callback: verifyCallback,
  });
}

function verifyCallback(response) {
  recaptchaResponseField.value = response;
}
