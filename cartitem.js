var notice = document.getElementById('notice');
var cartCountElement = document.querySelector('.cart-icon span');
var cartTotal = 0;

//  cart count with default quantities
document.querySelectorAll('.qty span, .qty2 span').forEach(item => {
    cartTotal += Number(item.innerText);
});
cartCountElement.innerText = cartTotal;

// Decrease count
function decreaseCount(countItem1) {
    var cartItem = document.getElementById(countItem1);
    var count = Number(cartItem.innerText);

    if (count === 1) {
        notice.innerText = "Don't want to buy☺️???";
        setTimeout(() => notice.innerText = '', 3000);
        return;
    }
    count--;
    cartItem.innerText = count;
    cartTotal--;
    cartCountElement.innerText = cartTotal;
}

// Increase count
function increaseCount(countItem1) {
    var cartItem = document.getElementById(countItem1);
    var count = Number(cartItem.innerText);

    if (count === 5) {
        notice.innerText = "Looks like you have a lot of money to spend😊!!!";
        setTimeout(() => notice.innerText = '', 3000);
        return;
    }
    count++;
    cartItem.innerText = count;
    cartTotal++;
    cartCountElement.innerText = cartTotal;
}

console.log('Successfully done');