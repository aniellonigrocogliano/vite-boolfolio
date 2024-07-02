<script>
export default {
  name: 'MenuComponent',
  data() {
    return {
      MenuItems: [
        { label: 'Home', routeName: 'home' },
        { label: 'Chi siamo', routeName: 'aboutus' },
        { label: 'Lista progetti', routeName: 'listprojects' },
      ]
    };
  }
};
</script>
<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="bi me-2 text-danger" width="40" height="32">
          <i class="fa-solid fa-address-book fa-xl"></i>
        </span>
        <span class="fs-4 text-danger">BOOLFOLIO</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item m-1" v-for="(item, index) in MenuItems" :key="index">
          <router-link :to="{ name: item.routeName }" class="btn btn-outline-danger" active-class="active">
            {{ item.label }}
          </router-link>
        </li>
      </ul>

    </header>
  </div>

</template>
