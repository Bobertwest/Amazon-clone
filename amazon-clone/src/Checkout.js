import React from "react";
import { useStateValue } from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue(); 

  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_add" src="https://hotdealszone.com/wp-content/uploads/2018/10/great-indian-festival-sale-add-money-offer.png" alt="Anuncio de amazon" />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your basket is empty</h2>
                    <h3>Start buying now</h3>
                </div>
            ) : (
                <div>
                    <h2>Your Shopping Basket</h2>
                    {basket?.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
        {basket?.length > 0 && (
            <div className="checkout_right">
                <div className="subtotal">
                    
                    <CurrencyFormat 
                        renderText ={(value)=>(
                            <>
                                <p>
                        Subtota ({basket.length} items): <strong>{`${value}`}</strong>
                                </p>
                                <small className="subtotal_gift">
                                    <input type="checkbox" />This order containd a gift
                                </small>
                            </>
                        )}

                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    
                    />
                    <button>Proceed to checkout</button>
                </div>
            </div>
     )}
    </div>
  );
}

export default Checkout;
