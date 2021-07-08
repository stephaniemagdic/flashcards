# FlashCards 

#### [Project Spec](https://frontend.turing.edu/projects/flash-cards.html)

##### Week 7 (Mod2) at Turing School of Software and Design

## Project Description

Use your command line to simulate a set of flashcards to practice your knowledge of array prototype methods: itterators!  A user will be able to see the questions in the terminal, take guesses, and see a final score at the end of the round! 
 
### Built-By:

[Stephanie Magdic](https://github.com/stephaniemagdic)


### Technologies Used 

* JavaScript (ECMAScript 2009)
* Node
* NPM packages/dependencies: [Inquirer](https://www.npmjs.com/package/inquirer)
* Mocha test framework and Chai TDD assertion library


### Architecture

* src directory
  * Class files.
  * Util.js
    * Holds the logic that will capture the user input in the console through Inquirer.js command line interface.
* test directory
* data.js
 * Holds our flashcard data that we will use to build our flashcards through the command line.
* index.js
* README.md


## Instructions for running and viewing

You can access the game by `cloning this repository`, navigating to and `opening your terminal`, and running the command `node index.js` in your cloned project directory. This will run the index.js file, which will start display the first flashcard.

Make sure to run `npm install` in your terminal after cloning the repository to install dependencies needed for the flashcards to run.
To exit node on a mac, choose `cntrl + c`!

* **Start the Game:**  
 * Use the command `node index.js` to start the game! You will see a welcome message and your first flashcard!
  
![firstgif](https://i.ibb.co/nL069gm/flashcards-start.gif)

* **Make a Guess:**  
  * Choose an (index number) answer and press enter to confirm your guess!
  * You will see either the message message that your answer is correct or incorrect.

* **Repeat!:** 
  * Go back and make a guess and choose enter until you finish the deck! 

![firstgif](https://i.ibb.co/cJfHBfJ/flashcards-finish.gif)

* **View your score!:**  
  * After you finish all 30 flashcards, your final score will appear.
  * Exit node with `cntrl + c`.
  * Repeat the process by running `node index.js once more`!
 

### Project Challenges 
 * x
 
### Project Wins
 * x
