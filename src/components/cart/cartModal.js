import React from 'react';

import CartTable from './cartTable';

function CartModal({API, cart, minusCartItem, plusCartItem, deleteCartItem}) {
    
  /* Вычисление общей суммы товаров */
  let totalPrice = 0;
  cart.forEach(good => {
    const totalItemPrice = +good.price * +good.count;
    totalPrice += totalItemPrice;
  })

  return (
    <div className="overlay" id="modal-cart">
      <div className="modal">
        <header className="modal-header">
          <h2 className="modal-title">Cart</h2>
          <button className="modal-close">x</button>
        </header>
        <div className="cart-wrapper">
          {cart.length > 0 ? 
            <CartTable 
              API={API}
              cart={cart} 
              minusCartItem={minusCartItem}  
              plusCartItem={plusCartItem} 
              deleteCartItem={deleteCartItem}
            /> :
            <div id="cart-empty">There is nothing in the cart yet.</div>
          }
        </div>
        {cart.length > 0 ?
          <form className="modal-form" action="">
            <input
              className="modal-input"
              type="text"
              placeholder="Your Name"
              name="nameCustomer"
            />
            <input
              className="modal-input"
              type="text"
              placeholder="Phone"
              name="phoneCustomer"
            />
            <div className="total">Total: ${totalPrice}</div>
            <button className="button cart-buy" type="submit">
              <span className="button-text">Checkout</span>
            </button>
          </form> : ''
        }
      </div>
    </div>
  );
}
  
export default CartModal;