import { createStore } from "vuex";
import axios from "axios";

let store = createStore({
  state() {
    return {
      products: [],
    };
  },

  mutations: {
    fetchProducts(state, payload) {
      state.products = payload;
      console.log("state", state);
    },
  },

  actions: {
    async fetchProducts(context) {
      try {
        let response = await axios.get(
          "https://ty-shop.herokuapp.com/api/products"
        );
        console.log("response", response);

        let resProducts = response.data.products;

        console.log("resProducts", resProducts);
        //   this.products = resProducts;

        context.commit("fetchProducts", resProducts);
      } catch (err) {
        console.log("err", err);
      }
    },
  },
});
export default store;
