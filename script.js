const alternatives = [
  {text:"", images:"https://lh4.googleusercontent.com/y4HCGYcagIzP6R1f6CGiR2uL0h9wDtFKPVBgTEc3oU5IiFqnpzYFRtC5TlwRvQT-oMx4F3G2pzGl3NJ7KjdeSmGsVvyb6ytSkHoAfYi21GF_xE9UWREazIQ-49QyrpKF-A=w1280"},
  {text:"I Promise you it Will be Unforgettable", images:"https://lh5.googleusercontent.com/lsIv-po9vqWATp6YT0qUYIRuNKPQocIAxcR_-Qkbg5QOzk6vOUk4vDPnLnmRV2sFROJn9yrQlqX9xmGRTSRWCmDHjcKSdBwI5Gni_Vr3mMKQDtJZFTfDCkXuyXHz2s4RAA=w1280"},
  {text:"Think Again", images:"https://lh5.googleusercontent.com/liuCVKrAQLrcd7W9TEuujjX-Mz4p6EcSDEbCM1lw_kpk0q1k6zEW3jiXHybhYu7p1EqAsB5JAKFq0_Dv42rSL4yacDmnihxNjZa67VO6jxRVIwVNLU_CH28OfQf2DTZScg=w1280"},
  {text:"Come on, Dare to Say Yes.", images:"https://lh5.googleusercontent.com/EBbvZimLVRIK_ax2zsto19RADHwjKbhGuw8LkFI-a3pQPtVA0fy9HwKxKG_vLg4UPCNqip1Euy0P1KvpNt1xPfzAzKCJX8dR3LUA8TE_fvOCraFdQI3n7vxAL5gomTMkzg=w1280"},
  {text:"Don't Let Fear Stop You", images:"https://lh4.googleusercontent.com/y4HCGYcagIzP6R1f6CGiR2uL0h9wDtFKPVBgTEc3oU5IiFqnpzYFRtC5TlwRvQT-oMx4F3G2pzGl3NJ7KjdeSmGsVvyb6ytSkHoAfYi21GF_xE9UWREazIQ-49QyrpKF-A=w1280"},
]
const ohyes = {text:"I Knew You Would Accept", images:"https://lh6.googleusercontent.com/6z1Ed_s1b05lOZO89q8-KhV34j4ceVXlcnLA3czuuGvayxYRUNlYPKvGvWSwKR3Vz-36BzDhcOyILHy0mtyyfl1MdZqWkY4MGj9pIQjcy8vECZs_p6U-C_qdLqMMrhrb4w=w1280"}
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
