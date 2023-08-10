const cartProducts = document.getElementById("cart-products");
const checkoutButton = document.getElementById("checkout-button");


var cartItems = JSON.parse(localStorage.getItem("cart")) || [];


const xhr = new XMLHttpRequest();
xhr.open("GET", "../pruducts.json", true);
xhr.onload = function () {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const products = response.products;

        cartItems.forEach(function (cartItemId) {
            const product = products.find(function (p) {
                return p.id === cartItemId;
            });

           
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <img src="${product.img}" alt="${product.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Category: ${product.category}</p>
                </div>
            `;

            cartProducts.appendChild(cartItem);
        });
    } else {
        console.error("Error loading products.");
    }
};
xhr.send();

var checkoutBottun = document.getElementById('checkout-button');

checkoutBottun.addEventListener('click',function(){
    window.location.href = "pay.html";
})

