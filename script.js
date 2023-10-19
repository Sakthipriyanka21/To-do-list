const form = document.getElementById("form");
const nameField = document.getElementById("nameField");
console.log(nameField)
const email= document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");
let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let title = document.getElementById("title");
console.log(nameField);

loginBtn.onclick = function() {

    console.log("login button is clicked");
    nameField.style.maxHeight = "0";
    cpassword.style.maxHeight = "0";
    title.innerHTML = "Log in";
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
    nameField.style.maxHeight = "65px";
    cpassword.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
}

String.prototype.isEmail = function () {
  return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};

String.prototype.isAlpha = function () {
  return !!this.match(/^[a-zA-Z]*$/);
};

function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === " ") {
      //Error
      errorInput(input, `${getName(input)} is Required`);
    } else {
      //Success
      successInput(input);
    }
  });
}
function getName(input) {
  //return input.id;
  return input.getAttribute("data-name");
}
function errorInput(input, message) {
    const inputfield = input.parentElement;
    inputfield.classList.add("error"); // Use classList.add to add the "error" class
    const p = inputfield.querySelector("p");
    p.innerHTML = message;
  }
  function successInput(input) {
    const inputfield = input.parentElement;
    inputfield.classList.remove("error"); // Remove the "error" class
    inputfield.classList.add("success"); // Add the "success" class
    const p = inputfield.querySelector("p");
    p.innerHTML = ""; // Clear the error message
}


function checkLength(input, min, max) {
  const data = input.value.trim().length;
  if (data < min) {
    errorInput(input, `${getName(input)} must be aleast greater than ${min} characters`);
  } else if (data > max) {
    errorInput(input, `${getName(input)} must be aleast lesser than ${max} characters`);
  } else {
    successInput(input);
  }
}

function checkConfirmPassword(password, cpassword) {
  if (password.value != cpassword.value) {
    errorInput(cpassword, `${getName(cpassword)}  does not match`);
    console.log(errorInput);
}
}

function checkEmail(input) {
  if (!input.value.trim().isEmail()) {
    errorInput(input, `This is not an valid email address`);
  }
}
function checkAlpha(input) {
  if (!input.value.trim().isAlpha()) {
    errorInput(input, `${getName(input)}  Must be Alphabets`);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([nameField, email, password, cpassword]);
  checkLength(nameField, 5, 10);
  checkLength(password, 5, 10);
  checkConfirmPassword(password, cpassword);
  checkEmail(email);
  checkAlpha(nameField);
});