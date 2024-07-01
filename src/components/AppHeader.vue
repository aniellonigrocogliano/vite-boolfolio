<script>
export default {
  name: 'MenuComponent',
  data() {
    return {
      MenuItems: [
        { label: 'Home', routeName: 'home' },
        { label: 'Chi siamo', routeName: 'aboutus' }
      ]
    };
  }
};
</script>
<template>
    <ul>
      <li v-for="(item, index) in MenuItems" :key="index">
        <router-link :to="{ name: item.routeName }" class="nav-link">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </template>
