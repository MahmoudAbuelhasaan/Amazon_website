const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps');
xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
xhr.setRequestHeader('X-RapidAPI-Host', 'amazon-product-reviews-keywords.p.rapidapi.com');

xhr.send(data)