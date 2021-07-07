const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

//test set-up
describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let cards;
  let round;
  let correctGuess;
  let incorrectGuess;
  before(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ['reduce()', 'map()', 'filter()'], 'reduce()');
    card3 = new Card(12, 'Which iteration method returns an array of the same length as the original array?', ["map()", "forEach()", "reduce()"], 'map()');
    deck = new Deck([card1, card2, card3]);
    cards = deck.cards;
    correctGuess = 'object';
    incorrectGuess = 'array';
  });

  beforeEach(() => {
    round = new Round(cards);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

  //default property tests
  it('should store a deck', () => {
    expect(round.deck).to.equal(cards);
  });

  it('should default to storing 0 turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should store a current Card object', () => {
    expect(round.currentCard).to.equal(card1);
  });

  it('should default incorrect guesses as empty', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  //returnCurrentCard() tests
  it('should return the current card', () => {
    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.equal(round.currentCard);

    round.turns = 1;

    const currentCard2 = round.returnCurrentCard();

    expect(currentCard2).to.equal(round.currentCard);
  })

  //takeTurn(guess) tests
  it('should be able to store a new instance of turn as a property when a guess is made', () => {
    round.takeTurn(incorrectGuess);
    
    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it('should create a new instance of turn passing in a guess as an argument', () => {
    round.takeTurn(incorrectGuess);

    expect(round.currentTurn.guess).to.equal(incorrectGuess);
  });

  it('should increment turns after a turn is taken', () => {
    round.takeTurn(incorrectGuess);
   
    expect(round.turns).to.equal(1);
  });

  it('should update the current card after a turn is taken', () => {
    round.takeTurn(incorrectGuess);

    expect(round.currentCard).to.equal(card2);
  });

  it('should provide feedback regarding whether the guess is correct or incorrect', () => {
    const feedback = round.takeTurn(correctGuess);

    expect(feedback).to.equal('correct!')

    const feedback2 = round.takeTurn(incorrectGuess);

    expect(feedback2).to.equal('incorrect!')
  })

  it('should store incorrect guesses by id', () => {
    round.takeTurn(incorrectGuess);
  
    expect(round.incorrectGuesses).to.deep.equal([1]);
      
    round.takeTurn(round.currentCard.correctAnswer);
  
    expect(round.incorrectGuesses).to.deep.equal([1]);
  })
  
  //calculatePercentCorrect() tests
  it('should return percent of correct guesses', () => {
    round.takeTurn(correctGuess);
    
    let percentCorrect = round.calculatePercentCorrect();
    
    expect(percentCorrect).to.equal(100);

    round.takeTurn(incorrectGuess);
    round.takeTurn(incorrectGuess);
 
    percentCorrect = round.calculatePercentCorrect();

    expect(percentCorrect).to.equal(33);
  });

 
})