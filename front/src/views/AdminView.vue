<template>
  <div>
    <nav>
      <router-link :to="{name: 'adminHome'}">home</router-link>
      <router-link :to="{name: 'adminUsers'}">users</router-link>
      <router-link :to="{name: 'adminItems'}">items</router-link>
    </nav>
    <router-view class="router-view vertical"></router-view>
  </div>
</template>

<script>
    export default {
        name: "AdminLayout"
    }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: row;
  }

  nav {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 10rem;
    background-color: #f1f1f1;
  }

  nav a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  /* Change the link color on hover */
  nav a:hover {
    background-color: #555;
    color: white;
  }

  .vertical {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
</style>
