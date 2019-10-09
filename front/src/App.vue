<template>
  <div id="app">
    <section id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/logIn">Log In</router-link>
      |
      <router-link to="/singUp">Sign Up</router-link>
    </section>
    <router-view class="router-view"/>
  </div>
</template>

<style>
  :root {
    --snackbar-bottom: 50px;
    --large-font-size: 3rem;
    --middle-font-size: 2rem;
    --small-font-size: 1.5rem;
    --micro-font-size: 1.2rem;
    --footer-font-size: 0.9rem;
  }

  /* 최상위 엘리먼트들 */
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    background-color: whitesmoke;
  }

  .router-view {
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: var(--large-font-size);
    text-align: center;
  }

  h2 {
    font-size: var(--middle-font-size);
    text-align: center;
  }

  h3 {
    font-size: var(--small-font-size);
    text-align: center;
  }

  span {
    display: block;
    width: 100%;
    height: auto;
    min-height: 1rem;
  }

  input, select, textarea {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    padding: 0 5px 0 5px;
    -ms-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 1px solid rgba(69, 69, 69, 0.5);
    border-radius: 5px;
    outline: none;
  }

  input:focus, select:focus, textarea:focus {
    border: 2px solid rgba(34, 139, 34, 1);
  }

  button {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: var(--micro-font-size);
    border-radius: 5px;
    color: white;
    background-color: forestgreen;
    border-style: none;
    font-weight: bold;
    cursor: pointer;
  }

  section {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }

  svg {
    cursor: pointer;
  }

  svg:hover {
    color: forestgreen;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  #nav {
    display: flex;
    justify-content: space-around;
    padding: var(--micro-font-size);
    height: unset;
    width: -webkit-fill-available;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
