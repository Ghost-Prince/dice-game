function play() {
    var score1=0, score2=0;
    while(score1 === score2) {
        score1=Math.floor(((Math.random() * 100) % 6) + 1);
        score2=Math.floor(((Math.random() * 100) % 6) + 1);
    }

    // manipulating attributes of HTML element
    document.querySelector("h1").innerHTML = "Player1 won !!!";
    var image1 = String(score1) + ".png";
    var image2 = String(score2) + ".png";

    document.getElementsByClassName("player1")[0].setAttribute("src",image1);
    document.getElementsByClassName("player2")[0].setAttribute("src",image2);

    if(score1 > score2) {
        document.querySelector("h1").innerHTML = "Player 1 won !!!";
    }
    else if(score2 > score1) {
        document.querySelector("h1").innerHTML = "Player 2 won !!!";
    }
}