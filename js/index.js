const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();
const numberPairsClicked = document.getElementById("pairs-clicked");
const numberPairsGuessed = document.getElementById("pairs-guessed");

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  function printClicks(){
    numberPairsClicked.textContent = memoryGame.pairsClicked;
    numberPairsGuessed.textContent = memoryGame.pairsGuessed;

  }

  
  function cardPicked(card) {
    if (memoryGame.pickedCards.length === 0) {
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);
    } else if (memoryGame.pickedCards.length === 1) {
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);
    } else { 
      checkingCards(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
    }
    // if (memoryGame.checkIfFinished) { alert("bravo")}
    
  }

  function checkingCards(card1, card2) {
    let attribute1 = card1.getAttribute('data-card-name');
    let attribute2 = card2.getAttribute('data-card-name');
    if (memoryGame.checkIfPair(attribute1, attribute2)) {
      memoryGame.pickedCards = [];
      
       
      
    } else if (!memoryGame.checkIfPair(attribute1, attribute2)) {
      card1.classList.remove('turned');
      card2.classList.remove('turned');
      memoryGame.pickedCards = [];
    }
  }

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      printClicks();
      if (memoryGame.checkIfFinished()) { alert("bravo")}
      console.log(card);
      cardPicked (card) ;
      
    });
  });
});
