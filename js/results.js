import { results, mbtis } from "./data.js"

const mbti = new URLSearchParams(location.search).get('mbti')
//console.log(mbti)
const result = results[mbtis[mbti]];
//console.log(result)
const titleEl = document.querySelector('.page-title')
const chracterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const workEls = document.querySelector('.work')
const lecture1El = document.querySelector('.lecture1')
const lecture2El = document.querySelector('.lecture2')
const lectureImg1El = document.querySelector('.lecture1 img')
const lectureImg2El = document.querySelector('.lecture2 img')

titleEl.innerHTML = result.title
chracterEl.src = result.character
boxEls.forEach(function(boxEl, index){
    boxEl.innerHTML = result.results[index]
})

jobEls.forEach(function(jobEl, index) {
    jobEl.innerHTML = result.jobs[index]})

workEls.innerHTML = result.work
lecture1El.href = result.lectureUrl
lecture2El.href = 'https://tally.so/r/mepkae'
lectureImg1El.src = '../images/community.png'
lectureImg2El.src = '../images/newsletter.png'