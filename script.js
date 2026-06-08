const display =document.getElementById('display')
const zeroBtn = document.getElementById('zero-btn')
const oneBtn = document.getElementById('one-btn')
const twoBtn = document.getElementById('two-btn')
const threeBtn = document.getElementById('three-btn')
const fourBtn = document.getElementById('four-btn')
const fiveBtn = document.getElementById('five-btn')
const sixBtn = document.getElementById('six-btn')
const sevenBtn = document.getElementById('seven-btn')
const eightBtn = document.getElementById('eight-btn')
const nineBtn = document.getElementById('nine-btn')
const divBtn = document.getElementById('divide-btn')
const mulBtn = document.getElementById('multiply-btn')
const addBtn = document.getElementById('plus-btn')
const subBtn = document.getElementById('minus-btn')
const equBtn = document.getElementById('equal-btn')
const clearBtn = document.getElementById('clear-btn')


let expression =""

zeroBtn.addEventListener('click', ()=>{
    expression += '0'
    display.textContent = expression
})

oneBtn.addEventListener('click', ()=>{
    expression += '1'
    display.textContent = expression
})

twoBtn.addEventListener('click', ()=>{
    expression += '2'
    display.textContent = expression
})

threeBtn.addEventListener('click', ()=>{
    expression += '3'
    display.textContent = expression
})

fourBtn.addEventListener('click', ()=>{
    expression += '4'
    display.textContent = expression
})

fiveBtn.addEventListener('click', ()=>{
    expression += '5'
    display.textContent = expression
})

sixBtn.addEventListener('click', ()=>{
    expression += '6'
    display.textContent = expression
})

sevenBtn.addEventListener('click', ()=>{
    expression += '7'
    display.textContent = expression
})

eightBtn.addEventListener('click', ()=>{
    expression += '8'
    display.textContent = expression
})

nineBtn.addEventListener('click', ()=>{
    expression += '9'
    display.textContent = expression
})

mulBtn.addEventListener('click', ()=>{
    expression += '*'
    display.textContent = expression
})

divBtn.addEventListener('click', ()=>{
    expression += '/'
    display.textContent = expression
})

addBtn.addEventListener('click', ()=>{
    expression += '+'
    display.textContent = expression
})

subBtn.addEventListener('click', ()=>{
    expression += '-'
    display.textContent = expression
})

equBtn.addEventListener('click', ()=>{
    const result = eval(expression)

    expression = result.toString()
    display.textContent = expression
})

clearBtn.addEventListener('click', ()=>{
    expression = ''
    display.textContent = expression
})

console.log(eval(expression))

