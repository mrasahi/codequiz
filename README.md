# codequiz
Homework03 - Makoto Asahi
# Summary
Used bootstrap for layout.

Changed from overwriting existing HTML text to just append a generated list each time.
> Old js renamed to scrapped.js

Questions are randomly pulled from a questions list

The pulled question has its index randomized, making them show up on the page in random order

A new `li` is made to house the question choices, then added onto the page


# Current bugs
Clicking multiple times within the 1 sec transition between questions will still run the answerChecks from that question set.

Multiple clicks will still register in the question choices.

> Possible fix is to set a variable called `isActive` with a boolean that switches when a button is clicked. When switched, it will add `disabled` to class of clickable buttons. `isActive` will change booleans again after the 1 sec setInterval.

**I didn't use buttons!**

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