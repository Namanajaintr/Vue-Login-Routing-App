<template>
  <h1>Office Component</h1>
  <h2>Quick start</h2>
  <p>
    Get started by including Bootstrap’s production-ready CSS and JavaScript via
    CDN without the need for any build steps. See it in practice with this
    Bootstrap CodePen demo.
  </p>
  <button @click="GotoHome">Go to home</button>
</template>

<script>
export default {
  methods: {
    GotoHome() {
      this.$router.push("/home");
      //   this.$router.back("/home");
      //   this.$router.forward("/home");
    },
  },
};
</script>

<style></style>
