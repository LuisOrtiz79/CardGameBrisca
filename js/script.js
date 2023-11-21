const cards = [
    { type: 'Sword', name: 'One', int: 1, value: 11, img: '../images/Sword_1.jpeg' },
    { type: 'Sword', name: 'Two', int: 2, value: 0, img: '../images/Sword_2.jpeg' },
    { type: 'Sword', name: 'Three', int: 3, value: 10, img: '../images/Sword_3.jpeg' },
    { type: 'Sword', name: 'Four', int: 4, value: 0, img: '../images/Sword_4.jpeg' },
    { type: 'Sword', name: 'Five', int: 5, value: 0, img: '../images/Sword_5.jpeg' },
    { type: 'Sword', name: 'Six', int: 6, value: 0, img: '../images/Sword_6.jpeg' },
    { type: 'Sword', name: 'Seven', int: 7, value: 0, img: '../images/Sword_7.jpeg' },
    { type: 'Sword', name: 'Eight', int: 8, value: 0, img: '../images/Sword_8.jpeg' },
    { type: 'Sword', name: 'Nine', int: 9, value: 0, img: '../images/Sword_9.jpeg' },
    { type: 'Sword', name: 'Ten', int: 10, value: 2, img: '../images/Sword_10.jpeg' },
    { type: 'Sword', name: 'Eleven', int: 11, value: 3, img: '../images/Sword_11.jpeg' },
    { type: 'Sword', name: 'Twelthe', int: 12, value: 4, img: '../images/Sword_12.jpeg' },
    { type: 'Cup', name: 'One', int: 1, value: 11, img: '../images/Cup_1.jpeg' },
    { type: 'Cup', name: 'Two', int: 2, value: 0, img: '../images/Cup_2.jpeg' },
    { type: 'Cup', name: 'Three', int: 3, value: 10, img: '../images/Cup_3.jpeg' },
    { type: 'Cup', name: 'Four', int: 4, value: 0, img: '../images/Cup_4.jpeg' },
    { type: 'Cup', name: 'Five', int: 5, value: 0, img: '../images/Cup_5.jpeg' },
    { type: 'Cup', name: 'Six', int: 6, value: 0, img: '../images/Cup_6.jpeg' },
    { type: 'Cup', name: 'Seven', int: 7, value: 0, img: '../images/Cup_7.jpeg' },
    { type: 'Cup', name: 'Eight', int: 8, value: 0, img: '../images/Cup_8.jpeg' },
    { type: 'Cup', name: 'Nine', int: 9, value: 0, img: '../images/Cup_9.jpeg' },
    { type: 'Cup', name: 'Ten', int: 10, value: 2, img: '../images/Cup_10.jpeg' },
    { type: 'Cup', name: 'Eleven', int: 11, value: 3, img: '../images/Cup_11.jpeg' },
    { type: 'Cup', name: 'Twelthe', int: 12, value: 4, img: '../images/Cup_12.jpeg' },
    { type: 'Gold', name: 'One', int: 1, value: 11, img: '../images/Gold_1.jpeg' },
    { type: 'Gold', name: 'Two', int: 2, value: 0, img: '../images/Gold_2.jpeg' },
    { type: 'Gold', name: 'Three', int: 3, value: 10, img: '../images/Gold_3.jpeg' },
    { type: 'Gold', name: 'Four', int: 4, value: 0, img: '../images/Gold_4.jpeg' },
    { type: 'Gold', name: 'Five', int: 5, value: 0, img: '../images/Gold_5.jpeg' },
    { type: 'Gold', name: 'Six', int: 6, value: 0, img: '../images/Gold_6.jpeg' },
    { type: 'Gold', name: 'Seven', int: 7, value: 0, img: '../images/Gold_7.jpeg' },
    { type: 'Gold', name: 'Eight', int: 8,value: 0, img: '../images/Gold_8.jpeg' },
    { type: 'Gold', name: 'Nine', int: 9, value: 0, img: '../images/Gold_9.jpeg' },
    { type: 'Gold', name: 'Ten', int: 10, value: 2, img: '../images/Gold_10.jpeg' },
    { type: 'Gold', name: 'Eleven', int: 11, value: 3, img: '../images/Gold_11.jpeg' },
    { type: 'Gold', name: 'Twelthe', int: 12, value: 4, img: '../images/Gold_12.jpeg' },
    { type: 'Club', name: 'One', int: 1, value: 11, img: '../images/Club_1.jpeg' },
    { type: 'Club', name: 'Two', int: 2, value: 0, img: '../images/Club_2.jpeg' },
    { type: 'Club', name: 'Three', int: 3, value: 10, img: '../images/Club_3.jpeg' },
    { type: 'Club', name: 'Four', int: 4, value: 0, img: '../images/Club_4.jpeg' },
    { type: 'Club', name: 'Five', int: 5, value: 0, img: '../images/Club_5.jpeg' },
    { type: 'Club', name: 'Six', int: 6, value: 0, img: '../images/Club_6.jpeg' },
    { type: 'Club', name: 'Seven', int: 7, value: 0, img: '../images/Club_7.jpeg' },
    { type: 'Club', name: 'Eight', int: 8,value: 0, img: '../images/Club_8.jpeg' },
    { type: 'Club', name: 'Nine', int: 9, value: 0, img: '../images/Club_9.jpeg' },
    { type: 'Club', name: 'Ten', int: 10, value: 2, img: '../images/Club_10.jpeg' },
    { type: 'Club', name: 'Eleven', int:11, value: 3, img: '../images/Club_11.jpeg' },
    { type: 'Club', name: 'Twelthe', int: 12, value: 4, img: '../images/Club_12.jpeg' }
  ];

  const deckBase = new DeckBase(cards);

  window.onload = function () {

    document.querySelector('#game-container').style.display = 'none';
    document.querySelector('#game-rules').style.display = 'none';

    let valueCard = document.getElementById('valueCard');
    let deck = document.getElementById('deck');
    let pile = document.getElementById('pile');

    //Shuffles the cards and puts it in the deck
    deckBase.shuffleCardsToDeck();
    //Gets the random value card
    deckBase.checkValueCard();

    //This is where the image is created and viewed on the page
    let space = document.createElement('br');
    valueCard.appendChild(space);
    let img = document.createElement('img');
    img.src = `${deckBase.valueCard.img}`;

    img.style.border = '5px solid black';
    img.style.borderRadius = '10px';
    img.style.height = '150px';
    img.style.width = '100px';

    valueCard.appendChild(img);

    //This is where the deck is created and viewed on the page
    deck.append(deckBase.displayDeck());
    //pile.innerText = `${deckBase.pile}`;
    
    const startButton = document.getElementById('start-button');

    let base;

    startButton.addEventListener('click', function () {
      base = new CardGame;
      base.board();
      startGame();
    });
  
    function startGame(){
      console.log('start game');
      base.start();

      document.querySelector('#game-rules').style.display = 'none';
      document.addEventListener('click', (e) => {
        console.log('Events', e);
      })
    }

    const rulesButton = document.getElementById('rules-button');

    rulesButton.addEventListener('click', function () {
      rulesInfo();
    });

    function rulesInfo(){
      document.querySelector('#game-container').style.display = 'none';
      document.querySelector('#game-rules').style.display = 'block';
    };
  };