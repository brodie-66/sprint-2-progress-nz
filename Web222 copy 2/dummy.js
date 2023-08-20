document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = document.querySelector('#cart ul');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const productDiv = event.target.parentElement;
        const productName = productDiv.querySelector('h3').textContent;
        const productImage = productDiv.querySelector('img').src;
        const productPrice = productDiv.querySelector('p').textContent;

        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${productImage}" alt="${productName}">
            <span>${productName} - ${productPrice}</span>
            <input type="number" min="1" value="1">
            <button class="remove-button">Remove from Cart</button>
        `;

        const removeButton = cartItem.querySelector('.remove-button');
        removeButton.addEventListener('click', removeCartItem);

        cart.appendChild(cartItem);
    }

    function removeCartItem(event) {
        const cartItem = event.target.parentElement;
        cart.removeChild(cartItem);
    }
});
