// Highlight current page
let page = window.location.pathname.split("/").pop();

if(page === "index.html") document.getElementById("home")?.classList.add("active");
if(page === "products.html") document.getElementById("products")?.classList.add("active");
if(page === "cart.html") document.getElementById("cart")?.classList.add("active");
if(page === "wishlist.html") document.getElementById("wishlist")?.classList.add("active");
if(page === "about.html") document.getElementById("about")?.classList.add("active");
if(page === "contact.html") document.getElementById("contact")?.classList.add("active");


// Login check
window.onload = function(){
    let user = localStorage.getItem("user");

    if(user){
        document.getElementById("loginLink")?.style.display = "none";
        document.getElementById("signupLink")?.style.display = "none";
        document.getElementById("logoutLink")?.style.display = "inline";
    }
}


// Logout
function logout(){
    localStorage.removeItem("user");
    alert("Logged out successfully");
    window.location.href = "index.html";
}


// Add to Cart
function addToCart(product){
    let cart = localStorage.getItem("cart") || "";
    cart += product + ", ";
    localStorage.setItem("cart", cart);
    alert(product + " added to cart");
}


// Add to Wishlist
function addToWishlist(product){
    let wish = localStorage.getItem("wishlist") || "";
    wish += product + ", ";
    localStorage.setItem("wishlist", wish);
    alert(product + " added to wishlist");
}