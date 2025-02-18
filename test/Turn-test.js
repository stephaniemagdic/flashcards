const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  //-----------test set-up
  let card, card2, correctGuess, incorrectGuess, guess, anotherGuess;

  before(() => {
    card = new Card(
      1, 
      'What allows you to define a set of related information using key-value pairs?', 
      ['object', 'array', 'function'], 'object'
    );
    card2 = new Card(
      14, 
      'Which iteration method can turn an array into a single value of any data type?', 
      ['reduce()', 'map()', 'filter()'], 
      'reduce()'
    );
    correctGuess = 'object';
    incorrectGuess = 'array';
    guess = 'guessInputString';
    anotherGuess = 'guessInputString2';
   
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  //-----------default property tests
  it('should store a guess', () => {
    const turn = new Turn(guess);
    expect(turn.guess).to.equal(guess);

    const turn2 = new Turn(anotherGuess);
    expect(turn2.guess).to.equal(anotherGuess);
  });  

  it('should store a card', () => {
    const turn = new Turn(guess, card);

    expect(turn.card).to.equal(card);

    const turn2 = new Turn(guess, card2);

    expect(turn2.card).to.equal(card2);
  });

  //-----------returnGuess() tests
  it('should return guess', () => {
    const turn = new Turn(guess, card);

    const returnedGuess = turn.returnGuess();

    expect(returnedGuess).to.equal(guess);
  });

  //-----------returnCard() tests
  it('should return card', () => {
    const turn = new Turn(guess, card);

    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card);
  });

  //-----------evaluateGuess() tests
  it('should evalutate guess to true or false', () => {
    const turn = new Turn(correctGuess, card);
    const turn2 = new Turn(incorrectGuess, card);

    const evaluatedGuess = turn.evaluateGuess();

    const evaluatedGuess2 = turn2.evaluateGuess();

    expect(evaluatedGuess).to.equal(true);

    expect(evaluatedGuess2).to.equal(false);
  });

  //-----------giveFeedback() tests
  it('should give feedback if guess is correct or incorrect', () => {
    const turn = new Turn(correctGuess, card);

    const feedback = turn.giveFeedback();

    expect(feedback).to.equal('correct!');

    const turn2 = new Turn(incorrectGuess, card);

    const feedback2 = turn2.giveFeedback();

    expect(feedback2).to.equal('incorrect!');
  });

});
