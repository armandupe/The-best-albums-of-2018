<template>
<main class="template-container">
  <div v-for="image in event.images" :key="image.id" class="">
    <a href="" target="_blank">
      <img :src="buildImgSrc(image)" :alt="event.alt">
    </a>
  </div>
</main>
</template>

<script>
export default {
  name: 'albums2018',
  data () {
    return {
      events: [
        {
          id: 1,
          alt: 'album cover',
          images: 'kmlvd',
        },
        {
          id: 2,
          alt: 'album cover',
          images: 'palm',
        },
      ],
      event: {}
    }  
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  },
  methods: {
    buildImgSrc(image) {
      return require(`../assets/${image}.jpg`);
    }
  }
}
</script>
