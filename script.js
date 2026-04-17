
let cart = 0;

function addToCart() {
    cart++;
    localStorage.setItem("cartCount", cart);
    updateCart();
    alert("Item added to cart!");
}

function updateCart() {
    let count = localStorage.getItem("cartCount") || 0;
    let cartDisplay = document.getElementById("cart-count");

    if (cartDisplay) {
        cartDisplay.innerText = count;
    }
}

function filterProducts(category) {
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (category === "all") {
            product.style.display = "block";
        } else {
            product.style.display =
                product.classList.contains(category)
                ? "block"
                : "none";
        }
    });
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("message").innerText =
        "Thank you! We will contact you shortly.";
}

window.onload = updateCart;



