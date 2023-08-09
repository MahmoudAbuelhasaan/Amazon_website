var urlParams = new URLSearchParams(window.location.search);
var productId = parseInt(urlParams.get("id"));

var addToCartBtn = document.getElementById("add-to-cart-button");

addToCartBtn.addEventListener("click", function () {
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  cartItems.push(productId);

  localStorage.setItem("cart", JSON.stringify(cartItems));
});

var xhr = new XMLHttpRequest();
var url = "./pruducts.json";
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var product = data.products.find(function (p) {
        return p.id === productId;
      });

      var productImage = document.getElementById("product_img");
      var productTitle = document.querySelector(".product-title");
      var product_desc = document.getElementById("product_desc");

      productImage.src = product.img;
      productImage.alt = product.name;
      productTitle.textContent = product.name;
      product_desc.textContent = product.description;
    } else {
      console.error("Failed to fetch product data.");
    }
  }
};
xhr.send();
