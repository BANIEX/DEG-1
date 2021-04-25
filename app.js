function navSlide() {
    
const parallel = document.querySelector('.parallel');//looks for the class parallel
const nav = document.querySelector('.nav-links');//looks for the class nav-links




parallel.addEventListener('click',() => {
    parallel.classList.toggle('toggle');//listens for the parallel to be clicked and then toggle between the class parallel and the toggle class
});

parallel.addEventListener('click',() => {
    nav.classList.toggle('nav-active');//listens for the parallel to be clicked and then toggle between the class and the nav-active class
});






}   

navSlide();//calls the navSlide function

