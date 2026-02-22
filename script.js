// Get cart from localStorage or create empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Add to cart function
function addToCart(productName, price, image) {

    price = Number(price); // 🔥 STRING → NUMBER

    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.qty += 1;
        existingProduct.totalPrice += price;
    } else {
        cart.push({
            name: productName,
            price: price,          // number
            image: image,
            qty: 1,                // number
            totalPrice: price      // number
        });
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart 🛒");
}