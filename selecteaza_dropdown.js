document.addEventListener('DOMContentLoaded', function () {
  var selectElements = document.querySelectorAll('select');

  selectElements.forEach(function (select) {
    select.addEventListener('mousedown', function () {
      var placeholderOption = this.querySelector('option[disabled]');
      placeholderOption.style.display = 'none';
    });

    select.addEventListener('focusout', function () {
      var placeholderOption = this.querySelector('option[disabled]');
      placeholderOption.style.display = 'block';
    });
  });
});
