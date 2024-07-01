<script>
import AppMain from "./components/AppMain.vue";
export default {
  components: {
    AppMain,
  }
};
</script>

<template>
  <div id="app">
    <AppMain />
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>