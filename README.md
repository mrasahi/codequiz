# codequiz
Homework03 - Makoto Asahi

https://mrasahi.github.io/codequiz/
# Summary
Used bootstrap for layout.

Clicking `Start Quiz` will start a timer and put a question on the page.

Changed from overwriting existing HTML text to just append a generated list each time.
> Old js renamed to scrapped.js

Questions are randomly pulled from a questions list

The pulled question has its index randomized, making them show up on the page in random order

A new `li` is made to house the question choices, then added onto the page

Clicking an answer will highlight the correct answer in green and incorrect in red

Correct answers add to the score. Incorrect answers subtract time.

<img src="./assets/img/preview1" width = "100%">

<img src="./assets/img/preview2" width = "100%">

<img src="./assets/img/preview3" width = "100%">





# Requirements
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```