const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
const USER_LS = `currentUser`,
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Welcome ${text}`;
}
function loadName () {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForName();
    }else {
        paintGreeting(currentUser);
    }
}
function click (){
    greeting.addEventListener("click", deletename);
}
function deletename(){
    greeting.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
    localStorage.removeItem(`currentUser`);
    input.value = "";

}
click();
function init () {
    loadName();
}

init();

localStorage.setItem("tuer", true);