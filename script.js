const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-Container");

function addTask(){
    if(inputBox.value === ''){
    alert("write some new task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value= "";
    saveData();
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// script.js
window.addEventListener('load', function() {
    const transitionImage = document.getElementById('transitionImage');
    transitionImage.classList.add('animate');
  });
  
showTask();


// const form = document.getElementById("form");
// const nameField = document.getElementById("nameField");
// const email= document.getElementById("email");
// const password=document.getElementById("password");
// const cpassword=document.getElementById("cpassword");
// let signupBtn = document.getElementById("signupBtn");
// let loginBtn = document.getElementById("loginBtn");
// let title = document.getElementById("title");

// loginBtn.onclick = function() {
//     nameField.style.maxHeight = "0";
//     cpassword.style.maxHeight = "0";
//     title.innerHTML = "Log in";
//     signupBtn.classList.add("disable");
//     loginBtn.classList.remove("disable");
// }

// signupBtn.onclick = function() {
//     nameField.style.maxHeight = "65px";
//     cpassword.style.maxHeight = "65px";
//     title.innerHTML = "Sign Up";
//     signupBtn.classList.remove("disable");
//     loginBtn.classList.add("disable");
// }
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     validateInputs();
// })

// function validateInputs(){
//     const nameFieldVal = nameField.Value.trim();
//     const emailVal = email.value.trim();
//     const passwordVal = password.value.trim();
//     const cpassword = cpassword.value.trim(); 

// }



