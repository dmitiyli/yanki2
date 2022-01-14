const popupLinks = document.querySelectorAll('.popup__link'),
    popupMain = document.querySelector('.popup'),
    closePopup = document.querySelector('.popup__close'),
    animation = document.querySelector('.popap__content'),
    imgView = document.querySelector('.main__category-image .category__img'),
    popupImg = document.querySelector('.popup img')

popupLinks.forEach(item => {
    item.addEventListener('click', function () {
        popupOpen(this)
        popupAnimation(this)
    })
}
)
function popupOpen(el) {
    console.log(el);
    let imageBox = el.closest('.main__category-image').querySelector('.category__img')
    let get = imageBox.getAttribute('src')
    popupImg.setAttribute('src', get)
    popupMain.classList.add('open')
}


closePopup.addEventListener('click', function () {
    popupMain.classList.remove('open')
    animation.classList.remove('animation')

})

function popupAnimation(el) {
    animation.classList.add('animation')
};
// выпадающее меню

let list = document.querySelectorAll('.header__list-link'),
    subList = document.querySelector('.sub__menu');

list.forEach(item => {
    item.addEventListener('click', function () {
        openList(this)
    })
})






function openList(el) {
    let imageBox = el.closest('.header__list-link').querySelector('.sub__menu')
    
    console.log(imageBox);
    imageBox.classList.add('active')
    
}











