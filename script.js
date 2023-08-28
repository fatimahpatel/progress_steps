const progress = document.getElementById('progress');
const prev = document.getElementById('previous');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// this represents whichever circle is active
let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    update()
})

prev.addEventListener('click', ()=>{
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }

    update()
})

//when update function is called
//it will loop through the circles NodeList
//for each object, it would pass through the arrow function
//if the index of the object is less than currentActive (which is incremented) before update()
//it would add update the object to active class
function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    console.log(actives.length/circles.length)
}