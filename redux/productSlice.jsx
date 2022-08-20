import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    explore: {
      page: 1,
      products: [],
    },
    userLike: [],
  },
  reducers: {
    setExplorePage(state, action) {
      const { payload } = action;
      state.explore.products = payload.products;
      if (payload.page === 1) {
        state.explore.page = 1;
      }
    },
    increasePage(state, action) {
      state.explore.page += 1;
    },
    setUserLike(state, action) {
      const {
        payload: { productId },
      } = action;
      const product = state.explore.rooms.find((product) => product.id === productId);
      if (product) {
        if (product.is_like) {
          product.is_like = false;
          state.userLike = state.userLike.filter((product) => product.id !== productId);
        } else {
          product.is_like = true;
          state.userLike.push(product);
        }
      }
    },
  },
});

export const { setExplorePage, increasePage, setUserLike } = productsSlice.actions;

export default productsSlice.reducer;
