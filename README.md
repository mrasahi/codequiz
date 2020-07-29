# codequiz
Homework03 - Makoto Asahi
# Summary
```
Used bootstrap for layout.
Changed from overwriting existing HTML text to just append a generated list each time.
> Old js renamed to scrapped.js

```
# Current bugs
Clicking multiple times within the 1 sec transition between questions will still run the answerChecks for that question set.

Multiple clicks will still register.

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