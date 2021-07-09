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
  
![Start Game](https://i.ibb.co/nL069gm/flashcards-start.gif)

* **Make a Guess:**  
  * Choose an answer (index number) and press enter to confirm your guess!
  * You will see a message displayed that will inform you if you answered correctly or incorrectly.

* **Repeat!:** 
  * Repeat this process by reading the next question, (googling some documentation to help you find your answer) and taking a guess until you go through each card in the deck.

![Finish Game](https://i.ibb.co/cJfHBfJ/flashcards-finish.gif)

* **View your score!:**  
  * After you finish all 30 flashcards, your final score as a percentage will appear.
  * Exit node with `cntrl + c`.
  * Repeat the entire process by running `node index.js` once more!
 

### Project Challenges 
 * Towards the end of the project, I ran into a simple syntax type error that would not allow me to run my last test. (Oh Javascript type errors!) It had given me a strange error that led me to believe that it was a problem with an npm package. I had deleted and reinstalled my node modules, ran my code in another text editor on another computer, and even had a friend clone down my repo. Turns out it was a type error without a very clear error message! This was helpful to run into and a reminder that syntax type errors could cause major problems. I figured it out by commenting out the code in the entire test file and working line by line backwards to until I came across the type error that was breaking my code! 
 * I learn so much from classmates, but spent a lot of time collaborating to help others which took me away from working on extensions. However I would absolutely put this in the win category as well, because collaboration and community are very important and we all learn by helping eachother out. Plus it's more fun that way. `Go possums. <3`
 
### Project Wins
 * I learned about Inquirer and worked with a project that simulated using data recieved from the user through the CLI API to work with asynchronous JavaScript. This will help with our next project where we will be working with fetch requests and a web API.
 * Because I looked at this project early, I was really able to spend a more significant amount of time helping others to debug their code, especially during crunch time as the deadline approached.
