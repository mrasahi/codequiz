# Bugs found

~~Clicking multiple times within the 1 sec transition between questions will still run the answerChecks from that question set.~~

~~Multiple clicks will still register in the question choices.~~

~~Possible fix is to set a variable called `isActive` with a boolean that switches when a button is clicked.
When switched, it will add `disabled` to class of clickable buttons.
`isActive` will change booleans again after the 1 sec setInterval.~~

**Adding the `disabled` class to the bg change worked!!!**

~~Answering a question as the time hits below 1 will put up a new question~~

> Made another check for time in addq.

~~If the quiz is finished before the timer, the resultsPage will wipe and redisplay when time is up.~~

> ResultPageReached variable added to check and stop the timer

console.log are remained, ~~from laziness~~ for `debugging` 

CSS and Layout is lacking...