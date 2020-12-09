<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav__link" to="/">Home</router-link> |
      <router-link class="nav__link" to="/albums2018">albums 2018</router-link>
      <router-link class="nav__link" to="/russian2018"
        >russian albums 2018</router-link
      >
      <router-link class="nav__link" to="/ep2018">ep 2018</router-link>
      <router-link class="nav__link" to="/albums2019">albums 2019</router-link>
      |
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
body {
  font-family: "Oswald", sans-serif;
  background-color: #000;
  margin: 0;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}

.nav__link {
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
}

#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
