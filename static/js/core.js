document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
};


//SHOW MORE PRODUCTS BUTTON

mybutton = document.getElementById("myBtn");

function showMoreProducts() {
    //Scrolling down
    document.body.scrollTop +=  100; // For Safari
    document.documentElement.scrollTop += 100; // For Chrome, Firefox, IE and Opera

    let btn = document.getElementById('showMoreItems');

    let forEach = Array.prototype.forEach;
    let className = "products";

    forEach.call(document.querySelectorAll("." + className), function(node) {
        node.classList.remove('.none');
    });
}
