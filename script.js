const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const cross = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (cross) {
    cross.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let cartIcon = document.querySelector('#lg-bag');
let cart = document.querySelector('.cart-details');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add("active");
}
closeCart.onclick = () => {
    cart.classList.remove("active");
}
function removeCartItem(event) {
    var btnClicked = event.target
    btnClicked.parentElement.remove()
    updateTotal();
}
function updateTotal() {
    var cartBoxes = document.getElementsByClassName('cart-box')
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceEle = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceEle.innerText.replace("Rs. ", ""));
        var quantity = quantityElement.value
        total = total + (price * quantity);

        document.getElementsByClassName('total-price')[0].innerText = "Rs. " + total;
    }
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal();
}
function ready() {
    var removeCartBtn = document.getElementsByClassName('cart-remove');
    console.log(removeCartBtn)
    for (var i = 0; i < removeCartBtn.length; i++) {
        var button = removeCartBtn[i];
        button.addEventListener('click', removeCartItem)
    }
    var quantityInp = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInp.length; i++) {
        var input = quantityInp[i];
        input.addEventListener('change', quantityChanged);
    }
}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready();
}
