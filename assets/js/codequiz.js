// Question List
let q0 = {
    question: 'What is my first name?',
    choices: ['Quintin', 'Calum', 'Makoto', 'Big Mike'],
    answer: 'Makoto'
}

let q1 = {
    question: 'What is my last name?',
    choices: ['Asahi', 'Quintin', 'Calum', 'Small Mike'],
    answer: 'Asahi'
}

let q2 = {
    question: 'What is 2 + 2',
    choices: ['4', '2', '3', '6',],
    answer: '4'
}

let q3 = {
    question: 'What is the default page usually called in HTML?',
    choices: ['index.html', 'default.html', 'html.html', 'html'],
    answer: 'index.html'
}

let q4 = {
    question: 'In CSS, which of the following is a styling library?',
    choices: ['jQuery', 'Bootstrap', 'index.html', 'app.js'],
    answer: 'Bootstrap'
}

let q5 = {
    question: 'In CSS, what does " * " affect when styling?',
    choices: ['none', 'following', 'all', 'only'],
    answer: 'all'
}

let q6 = {
    question: 'In HTML, how high in number do the header tags go?',
    choices: ['h10', 'h4', 'h5', 'h6'],
    answer: 'h6'
}

let q7 = {
    question: 'In Javascript, how is "get element by id" camel cased?',
    choices: ['getElementById', 'Getelementbyid', 'GETELEMENTBYID', 'getelementbyid'],
    answer: 'getElementById'
}

let q8 = {
    question: 'In HTML, where is the script tag usually located?',
    choices: ['inside header', 'inside style', 'top of body', 'bottom of body'],
    answer: 'bottom of body'
}

let q9 = {
    question: 'In Javascript, what does " ! " mean?',
    choices: ['explosion', 'not', 'strong', 'bold'],
    answer: 'not'
}


// let q = {
//     question: '',
//     choices: ['', '', '', ''],
//     answer: ''
// }


// Declare variables
let qlist = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9]
let score = 0
let time = 90
let randomquestion
let randomchoices
let resultPageReached = false
// Grabs leaderboard in localStorage. Defaults to empty array
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []

// Question List randomizer
function qrandom() {
    let i = [Math.floor(Math.random() * qlist.length)]
    randomquestion = qlist[i]
    qlist.splice(i, 1)
    console.log(qlist)
    // Index Shuffler
    let shuffledIndex = []
    for (let i = 0; i < randomquestion.choices.length; i) {
        let r = Math.floor(Math.random() * randomquestion.choices.length)
        shuffledIndex.push(randomquestion.choices[r])
        randomquestion.choices.splice(r, 1)
    }
    randomquestion.choices = shuffledIndex
}

// Results Page render
function resultPage() {
    resultPageReached = true
    document.getElementById('mainContent').innerHTML = `
            <h1 class="text-center">Quiz Complete!</h1>
        <p class="lead font-weight-bold">Your score is: ${score}</p>
        <p class="lead font-weight-bold">Log your high score in the form below</p>
        <hr>
        <form>
            <div class="form-group">
                <label for="username">Name:</label>
                <input type="text" class="form-control my-3" id="username" placeholder="Your name...">
                <button id="submitScore" class="btn btn-lg btn-primary">Submit</button>
            </div>
        </form>
        <br>
        <h2 class="text-center">Leaderboard</h2>
        <hr>
        <ol class="list-group" id="highscore">
        
        </ol>
`
    console.log('gameover')
}

// Submit Highscore
document.addEventListener('click', event => {
    // prevent default HTML form thingy
    event.preventDefault()
    if (event.target.id === 'submitScore') {
        console.log('score is submit ooooo')
        // Make username and score into an object and push into leaderboard
        leaderboard.push({
            username: document.getElementById('username').value,
            score: score
        })
        console.log(leaderboard)
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
        // sort from highest to lowest score
        leaderboard.sort((a, b) => {
            return b.score - a.score
        })
        for (let i = 0; i < leaderboard.length; i++) {
            let ranker = document.createElement('li')
            ranker.className = 'list-group-item'
            ranker.innerHTML = `
              <span class="font-weight-bold">${i + 1}. </span>
              ${leaderboard[i].username}: ${leaderboard[i].score}
            `
            document.getElementById('highscore').append(ranker)
        }
    }
    // Debug checker
    // console.log(event.target)
})

// Add next randomquestion and push to page
function addq() {
    // Check if questions remain
    if (qlist.length <= 0) {
        console.log('going to results page')
        resultPage()
        return
    }
    if (time <= 0) {
        clearInterval(time)
        resultPage()
        return
    }
    // qrandom prepares the next random question to use
    qrandom()
    // Writes qrandom prompt into page and resets the answerlist
    document.getElementById('q-prompt').textContent = randomquestion.question
    document.getElementById('answerlist').textContent = ''
    // Loop to create li to push onto page.
    for (let i = 0; i < randomquestion.choices.length; i++) {
        let pageChoice = document.createElement('li')
        pageChoice.className = 'list-group-item q-btn'
        pageChoice.id = `choice${i}`
        pageChoice.dataset.choice = randomquestion.choices[i]
        pageChoice.textContent = randomquestion.choices[i]
        document.getElementById('answerlist').append(pageChoice)
    }
}

// Answer bg change
function answerBg() {
    for (let i = 0; i < randomquestion.choices.length; i++) {
        if (document.getElementById(`choice${i}`).dataset.choice === randomquestion.answer) {
            document.getElementById(`choice${i}`).classList.add('bg-success')
            document.getElementById(`choice${i}`).classList.add('disabled')
        } else {
            document.getElementById(`choice${i}`).classList.add('bg-danger')
            document.getElementById(`choice${i}`).classList.add('disabled')
        }
    }
}

// Answer Check function
function answerCheck() {
    if (event.target.dataset.choice === randomquestion.answer) {
        console.log('correct')
        score += 10
        document.getElementById('score').textContent = score
    } else {
        console.log('incorrect')
        time = time - 5
        document.getElementById('time').textContent = time
    }
    // Debug what is clicked
    console.log(event.target)
    answerBg()
}

// Answer 1 - 4 clicked
document.addEventListener('click', event => {
    if (event.target.classList.contains('q-btn')) {
        answerCheck()
        // After any qbtn clicked, wait 1 sec and run addq
        setTimeout(() => {
            addq()
        }, 1000);
    }
})


clockStopper = setInterval(() => {
    if (resultPageReached !== true) {
        console.log(time)
        time--
        document.getElementById('time').textContent = time

        if (time <= 0) {
            clearInterval(clockStopper)
            resultPage()
        }
    }
}, 1000)

// Start Button
document.getElementById('start').addEventListener('click', () => {
    console.log('start clicked')
    document.getElementById('start').remove()
    document.getElementById('scoreTime').classList.toggle('d-none')
    document.getElementById('score').textContent = score
    document.getElementById('time').textContent = time
    addq()
    clockStopper
})

