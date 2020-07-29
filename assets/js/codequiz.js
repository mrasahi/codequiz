// Question Qurerry
let q0 = {
    question: 'What is my name?',
    choices: ['Quintin', 'Calum', 'Makoto', 'Big Mike'],
    answer: 'Makoto'
}

let q1 = {
    question: 'What is my last name?',
    choices: ['Asahi', 'Quintin', 'Calum', 'Another Mike'],
    answer: 'Asahi'
}

let q2 = {
    question: 'What is 2 + 2',
    choices: ['4', '2', '3', '6',],
    answer: '4'
}

let q3 = {
    question: 'THE ANSWER IS 2',
    choices: ['WRONG 1', 'YEES', 'NOO', 'NOT THIS ONE'],
    answer: 'YEES'
}

// let q = {
//     question: '',
//     choices: [],
//     answer: ''
// }

// Declare variables
let qlist = [q0, q1, q2, q3]
let score = 0
let time = 9
let randomquestion
let randomchoices

// Question Querry randomizer
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

// Placeholder gameover
function resultPage() {
    // Clears answerlist before results show up
    document.getElementById('answerlist').textContent = ''
    document.getElementById('scoreTime').classList.toggle('d-none')
    document.getElementById('q-prompt').textContent = 'Quiz Complete! Here are your results!'
    document.getElementById('mainContent').append('you did it')
    
    console.log('gameover')
}

// Add next randomquestion and push to page
function addq() {
    // Check if questions remain
    if (qlist.length <= 0) {
        console.log('going to results page')
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
        } else {
            document.getElementById(`choice${i}`).classList.add('bg-danger')
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
        time -= 5
        document.getElementById('time').textContent = time
    }
    // Debug what is clicked
    console.log(event.target)
    answerBg()
}

// Answer 1 - 4 clicked
document.addEventListener('click', event => {
    if (event.target.classList.contains('q-btn')) {
        console.log('qbtn clicked')
        answerCheck()
        // After any qbtn clicked, wait 1 sec and run addq
        setTimeout(() => {
            addq()
        }, 1000);
    }
})

// Timer function 1 sec
function timer() {
    let clockStopper = setInterval(() => {
        time--
        document.getElementById('time').textContent = time
        if (time <= 0) {
            // Stop timer and go to results page
            clearInterval(clockStopper)
            resultPage()
        }
    }, 1000);
    console.log('timer started')
}

// Start Button
document.getElementById('start').addEventListener('click', () => {
    console.log('start clicked')
    document.getElementById('start').remove()
    document.getElementById('scoreTime').classList.toggle('d-none')
    document.getElementById('score').textContent = score
    document.getElementById('time').textContent = time
    addq()
    timer()
})

