import React from 'react';
import { Button } from 'react-bootstrap';

const ViewCart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <Button variant="danger" onClick={() => removeFromCart(item)}>Remove</Button>
              </div>
            </div>
          ))}
          <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
        </>
      )}
    </div>
  );
};

export default ViewCart;
