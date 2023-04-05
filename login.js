
let password = document.getElementById("password");
let pass = document.getElementById("pass");
function toggel(elem) {
    type = password.getAttribute("type");

    if (isNaN(password.value)) {
        alert("enter a number");

    }
    if (type === "password") {
        password.setAttribute("type", "text");
        elem.innerText = "hide password";

    }
    else {
        password.setAttribute("type", "password");
        elem.innerText = "show password";
    }

}
function yes(ele) {
    type = pass.getAttribute("type");
    if (isNaN(pass.value)) {
        alert("enter a number");
    }
    if (type === "password") {
        pass.setAttribute("type", "text");
        ele.innerText = "hide password";

    }
    else {
        pass.setAttribute("type", "password");
        ele.innerText = "show password";
    }


}
function validate() {

    if (pass.value != password.value) {
        document.getElementById("res").innerHTML = "confirm password";
    }
    else {
        document.getElementById("res").innerHTML = "";
    }
}
function myFunction() {
    yes(this);
    toggel(this);
}

let input_txt = document.getElementById("input_txt");
let done = document.getElementById("done");
window.addEventListener("keyup", event => {
    let casps = event.getModifierState("CapsLock");
    if (casps) {
        document.getElementById("done").innerText = "Capslock is on!"

    } else {
        document.getElementById("done").innerHTML = "";
    }
})
let pattern = /\s/g;
function space(data) {
    let alert = document.getElementById("space");
    let check = pattern.test(data);
    if (check) {
        console.log("a")
        alert.innerText = "you cant use space in it";
     

    } else {
        console.log("b")
        alert.innerText = "";
    }

}




