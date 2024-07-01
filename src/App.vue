<script>
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppMain,
    AppHeader,
  }
};
</script>

<template>
  <div id="app">
 <AppHeader/> 
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>