const memoryGame = {
    liczKafelki : 20, //kafelki
    wRzedzie : 5, //na rząd
    planszaDiv : null, //plansza
    wynikDiv : null, //wynik
    kafelki : [], //wymieszana tablica z kafelkami
    kafelkiZaznaczone : [], //zaznaczone klocki
    iloscRuchow : 0, //liczba ruchów
    obrazki : [ //grafiki
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "star.png",
        "8.png",
        "9.png",
        "10.png"
    ],
    canGet : true, //czy można klikać?
    tilePairs : 0, //ilość dopasowań
    
    tileClick(e) {
        if (this.canGet) {
            //nie pobraliśmy 1 elementu albo nie występuje w pobranych
            if (!this.kafelkiZaznaczone[0] || (this.kafelkiZaznaczone[0].dataset.index !== e.target.dataset.index)) {
                this.kafelkiZaznaczone.push(e.target);
                e.target.style.backgroundImage = `url(${this.obrazki[e.target.dataset.cardType]})`;
            }
            // usunięcie 2 tych samych kart i zwiększenie licznika ruchów
            if (this.kafelkiZaznaczone.length === 2) {
                this.canGet = false;

                if (this.kafelkiZaznaczone[0].dataset.cardType === this.kafelkiZaznaczone[1].dataset.cardType) {
                    setTimeout(() => this.deleteTiles(), 500);
                } else {
                    setTimeout(() => this.resetTiles(), 500);
                }

                this.iloscRuchow++;
                this.wynikDiv.innerText =this.iloscRuchow;
            }
        }
    },

    deleteTiles() {
        this.kafelkiZaznaczone.forEach(el => {
            const emptyDiv = document.createElement("div");
            el.after(emptyDiv);
            el.remove();
        });

        this.canGet = true;
        this.kafelkiZaznaczone = [];

        this.tilePairs++;

        if (this.tilePairs >= this.liczKafelki / 2) {
            alert("Wygrałeś w "+this.iloscRuchow+" ruchów ");
        }
    },

    resetTiles() {
        this.kafelkiZaznaczone.forEach(el => el.style.backgroundImage = "");
        this.kafelkiZaznaczone = [];
        this.canGet = true;
    },

    startGame() {
        
        this.planszaDiv = document.querySelector(".plansza");
        this.planszaDiv.innerHTML = "";

        
        this.wynikDiv = document.querySelector(".wynik");
        this.wynikDiv.innerHTML = 0;

        //reset zmiennych
        this.kafelki = [];
        this.kafelkiZaznaczone = [];
        this.iloscRuchow = 0;
        this.canGet = true;
        this.tilePairs = 0;

        //generujemy tablicy klocków
        for (let i=0; i<this.liczKafelki; i++) {
            this.kafelki.push(Math.floor(i/2));
        }

        //wymieszanie
        for (let i=this.liczKafelki-1; i>0; i--) {
            const swap = Math.floor(Math.random()*i);
            const tmp = this.kafelki[i];
            this.kafelki[i] = this.kafelki[swap];
            this.kafelki[swap] = tmp;
        }

        for (let i=0; i<this.liczKafelki; i++) {
            const tile = document.createElement("div");
            tile.classList.add("game-tile");
            this.planszaDiv.appendChild(tile);
            tile.dataset.cardType = this.kafelki[i];
            tile.dataset.index = i;
            tile.addEventListener("click", e => this.tileClick(e));
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".start");
    startBtn.addEventListener("click", e => memoryGame.startGame());
});