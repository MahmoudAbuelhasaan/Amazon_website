// Get the product ID from URL parameters
var urlParams = new URLSearchParams(window.location.search);
var productId =parseInt( urlParams.get("id"));

// Make an XMLHttpRequest to fetch product details
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

      // Populate product details on the page
      var productImage = document.getElementById("product_img");
      var productTitle = document.querySelector(".product-title");
       var product_desc = document.getElementById('product_desc')
      // ... (other elements)

      // Populate the fetched product data into the page elements

      productImage.src = product.img;
      productImage.alt = product.name;
      productTitle.textContent = product.name;
      product_desc.textContent = product.description;
      // ... (populate other elements)
    } else {
      console.error("Failed to fetch product data.");
    }
  }
};
xhr.send();