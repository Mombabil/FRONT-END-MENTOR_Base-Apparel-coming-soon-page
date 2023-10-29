const mail = document.querySelector(".mail");
const validate = document.querySelector(".form");
const error = document.querySelector(".error");
const logerror = document.querySelector(".logerror");

// a la validation du formulaire, on verifie via une REGEX que la saisie de l'input est une adresse mail
validate.addEventListener("submit", () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
    console.log("il s'agit d'un mail valide");
    return true;
  }
  logerror.innerHTML = '<img src="./images/icon-error.svg" alt="logo error" />';
  error.textContent = "Please provide a valide email";
  validate.style.border = "2px solid hsl(0, 93%, 68%)";
});
