
let buttom = document.getElementById("btn-logout");
let buttomMd = document.getElementById("btn-md-logout");
let buttomSm = document.getElementById("btn-sm-logout");

buttom.addEventListener("click",LogOut);
buttomMd.addEventListener("click",LogOut);
buttomSm.addEventListener("click",LogOut);

function LogOut(){

    localStorage.removeItem("name");
    localStorage.removeItem("user");
    localStorage.removeItem("dataBase");

    window.location.href = 'index.html'; //relative to domain
}
