import {questions} from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currnetNumber = 0
let mbtiNum1 = 0
let mbtiNum2 = 0
let mbtiNum3 = 0
let mbtiNum4 = 0
let mbti = ''

function renderQuestion(){
    const question = questions[currnetNumber]
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    choice1El.innerHTML = question.choices[0].text
    choice2El.innerHTML = question.choices[1].text
    progressValueEl.style.width = (currnetNumber + 1) * 8.3 + '%'
}

function nextQuestion(choiceNumber){
    if(currnetNumber === questions.length-1){
        showResultPage()
        return
    }
    const question = questions[currnetNumber]
   
    mbti =  question.choices[choiceNumber].value

    if(mbti === 'e'){
        mbtiNum1 ++
    }else if(mbti === 'n'){
        mbtiNum2 ++
    }else if(mbti === 'f'){
        mbtiNum3 ++
    }else if(mbti === 'p'){
        mbtiNum4 ++
    }
    console.log(mbti)
    mbti = ''

    currnetNumber++
    renderQuestion()
}
function showResultPage(){
    if(mbtiNum1 < 2 ){
        mbti+='i'
    }else{
        mbti+='e'
    }

    if(mbtiNum2 < 2 ){
        mbti+='s'
    }else{
        mbti+='n'
    }

    if(mbtiNum3 < 2 ){
        mbti+='t'
    }else{
        mbti+='f'
    }

    if(mbtiNum4 < 2 ){
        mbti+='j'
    }else{
        mbti+='p'
    }
   

    console.log(mbti)
    location.href = 'results.html?mbti=' + mbti //쿼리스트링
}

choice1El.addEventListener('click',function(){
    nextQuestion(0)
})
choice2El.addEventListener('click',function(){
    nextQuestion(1)
})

renderQuestion()
