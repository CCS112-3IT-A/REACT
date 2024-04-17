import React, { useState } from 'react';
import Products from './ProductInformation';
import AddToCart from './AddToCart';

function Product({ addToCart }) {
  const [products] = useState([
    { name: 'Electric Toothbrush', id: 1, price: 1000, description: 'Motorized toothbrush'},
    { name: 'Apple Watch', id: 2, price: 50000, description: 'Smartwatch'},
    { name: 'Airpods', id: 3, price: 10000, description: 'Wireless earbuds'},
    { name: 'Mobile Phone', id: 4, price: 8500, description: 'Smartphone'},
    { name: 'Digicam', id: 5, price: 20000, description: 'Digital camera'},
    { name: 'Cellphone Case', id: 6, price: 500, description: 'Protective case'},
    { name: 'Wireless Mouse', id: 7, price: 1500, description: 'Computer mouse'},
    { name: 'Mechanical Keyboard', id: 8, price: 15000, description: 'Gaming keyboard'},
    { name: 'Instax', id: 9, price: 4000, description: 'Instant camera'},
    { name: 'Printer', id: 10, price: 5000, description: 'Printer'}
  ]);

  return(
    <div className="product-information">
      {products.map((product, index) => (
        <div key={product.id} className="product">
          <Products
            key={index}{...product}
          />
          <AddToCart product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
}

export default Product;