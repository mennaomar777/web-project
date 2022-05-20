let landingPage = document.querySelector(".landing");
let imgArray=["tennis.jpeg", "a6.png","a4.jpeg","a3.jpeg","a2.jpeg","a1.jpeg"];
landingPage.style.backgroundImage='url("a5.jpg")';
setInterval(() => {
    let randomNumber =Math.floor(Math.random()*imgArray.length);
    landingPage.style.backgroundImage='url('+imgArray[randomNumber]+')';
},5000);
