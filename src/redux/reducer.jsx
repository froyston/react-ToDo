import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return { ...state, wishList: state.wishList.concat(action.item.value) }; // concatenates new element to array
    }
    case DELETE_ITEM: {
      const wishListCopy = state.wishList.slice(); // Creates a shallow copy
      wishListCopy.splice(action.index, 1); // Removes the indexed element
      return { ...state, wishList: wishListCopy };
    }
    default:
      return {
        ...state,
        wishList: [],
      };
  }
};

export default reducer;