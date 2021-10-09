
/*
Como pasar parametro this al hacer addEventListener
var elements = document.getElementsByClassName("hstg");
Array.from(elements).forEach(function(element) {
  element.addEventListener('click', filter(this));
});

*/

if (!localStorage.getItem('dataBase')){

    //Declaramos la url que vamos a usar para el GET
    const URLGET = "https://614d1bade3cf1f001712d001.mockapi.io/api/posts/posts";

    $.get(URLGET, function (respuesta, estado) {
        if(estado === "success"){
          let tweets = respuesta;
          localStorage.setItem('dataBase',JSON.stringify(tweets));
          window.location.reload();
        }
    });
}

let dataBase = localStorage.getItem('dataBase');
let tweets = JSON.parse(dataBase);

tweets.sort(function (a, b) {

  if (a.datetime > b.datetime) {
    return 1;
  }

  if (a.datetime < b.datetime) {
    return -1;
  }

  // a must be equal to b
  return 0;
  
});

for(let i = 0; i <tweets.length;i++){

    const tweet = new Tweet(tweets[i].id,tweets[i].name,tweets[i].user,tweets[i].text,tweets[i].code,tweets[i].bookmark,tweets[i].retweet,tweets[i].like,tweets[i].datetime);
    tweet.print();
}

function getTweetdate(){

    let now = new Date();
    return now;

}

