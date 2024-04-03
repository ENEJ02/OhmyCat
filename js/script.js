let form = document.querySelector("#formCats");
// console.log(form);
// console.log(form.elements);
// console.log(raison.value);

// console.log(form.elements.length);

formCats.addEventListener("submit", validForm);

function validForm(event) {
  if (choice.value == "" && raison.value.length < 10) {
    console.log(raison.value.length);
    console.log(choice.value);
    formCats.classList.add("alert", "alert-danger");
    // erreurSelect.classList.remove("d-none");
    // erreurArea.classList.remove("d-none");
  } else if (choice.value !== "" && raison.value.length < 10) {
    erreurArea.classList.remove("d-none");
  } else if (choice.value == "" && raison.value.length > 10) {
    erreurSelect.classList.remove("d-none");
  } else {
    form.classList.add("d-none");
    messageValide.classList.remove("d-none");
    erreurSelect.classList.add("d-none");
    erreurArea.classList.add("d-none");
  }
  event.preventDefault();
}
