import React from 'react';

function CartSummary({ cart }) {
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

export default CartSummary;