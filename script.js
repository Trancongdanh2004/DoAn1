const addressbtn = document.querySelector('#address-form')
const addresclose = document.querySelector('#address-close')
console.log(addresclose)
addressbtn.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "flex"
})
addresclose.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "none"
})
