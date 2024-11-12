// Initialize cart and total amount
let cart = [];
let totalAmount = 0;

// Function to add an item to the cart
function addToCart(item, price) {
    cart.push({ item, price });
    totalAmount += price;
    alert(item + " added to your cart!");
    updateTotalAmount();
}

// Function to update and display the total amount
function updateTotalAmount() {
    const totalAmountDisplay = document.getElementById("total-amount");
    totalAmountDisplay.textContent = "Total Amount: Rs." + totalAmount;
}
