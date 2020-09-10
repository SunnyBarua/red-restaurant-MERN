export const initialState = {
  shop: [],
  user: null,
};
export const getShopTotal = (shop) =>
  shop?.reduce((amount, item) => item.price * item.quantity + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.user,
      };
    case "CLEAR":
      return {
        ...state,
        user: null,
      };
    case "ADD_TO_SHOP":
      return {
        ...state,
        shop: [...state.shop, action.item],
      };
    case "REMOVE_FROM_SHOP":
      let newShop = [...state.shop];
      const index = state.shop.findIndex(
        (shopItem) => shopItem.id === action.id
      );
      if (index >= 0) {
        newShop.splice(index, 1);
      } else {
        console.warn(`Can not remove {id:${action.id}} as its not in order`);
      }

      return { ...state, shop: newShop };

    default:
      return state;
  }
}

export default reducer;
