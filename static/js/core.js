document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
};


const anim = document.querySelectorAll('.animation_product');
if (anim.length > 0) {
    window.addEventListener('scroll', animScroll);
    function animScroll(params) {
        for (let index = 0; index <anim.length; index++) {
             const animItem = anim[index];
             const animItemHeight = animItem.offsetHeight;
             const animItemOffset = offset(animItem).top;
             const animStart = 4;

             let animItemPoint = window.innerHeight - animItemHeight/animStart;

             if (animItemHeight > window.innerHeight){
                 animItemPoint = window.innerHeight - window.innerHeight / animStart
             }

             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                 animItem.classList.add('_active');
             }
         }
    }
    function offset(el) {
         const rect = el.getBoundingClientRect(),
             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

     }
}