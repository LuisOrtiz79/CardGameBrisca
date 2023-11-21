class DeckBase {
    constructor(cards) {
        this.cards = cards;
        this.valueCard = '';
        this.deck = [];
        this.pileCards = [];
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

    displayDeck(){
        const display = document.getElementById('deck');

        let space = document.createElement('br');
        display.appendChild(space);

        for (let i = 0; i < this.deck.length; i++) {
            let img = document.createElement('img');
            img.src = `${this.deck[i].img}`;

            img.style.border = '5px solid black';
            img.style.borderRadius = '10px';
            img.style.height = '150px';
            img.style.width = '100px';

            display.appendChild(img);
        }
    }

    displayPile(){
        const display = document.getElementById('pile');
        
        let space = document.createElement('br');
        display.appendChild(space);

        //add the cards that are being piled
    }

    /*drawCard(){
        if (this.deck.length === 0) {
            return;
        }

        return deck.pop();
    }*/

    CheckDeck(){
        return this.deck.length;
    }

    checkPileCards(){
        return this.pileCards.length;
    }
}