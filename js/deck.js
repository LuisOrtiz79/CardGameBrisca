class DeckBase {
    constructor(cards) {
        this.cards = cards;
        this.valueCard = [];
        this.deck = [];
        this.pileCards = [];
        this.cardChosen = [];
    }

    shuffleCardsToDeck(){
        if(!this.cards){
            return undefined;
          }else{
            for(let i = this.cards.length - 1 ; i > 0; i--) {
              let random = Math.floor(Math.random() * (i + 1));
              let tmp = this.cards[i];
              this.cards[i] = this.cards[random];
              this.cards[random] = tmp;
            }
        }

        for(let i = 0; i < this.cards.length; i++){
            this.deck.push(this.cards[i]);
        }
    }

    checkValueCard(){
        let random = this.deck[Math.floor(Math.random() * this.deck.length)];
        this.valueCard = random;
        this.deck = this.deck.filter(arr => arr !== random);
        return this.valueCard;
    }

    displayCardChosen(){
        const display = document.getElementById('cards-chosen');

        for (let i = 0; i < this.cardChosen.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('id', 'card');
            img.src = `${this.cardChosen[i].img}`;

            display.appendChild(img);
        }
    }

    displayDeck(){
        const display = document.getElementById('deck');

        let space = document.createElement('br');
        display.appendChild(space);

        for (let i = 0; i < this.deck.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('id', 'card');
            img.src = `${this.deck[i].img}`;

            display.appendChild(img);
        }
    }

    CheckDeck(){
        return this.deck.length;
    }

    checkPileCards(){
        return this.pileCards.length;
    }
}