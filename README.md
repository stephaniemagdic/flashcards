# FlashCards 

#### [Project Spec](https://frontend.turing.edu/projects/flash-cards.html)

##### Week 7 (Mod2) at Turing School of Software and Design

## Project Description

Use your command line to simulate a set of flashcards to practice your knowledge of array prototype methods! With this console based application, a user will be able to see the questions in the terminal, take guesses, and see a final score at the end of the round! 
 
### Built-By:

[Stephanie Magdic](https://github.com/stephaniemagdic)


### Technologies Used 

* JavaScript (ECMAScript 2009)
* Node
* NPM packages/dependencies: [Inquirer](https://www.npmjs.com/package/inquirer)
* Mocha test framework and Chai TDD assertion library


### Architecture

* src directory
  * ES6 class files
  * Util.js: Holds the logic that will capture the user input in the console through Inquirer.js command line interface
* test directory
* data.js: holds the data that will populate the flashcard deck
* index.js: our respository entry point which will start the server and invoke the start method on the game class, showing us our first flashcard
* README.md


## Instructions for running and viewing

You can access the game by `cloning this repository`, navigating to and `opening up your terminal`, and running the command `node index.js` in your cloned project directory. This will run the index.js file, which will display the first flashcard in the deck.

Note: Make sure to run `npm install` in your terminal after cloning the repository to install dependencies needed for the flashcards to run.
To exit node on a mac, choose `cntrl + c`!

* **Start the Game:**  
 * Use the command `node index.js` to start the game! You will see a welcome message and your first flashcard!
  
![firstgif](https://i.ibb.co/nL069gm/flashcards-start.gif)

* **Make a Guess:**  
  * Choose an answer (index number) and press enter to confirm your guess!
  * You will see either the message displayed that will inform you if you answered correct or incorrectly.

* **Repeat!:** 
  * Repeat this process by reading the next process, (googling some documentation to help you find your answer) and take a guess until you go through each card in the deck.

![firstgif](https://i.ibb.co/cJfHBfJ/flashcards-finish.gif)

* **View your score!:**  
  * After you finish all 30 flashcards, your final score as a percentage will appear.
  * Exit node with `cntrl + c`.
  * Repeat the entire process by running `node index.js` once more!
 

### Project Challenges 
 * Towards the end of the project, I ran into an error with NPM that would not allow me to run my last test. There isn't an abundance of documentation on this error and cannot be debugged easily without uninstalling and reinstalling node, but it is a helpful issue to run into when working with node as it can throw some unexpected errors. 
 * I learn so much from classmates, but spend a lot of time collaborating to help others which took me away from working on extensions, but I would also absolutely put this in the win category as well, because collaboration and community is very important and we all learn by helping eachother out. Go possums. <3
 
### Project Wins
 * I learned about inquirer and starting to simulate waiting to fetch data from a user through the CLI API. This will help with our next project where we will be working with fetch requests.
 * Because I looked at this project early, I was really able to spend a more significant amount of time helping others to debug their code, especially during the curnch time as the deadline approached.. 
