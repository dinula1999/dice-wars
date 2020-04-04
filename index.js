let i = 0;

let dices = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

function move() {
    if (i == 0) {
        i = 1;
        let elem = document.querySelector(".bar");
        let width = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (width == 100) {
                clearInterval(id);
        
                let randomNumber_1 = Math.round(Math.random() * 5);

                let randomNumber_2 = Math.round(Math.random() * 5);

                document.querySelector(".img1").src = dices[randomNumber_1];

                document.querySelector(".img2").src = dices[randomNumber_2];
                
                elem.style.width = "0%";
                
                i = 0
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }

}
