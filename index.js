const $ = (element) => document.querySelector(element)
const $$ = (element) => document.querySelectorAll(element)

const buttons = $$("button")
const formCards = [...$$('[data-step]')]

let currentStep = formCards.findIndex((el)=>(
  el.classList.contains('active')
))

if (currentStep < 0) {
  currentStep = 0
  animateOnActive()
}

console.log(formCards[0])
buttons.forEach((el)=>{
  el.addEventListener('click', (e)=>{
    if(currentStep === undefined) return;
    const className = e.target.getAttribute("class")
    if(className === 'next') currentStep++
    else currentStep--
    animateOnActive(currentStep)
  })
})

formCards.forEach((formCard)=>{
  formCard.addEventListener('animationend',(e)=>{
    formCards[currentStep].classList.remove('hide')
    e.target.classList.toggle('hide', !e.target.classList.contains('active')) 
  })
})

function animateOnActive(){
  formCards.forEach((formCard,idx)=>{
    formCard.classList.toggle('active', idx === currentStep)
    console.log(currentStep)
  })
}