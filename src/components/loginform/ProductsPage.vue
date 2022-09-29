<template>
  <div>
    <!-- <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Description</th>
          <th>Product Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product._id }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.productPrice }}</td>
          <td>{{ product.productDescription }}</td>
          <td>
            <img :src="product.productImageURL" width="220px" height="160px" />
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>

  <div class="pdt">
    <div
      v-for="product in products"
      :key="product._id"
      class="card"
      style="width: 18rem"
    >
      <img
        class="card-img-top"
        :src="product.productImageURL"
        alt="product image"
      />
      <div class="card-body">
        <h3 class="card-title">Name: {{ product.productName }}</h3>
        <h5 class="card-text">Price: {{ product.productPrice }}</h5>
        <p class="card-text">Details: {{ product.productDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style>
.pdt {
  display: flex;
}
</style>
