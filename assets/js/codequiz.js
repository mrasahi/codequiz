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
let time = 90
let randomquestion
let randomanswerlist = []

// Question Querry randomizer
function qrandom() {
    let i = [Math.floor(Math.random() * qlist.length)]
    randomquestion = qlist[i]
    qlist.splice(i, 1)
    // randomanswers()
    console.log(qlist)
}

// DOESNT WORK
// Randomize answer index function
// function randomanswers() {
//     for (let i = randomquestion.choices.length; i > 0; i--) {
//         // let r = Math.floor(Math.random() * randomquestion.choices.length)
//         // randomanswerlist.push(randomquestion.choices[r])
//         // randomquestion.choices = randomquestion.choices.splice(r, 1)
//         let r = Math.floor(Math.random() * randomquestion.length)
//         let addedthingy = randomquestion.choices[r]
//         randomanswerlist.push(addedthingy)
//         randomquestion.choices = randomquestion.choices.splice(r, 1)
//     }
//     console.log(randomanswerlist)
//     randomquestion.choices = randomanswerlist
//     randomanswerlist = []
// }

// I need to add datasets to each answer
// Display new question and answers
function addq() {
    // if no more questions, return 
    if (qlist.length <= 0) {
        console.log('no u')
        return
        // endgame functin goes here
    }
    qrandom()
    document.getElementById('q-prompt').textContent = randomquestion.question
    for (let i = 0; i < randomquestion.choices.length; i++) {
        document.getElementById(`answer-${i}`).textContent = randomquestion.choices[i]
    }
}


// Change .textContent to check for dataset instead
// Checks if answer is correct
function answerCheck() {
    if (event.target.textContent === randomquestion.answer) {
        console.log('correct')
        score += 10
    } else {
        console.log('incorrect')
    }
}


// This could be cleaned up better
// Answer 1 - 4 clicked
document.addEventListener('click', event => {
    if (event.target.classList.contains('q-btn')) {
        if (event.target === document.getElementById('answer-1')) {
            console.log('this is answer 1')
            answerCheck()
        }
        if (event.target === document.getElementById('answer-2')) {
            console.log('this is answer 2')
            answerCheck()
        }
        if (event.target === document.getElementById('answer-3')) {
            console.log('this is answer 3')
            answerCheck()
        }
        if (event.target === document.getElementById('answer-4')) {
            console.log('this is answer 4')
            answerCheck()
        }
        addq()
    } else { }
})

// Start Button
document.getElementById('start').addEventListener('click', event => {
    console.log('start clicked')
    document.getElementById('start').remove()
    document.getElementById('answerlist').classList.remove('d-none')
    addq()
})