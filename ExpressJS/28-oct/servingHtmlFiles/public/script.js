let a = document.getElementsByClassName('.cont')
let div = document.querySelectorAll('div')
let btn = document.getElementById('btn')
let num = document.getElementById('num')
console.log(div)

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    num.innerHTML = 'Hello'

})

