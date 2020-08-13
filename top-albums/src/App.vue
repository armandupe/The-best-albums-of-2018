<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/albums2018">albums 2018</router-link>
      <router-link to="/russian2018">russian albums 2018</router-link>
      <router-link to="/ep2018">ep 2018</router-link>
      <router-link to="/albums2019">albums 2019</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">

body {
  font-family: 'Oswald', sans-serif;
  background-color: #000;
  margin: 0;
  overflow-x: hidden;
  -ms-overflow-style: none;  
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}

.template-container {
  display: flex;
  flex-wrap: wrap;
}

.artwork {
  max-width: 100%;
  height: auto;
}

.album {
  width: 25%;
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
