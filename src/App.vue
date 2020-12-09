<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav__link" to="/">Home</router-link> |
      <router-link class="nav__link" to="/albums2018">albums 2018</router-link>
      <router-link class="nav__link" to="/russian2018">russian albums 2018</router-link>
      <router-link class="nav__link" to="/ep2018">ep 2018</router-link>
      <router-link class="nav__link" to="/albums2019">albums 2019</router-link>
      <router-link class="nav__link" to="/albums2020">albums 2020</router-link> |
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
:root {
  --font-famly: "Oswald", sans-serif;
  --bg-color: #000;
  --text-color: #2c3e50;
  --link-active-color: #42b983;
  --shadow-iframe: 1px 1px 15px 5px #42b983;
  --album-title:  #7a9fc4;
  --filter: blur(3px);
}

body {
  font-family: var(--font-famly);
  background-color: var(--bg-color);
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
  color: var(--text-color);
}

#nav {
  padding: 1rem;
  a {
    font-weight: bold;
    color: var(--text-color);
    padding: 1rem;

    &.router-link-exact-active {
      color: var(--link-active-color);
    }
  }
}
</style>
