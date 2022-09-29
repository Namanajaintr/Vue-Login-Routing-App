<template>
  <!-- <navbar-comp /> -->
  <navbar-page />
  <router-view></router-view>
  <!-- <home-comp />
  <office-comp /> -->
</template>

<script>
import NavbarPage from "./components/loginform/NavbarPage.vue";
// import NavbarComp from "./components/NavbarComp.vue";

// import HomeComp from "./components/HomeComp.vue";
// import OfficeComp from "./components/OfficeComp.vue";

export default {
  name: "App",
  components: {
    //NavbarComp,
    NavbarPage,
    // HomeComp,
    // OfficeComp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
