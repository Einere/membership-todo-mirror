<template>
  <main class="container">
  </main>
</template>

<script>
    export default {
        name: "MainContainer"
    }
</script>

<style scoped>
  main.container {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
