<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
      <router-link to="/"> Home </router-link>
      <router-link to="/about"> About </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Notes from './components/Notes.vue'

export default {
  name: 'app',
  components: {
    Notes
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}

#app {
    width: 50%;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #a55eea;
  border-radius: 3px;
  color: white;
  font-weight:lighter;
  margin-right: 15px;
}

</style>
