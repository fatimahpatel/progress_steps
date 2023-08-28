const progress = document.getElementById('progress');
const prev = document.getElementById('previous');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

// this represents whichever circle is active
let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++;
    console.log(currentActive)
})