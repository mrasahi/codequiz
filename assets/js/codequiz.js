// Question Qurerry

let q0 = {
    question: 'What is my name?',
    choice1: 'Quintin',
    choice2: 'Calum',
    choice3: 'Makoto',
    choice4: 'Big Mike',
    answer: 'Makoto'
}

let q1 = {
    question: 'What is my last name?',
    choice1: 'Asahi',
    choice2: 'Quintin',
    choice3: 'Calum',
    choice4: 'Another Mike',
    answer: 'Asahi',
}

let q2 = {
    question: 'What is 2 + 2',
    choice1: '4',
    choice2: '2',
    choice3: '3',
    choice4: '6',
    answer: '4',
}

let q3 = {
    question: 'THE ANSWER IS 2',
    choice1: 'WRONG 1',
    choice2: 'YEES',
    choice3: 'NOO',
    choice4: 'NOT THIS ONE',
    answer: 'YEES',
}

// let q = {
//     question: '',
//     choice1: '',
//     choice2: '',
//     choice3: '',
//     choice4: '',
//     answer: '',
// }


// Declare variables
let qlist = [q0, q1, q2, q3]
let score = 0
let time = 90
let randomquestion

// Question Querry randomizer
function qrandom() {
    let i = [Math.floor(Math.random() * qlist.length)]
    randomquestion = qlist[i]
    qlist.splice(i, 1)
    console.log(qlist)
}

// I need to add datasets to each answer
// Display new question and answers
function addq() {
    // if no more questions, return 
    if (qlist.length === 0) {
        console.log('no u')
        return
    }
    qrandom()
    document.getElementById('q-prompt').textContent = randomquestion.question
    document.getElementById('answer-1').textContent = randomquestion.choice1
    document.getElementById('answer-2').textContent = randomquestion.choice2
    document.getElementById('answer-3').textContent = randomquestion.choice3
    document.getElementById('answer-4').textContent = randomquestion.choice4
}


// Change .textContent to check for dataset instead
// Checks if answer is correct
function answerCheck() {
    if (event.target.textContent === randomquestion.answer) {
        console.log('correct')
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