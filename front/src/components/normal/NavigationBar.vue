<template>
  <nav class="header">
    <div class="nav-bar-home-container">
      <router-link :to="{ name: 'normalHome'}">Home</router-link>
    </div>

    <div class="nav-bar-link-container">
      {{this.$store.state.userId}}
      <router-link v-if="this.$store.state.userId" :to="{ name: 'normalTodo'}">Todo</router-link>
      <router-link v-if="this.$store.state.userId" :to="{ name: 'normalLogIn'}">Log out
      </router-link>
      <router-link v-else :to="{ name: 'normalLogIn'}">Log In</router-link>
      <router-link :to="{ name: 'normalSignUp'}">Sign Up</router-link>
      <p id="logged-in-user-name" hidden></p>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "NavigationBar",
        props: {
            'loggedInUserName': String
        }
    }
</script>

<style scoped>
  /* navigation bar*/
  nav.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--large-font-size);
    min-height: var(--large-font-size);
    padding: 0 1rem;
    color: white;
    background-color: forestgreen;
    margin-bottom: 1rem;
    font-size: var(--micro-font-size);
  }

  nav.header .nav-bar-home-container {

  }

  nav.header .nav-bar-link-container {
    display: flex;
  }

  nav.header a {
    width: max-content;
    color: white;
    text-decoration: none;
    margin: 0 0.5rem;
  }

  nav.header a:hover {
    color: rgba(141, 196, 141, 1);
  }
</style>
