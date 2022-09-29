//grabbing elements 
const colorPatlette = document.querySelector('.color-picker-container')
const colorInput = document.querySelector('.colorInput')

colorPatlette.addEventListener('click', () =>{
    const colorInput = document.querySelector('.colorInput').click()
    colorInput.classList.add('show')
    // console.log('clicked')
    // if (getComputedStyle(colorInput).display === 'none') {
    //     colorInput.style.display = 'block'
    // }else{
    //     colorInput.style.display = 'none'
    // }
    // const colorInput = document.querySelector('.colorInput').click()
})


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}