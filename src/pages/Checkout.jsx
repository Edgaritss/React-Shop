import React from 'react';
import '../styles/Checkout.scss'
const Checkout = () => {
    return (
      <div className="Checkout">
        <div className="Checkout-container">
          <h1 className="title">My orders</h1>
          <div className="Checkout-content">
            <div className="order">
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
              <img src="./icons/flechita.svg" alt="arrow" />
            </div>
            <div className="order">
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
              <img src="./icons/flechita.svg" alt="arrow" />
            </div>
            <div className="order">
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
              <img src="./icons/flechita.svg" alt="arrow" />
            </div>
            <div className="order">
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
              <img src="./icons/flechita.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Checkout;