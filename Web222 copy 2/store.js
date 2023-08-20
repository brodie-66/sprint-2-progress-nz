window.onload = () => {
if(document.readyState == 'loading'){
    document.addEventListener('DCOMContentLoaded', ready)  
} else {
    ready()
}
	
function ready() {
	  var removeCartItemButtons = document.getElementsByClassName('line')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
	  var quantityInputs = document.getElementsByClassName('add')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
	 var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

---------------------------------------------------
	
const removeButtons = document.getElementsByClassName("removeButton");

// Add click event listeners to each "removeButton"
for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function() {
        // Find the parent div containing both the line and the button
        const parentDiv = this.parentElement;

        // Remove the entire div element
        if (parentDiv) {
            parentDiv.remove();
        }
    });
}

	
-----------------------------------------------------
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}