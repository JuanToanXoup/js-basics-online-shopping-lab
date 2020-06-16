var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = (Math.floor(Math.random() * 100) + 1);
  let obj = {
    itemName: `${item}`,
    itemPrice: price
  };
  cart.push(obj);
  return (`${obj.itemName} has been added to your cart.`);
}

function viewCart() {
  if(cart.length == 0) {
    var intercom = "Your shopping cart is empty."
    return intercom;
  } else {
    var intercom = `In your cart, you have `;
    var i = 0;
    if(cart.length>1) {
    for (i=0;i<cart.length-1;i++) {
    intercom += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  intercom += `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
} else {intercom += `${cart[0].itemName} at $${cart[0].itemPrice}.`
}
return intercom;
}
}

function total() {
  var i=0;
  var total = 0;
  for(i=0;i<cart.length;i++) {
    total += cart[i].itemPrice
  }
  return total;
}

function removeFromCart(item) {
  var intercom = "Announcement";
  for (var i=0;i<cart.length;i++) {
    if (cart[i].itemName == item) {
      cart.splice(i,1);
      return cart;
      }
    }
    intercom = "That item is not in your cart."
    return intercom;
  }

function placeOrder(cardNumber) {
  if(cardNumber == null) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var intercom = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    setCart([]);
    return intercom;
  }
}
