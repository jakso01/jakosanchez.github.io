const alternatives = [
  {text:"", images:"https://lh4.googleusercontent.com/y4HCGYcagIzP6R1f6CGiR2uL0h9wDtFKPVBgTEc3oU5IiFqnpzYFRtC5TlwRvQT-oMx4F3G2pzGl3NJ7KjdeSmGsVvyb6ytSkHoAfYi21GF_xE9UWREazIQ-49QyrpKF-A=w128"},
  {text:"I Promise you it Will be Unforgettable", images:"cat-03.gif"},
  {text:"Think Again", images:"cat-04.gif"},
  {text:"Come on, Dare to Say Yes.", images:"cat-05.gif"},
  {text:"Don't Let Fear Stop You", images:"cat-01.gif"},
]
const ohyes = {text:"I Knew You Would Accept I Love You", images:"cat-yes.gif"}
const cat = document.querySelector('.images img')  // Ahora selecciona la imagen correctamente
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Si"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})
