import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../../styles/cart.module.css";
import {
  addToCart,
  increaseCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotal,
} from "../../redux/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleIncrement = (product) => {
    dispatch(increaseCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <div className={Styles.nav}>
        <h2>Shopping Cart</h2>
      </div>
      <div className={Styles.cartcontainer}>
        {cart.cartItem.length === 0 ? (
          <div className={Styles.cartempty}>
            <img
              src={
                "https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
              }
            />
            <h2>Oops !</h2>
            <p className={Styles.p}>
              Your cart is currently <span>Empty</span>
            </p>
            <div className={Styles.startshopping}>
              <Link href="/product">
                <div className={Styles.ico}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </div>
              </Link>
              <span className={Styles.span}>Start Shopping</span>
            </div>
          </div>
        ) : (
          <div>
            <div className={Styles.titles}>
              <h3 className={Styles.producttitle}>Product</h3>
              <h3 className={Styles.price}>Price</h3>
              <h3 className={Styles.quantity}>Quantity</h3>
              <h3 className={Styles.total}>Total</h3>
            </div>
            <div className={Styles.cartitems}>
              {cart.cartItems ||
                cart.cartItem.map((cartItem) => (
                  <div className={Styles.cartitem} key={cartItem.id}>
                    <div className={Styles.cartproduct}>
                      <Image
                        className={Styles.img}
                        src={cartItem.image}
                        alt={cartItem.title}
                        width="200"
                        height="200"
                      />
                      <div className={Styles.div}>
                        <h3>{cartItem.title}</h3>
                        <p>{cartItem.description.substring(0, 100)}</p>
                        <button
                          className={Styles.button}
                          onClick={() => handleRemoveFromCart(cartItem)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className={Styles.cartproductprice}>
                      ${cartItem.price}
                    </div>
                    <div className={Styles.cartproductquantity}>
                      <button
                        className={Styles.button}
                        onClick={() => handleDecreaseCart(cartItem)}
                      >
                        -
                      </button>
                      <div className={Styles.count}>
                        {cartItem.cartQuantity}
                      </div>
                      <button
                        className={Styles.button}
                        onClick={() => handleIncrement(cartItem)}
                      >
                        +
                      </button>
                    </div>
                    <div className={Styles.cartproducttotalprice}>
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}
            </div>
            <div className={Styles.cartsummary}>
              <button
                className={Styles.clearbtn}
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
              <div className={Styles.cartcheckout}>
                <div className={Styles.subtotal}>
                  <span className={Styles.span}>Subtotal</span>
                  <span className={Styles.amount}>${cart.cartTotalAmount}</span>
                </div>
                <p className={Styles.p}>
                  Taxes and shipping calculated at checkout
                </p>
                <button className={Styles.button}>Check out</button>
                <div className={Styles.continueshopping}>
                  <Link href="/product">
                    <div className={Styles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                    </div>
                  </Link>
                  <span className={Styles.span}>Continue Shopping</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
