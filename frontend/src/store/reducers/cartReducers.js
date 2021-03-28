import {
  CART_ADD_ITEM,
  CART_REMOVE_ALL_ITEMS,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  DECREASE_ONE_ITEM,
  INCREASE_ONE_ITEM,
} from "../../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_REMOVE_ALL_ITEMS:
      const arr1 = state.cartItems;
      const arr2 = action.payload;

      // delete item with the same key in 2 arrays
      return {
        ...state,
        cartItems: arr1.filter(function (o1) {
          return !arr2.some(function (o2) {
            //  for different we use NOT (!) before obj2 here
            return o1.product === o2.product; // id is unique both array object
          });
        }),
      };
    case DECREASE_ONE_ITEM:
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((obj) =>
          obj.product === id ? { ...obj, qty: obj.qty - 1 } : obj
        ),
      };
    case INCREASE_ONE_ITEM:
      return {
        ...state,
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
