class Deck {
    constructor(cards) {
        this.cards = cards;
        this.valueCard = [];
        this.deck = [];
        this.pileCards = [];
        this.cardsChosen = [];
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
        let temp = this.deck.splice(random, 1);
        let tempPop = temp.pop()
        this.valueCard.push(tempPop);

        return this.valueCard;
    }

    displayValueCard(){
        const display = document.getElementById('valueCard');

        let space = document.createElement('br');
        display.appendChild(space);

        let img = document.createElement('img');
        img.setAttribute('id', 'card');
        img.src = `${this.valueCard[0].img}`;

        display.appendChild(img);
    }

    displayDeck(){
        const display = document.getElementById('deck');
        display.innerText = this.deck.length;

        let space = document.createElement('br');
        display.appendChild(space);

        for (let i = 0; i < this.deck.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('id', 'card');
            img.src = `${'https://github.com/LuisOrtiz79/cardGameBrisca/tree/master/images/card_back.jpg'}`;

            display.appendChild(img);
        }
    }

    displayPile(){
        const display = document.getElementById('pile');
        display.innerText = this.pileCards.length;

        let space = document.createElement('br');
        display.appendChild(space);

        for (let i = 0; i < this.pileCards.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('id', 'card');
            img.src = `https://github.com/LuisOrtiz79/cardGameBrisca/tree/master/images/${this.pileCards[i].img}`;

            display.appendChild(img);
        }
    }

    displayCardsChosen(){
        const display = document.getElementById('cards-chosen');

        const name = document.createElement('p');
        name.innerText = 'Cards chosen:';
        display.appendChild(name);

        for (let i = 0; i < this.cardsChosen.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('id', 'card');
            img.src = `https://github.com/LuisOrtiz79/cardGameBrisca/tree/master/images/${this.cardsChosen[i].img}`;

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
