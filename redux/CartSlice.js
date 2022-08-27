import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex > 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        const itemProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(itemProduct);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        );

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    increaseCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItem[itemIndex].cartQuantity += 1;

      toast.info("Increased product quantity", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );

      toast.error("Product removed from cart", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
      return state;
    },
    clearCart: (state, action) => {
      state.cartItem = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));

      toast.error("Cart cleared", { position: "bottom-left" });
    },
    getTotal: (state, action) => {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  increaseCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
