document.querySelector('.burger__btn').addEventListener( 'click',  (e) => {
    e.preventDefault()
 document.querySelector('.media__menu').classList.toggle('burger')
 document.querySelector('.burger__btn').classList.toggle('burger__btn-active')
})