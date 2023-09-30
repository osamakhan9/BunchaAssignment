import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_FROM_CART:
      const updatedCart = state.cartItems.map((item) => {
        if (item.id === action.payload.productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCart.filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
};

export default cartReducer;