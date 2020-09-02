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

iframe {
  border: none;
  width: 450px;
  height: 450px;
  position: absolute;
  z-index: 70;
  top: 50%;
  left: 35%;
  box-shadow: 1px 1px 10px 10px;
}

.close-button {
  position: absolute;
  width: 3750px;
  height: 1100px;
  top: 0;
  left: 0;
  font-size: 4.5rem;
  z-index: 66;
  cursor: pointer;
  &:hover {
    color: #42b983;
  }
}

.template-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }   
  
}

.artwork {
  max-width: 100%;
  height: auto;
  transition: .3s;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
}

.filter-blur {
  filter: blur(3px);
}

.album {
  width: 100%;
  @media (min-width: 768px) {
    width: 25%;
  }  
  &__title::selection {
    color: #42b983;
  }
}

.hideFrame {
  display: none;
}

.showFrame {
  display: block;
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
