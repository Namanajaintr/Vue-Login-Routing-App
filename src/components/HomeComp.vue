<template>
  <h1>Home Component</h1>
  <h2>Get started with Bootstrap</h2>
  <p>
    Bootstrap is a powerful, feature-packed frontend toolkit. Build
    anything—from prototype to production—in minutes.
  </p>
  <button @click="GotoOffice">Go to office</button>
</template>

<script>
export default {
  methods: {
    GotoOffice() {
      this.$router.push("/office");
      //   this.$router.back("/office");
      //   this.$router.forward("/office");
    },
  },
};
</script>

<style></style>
