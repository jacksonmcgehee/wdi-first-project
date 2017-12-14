# wdi-first-project
This is the first project I made in my Web Development Immersive course at General Assembly in Atlanta. 

# The project evaluated these skills:

### PROJECT Requirements

For your first project you will build a simple game as a Web Application. You must choose from one of the games listed below!

#### Project Objectives

The objectives of this project are to:

* Demonstrate your ability to use `HTML` and `CSS` to build and style an intuitive web application
* Demonstrate your competancy in _DOM manipulation_ using JavaScript
* Publish your source code to _GitHub_ with a solid `README.md` describing the project
* Deploy your application to a production environment such BitBalloon
* Present your project in a presentation style format

Please [click here](/project_assignment_README.md) to see a more detailed description of the assignment.

A `README.md` file containing:
  - My project is a one player game in the style of Jeopardy. The user selects one of five clues from one of five categories. After answering, the monetary value of the clue is added or subtracted from the player's score.
  - [Click here](http://festive-pare-54ca7d.bitballoon.com/) to see the Deployed App
  - [Click here](https://trello.com/b/LDTQNfIZ/jacksonwdifirstproject) to see my Trello Board that contains my user story management
  - [Click here](https://www.figma.com/file/S5iIuuhxgatPUC3BQSvDV7qb/Jackson-WDI-First-Project) to see the original mock-up of my project
  - Technologies and libraries I used:
    - I used Bootstrap to create the modal that presents the clue and response options to the user. It helped me learn how to create and deploy a modal, but caused a lot of extra work to override the Bootstrap styling I did not want to keep. Next time I will create my own modal.
    - I used jQuery 3.2.1
    - I tried to use a plugin called notify.js to create an alternative to the alerts that inform the user if the answer was correct or incorrect, but I belive it would work more cleanly without Bootsrap. 
  - In Version 2, I would like to add:
    - Randomized categories so it is possible to play the game again without the same questions
    - Two player mode
    - In the mobile and tablet layouts, initially only the categories will be visible, and hidden clues toggle to visible when the user selects a category
    - Replace the alerts with notifications that do not require the user to dismiss or close

  - Major takeaways:
    - **I did not commit enough**; I would change multiple lines of code on multiple files before I would remember to commit
    - **My knowledge grew quickly**; As I learned new features and techniques, I realized that implimentation would have been better/easier with a different html structure
    - **I did not focus on my user stories well enough**; I found that I would bounce between solutions or fixes for user stories as I learned new methods
