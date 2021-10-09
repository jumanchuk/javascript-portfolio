
const userls = localStorage.getItem('user');
const buttom = $("#btn-login");

(userls) ?  redireccionar('./timeline.html')  :  buttom[0].addEventListener("click",login) ;

function login(){

    const fullname = document.getElementById("name").value;
    const username = document.getElementById("user").value;

    const user = {fullname: fullname, username: username, bookmarks: 0, followers: 0, followings: 0};

    localStorage.setItem("user", JSON.stringify(user));

    setTimeout ("redireccionar()", 5000); //tiempo expresado en milisegundos
}

function redireccionar(url){

    window.location.href = url; //relative to domain
} 




