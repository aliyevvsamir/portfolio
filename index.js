var currentIndex = 1;
displaySlides(currentIndex);

let previous = document.querySelector(".previous-btn")
let next = document.querySelector(".next-btn")


setInterval(function C (){
    console.log("asdfff");
    currentIndex ++;
    displaySlides(currentIndex)


}, 3000)


previous.addEventListener("click", function A(){
    currentIndex--;
    displaySlides(currentIndex)
});
next.addEventListener("click", function B(){
    currentIndex++;
    displaySlides(currentIndex)

})



function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("images-area");
    if (num > slides.length){
         currentIndex = 1
     }
    if (num < 1) { 
        currentIndex = slides.length
    }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}