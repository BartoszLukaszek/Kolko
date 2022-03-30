window.onload = function() {
    app.init();
}
class App{
    winningVariants = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ];


    currentPlayer = "X"

    init() {
        document.querySelectorAll(".gra").forEach(
            gra => gra.addEventListener("click",this.graClick)

        );
        document.getElementById("restart-game").addEventListener("click",
        () => this.restartGame() );
    }

    graClick = (e) => {
        //console.log(e.target);
        this.playerTurn(e.target)
    }
    
    initGame(){
        this.currentPlayer = "X";

        document.querySelectorAll(".gra").forEach(
            el => {el.innerHTML = "";}
        );
    }

    playerTurn(el){
        if(el.innerHTML == "X" || el.innerHTML == "O") return;
        el.innerHTML = this.currentPlayer;

        this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";

        this.checkWinner();
    }

    checkWinner(){
        for(let i = 0; i < this.winningVariants.length; i++) {
           const variant = this.winningVariants[i];
           const a = this.getgraValue(variant[0]);
           const b = this.getgraValue(variant[1]);
           const c = this.getgraValue(variant[2]);

           if(a == "" || b == "" || c == "" ) continue;

           if(a == b && b == c) {
               console.log("Zwyciężca: " + a);
               this.setWinner(" - zwyciężył:" +a);
               this.restartGame();
           }

        }
    }

    restartGame() {
        this.initGame();
    }

    setWinner(str){
        document.getElementById("winner").innerHTML = str;
    }
    getgraValue(index) {
        return document.querySelector(`.gra[data-index='${index}']`).innerHTML;
    }
}

const app = new App