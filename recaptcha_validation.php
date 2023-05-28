<?php

function validate_recaptcha($recaptcha_response) {
    $recaptcha_secret = "6LdjqCMlAAAAABXyCHbMVCSvan0GrgZSBEgJmL73";
    $recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
    $recaptcha_request = "{$recaptcha_url}?secret={$recaptcha_secret}&response={$recaptcha_response}";
    $recaptcha_response_json = json_decode(file_get_contents($recaptcha_request), true);

    if ($recaptcha_response_json["success"] === false) {
        return false;
    }

    return true;
}

?>
