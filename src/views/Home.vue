<template>
  <div class="home">
    <ul class="home__list">
      <router-link class="home__list-link" to="/albums2019">2019</router-link>
      <router-link class="home__list-link" to="/albums2018">2018</router-link>
      <router-link class="home__list-link" to="/russian2018">russian 2018</router-link>
      <router-link class="home__list-link" to="/ep2018">EP 2018</router-link>
    </ul>
  </div>
</template>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &__list-link {
    color: #42b983;
    font-size: 6rem;
    text-decoration: none;
    transition: 0.3s;
    margin-right: 3rem;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

<script>
export default {
  mounted() {
    const nav = document.getElementById("nav");
    const home = document.querySelector(".home");
    const links = document.querySelectorAll(".home__list-link");

    if (home) nav.classList.add("hideFrame");
    links.forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("hideFrame"))
    );
  },
};
</script>