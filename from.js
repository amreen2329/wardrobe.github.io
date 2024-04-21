let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let nameField = document.querySelector(".namefield");
let lastnameField = document.querySelector(".lnamefield");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let inputgroup = document.querySelector(".input-group");

signInBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  lastnameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  inputgroup.style.height = "200px";
});

signUpBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "60px";
  lastnameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  inputgroup.style.height = "280px";
  error.style.display = "none";
});

let fname = document.querySelector("#name");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let signup = document.querySelector(".signupbtn");
let signin = document.querySelector(".signinbtn");
let error = document.querySelectorAll(".error");

signup.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(fname.value);

  if (fname.value === "") {
    error[0].classList.add("error-show");
  } else {
    error[0].classList.remove("error-show");
  }
  if (lname.value === "") {
    error[1].classList.add("error-show");
  } else {
    error[1].classList.remove("error-show");
  }
  if (email.value.indexOf("@") == -1) {
    error[2].classList.add("error-show");
  } else {
    error[2].classList.remove("error-show");
  }

  if (password.value < 6) {
    error[3].classList.add("error-show");
  } else {
    error[3].classList.remove("error-show");
  }
  if (
    email.value.indexOf("@") != -1 &&
    password.value.length > 6 &&
    fname.value != "" &&
    lname.value != ""
  ) {
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
  }
});
signin.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value.indexOf("@") == -1) {
    error[2].classList.add("error-show");
  } else {
    error[2].classList.remove("error-show");
  }

  if (password.value.length < 6) {
    error[3].classList.add("error-show");
  } else {
    error[3].classList.remove("error-show");
  }
  if (email.value.indexOf("@") != -1 && password.value.length > 6) {
    window.location.href = "index1.html";
  }
});
