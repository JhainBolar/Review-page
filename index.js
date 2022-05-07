const btn = document.querySelector(".btn-btn")
const container1 = document.querySelector('.container')
const container2 = document.querySelector('.container-2')
const button1 = document.querySelector(".button-1")
const button2 = document.querySelector(".button-2")
const button3 = document.querySelector(".button-3")
const button4 = document.querySelector(".button-4")
const button5 = document.querySelector(".button-5")
const num = document.querySelector('.number')

button1.addEventListener('click', ()=>{
    num.innerHTML = "1"
    button1.style.backgroundColor = "#FB7413"
})
button2.addEventListener('click', ()=>{
    num.innerHTML = "2"
    button1.style.backgroundColor = "#FB7413"
    button2.style.backgroundColor = "#FB7413"
})
button3.addEventListener('click', ()=>{
    num.innerHTML = "3"
    button1.style.backgroundColor = "#FB7413"
    button2.style.backgroundColor = "#FB7413"
    button3.style.backgroundColor = "#FB7413"
})
button4.addEventListener('click', ()=>{
    num.innerHTML = "4"
    button1.style.backgroundColor = "#FB7413"
    button2.style.backgroundColor = "#FB7413"
    button3.style.backgroundColor = "#FB7413"
    button4.style.backgroundColor = "#FB7413"
})
button5.addEventListener('click', ()=>{
    num.innerHTML = "5"
    button1.style.backgroundColor = "#FB7413"
    button2.style.backgroundColor = "#FB7413"
    button3.style.backgroundColor = "#FB7413"
    button4.style.backgroundColor = "#FB7413"
    button5.style.backgroundColor = "#FB7413"
})


btn.addEventListener('click', ()=>{
    container1.style.display = "none" 
    container2.style.display = "block"

})
