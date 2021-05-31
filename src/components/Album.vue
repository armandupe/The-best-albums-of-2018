<template>
  <main @click="addIframeSrc()">
    <section class="template-container" v-if="currentPage == '#/albums2018'">
      <div class="album" v-for="data in albumCovers2018" :key="data.id">
        <img class="artwork" :src="require(`@/assets/albums2018/${data.id}.jpg`)" :alt="alt" />
        <p class="album__title">{{ data.name }}</p>
        <iframe loading="lazy" frameborder="0" class="hideFrame frames" v-show="isFrameShown" :src="`${spotifyLinkToAlbum}${data.link}`"> </iframe>
        <div @click="closeFrame()" v-show="isFrameVisible" class="close-button"></div>
      </div>
    </section>
    <section class="template-container" v-if="currentPage == '#/ep2018'">
      <div class="album" v-for="data in epCovers2018" :key="data.id">
        <img class="artwork" :src="require(`@/assets/ep2018/${data.id}.jpg`)" :alt="alt" />
        <p class="album__title">{{ data.name }}</p>
        <iframe loading="lazy" frameborder="0" class="hideFrame frames" v-show="isFrameShown" :src="`${spotifyLinkToAlbum}${data.link}`"> </iframe>
        <div @click="closeFrame()" v-show="isFrameVisible" class="close-button"></div>
      </div>
    </section>
    <section class="template-container" v-if="currentPage == '#/russian2018'">
      <div class="album" v-for="data in russian2018" :key="data.id">
        <img class="artwork" :src="require(`@/assets/russian2018/${data.id}.jpg`)" :alt="alt" />
        <p class="album__title">{{ data.name }}</p>
        <iframe loading="lazy" frameborder="0" class="hideFrame frames" v-show="isFrameShown" :src="`${spotifyLinkToAlbum}${data.link}`"> </iframe>
        <div @click="closeFrame()" v-show="isFrameVisible" class="close-button"></div>
      </div>
    </section>
    <section class="template-container" v-if="currentPage == '#/albums2019'">
      <div class="album" v-for="data in albumCovers2019" :key="data.id">
        <img class="artwork" :src="require(`@/assets/albums2019/${data.id}.jpg`)" :alt="alt" />
        <p class="album__title">{{ data.name }}</p>
        <iframe loading="lazy" frameborder="0" class="hideFrame frames" v-show="isFrameShown" :src="`${spotifyLinkToAlbum}${data.link}`"> </iframe>
        <div @click="closeFrame()" v-show="isFrameVisible" class="close-button"></div>
      </div>
    </section>
    <section class="template-container" v-if="currentPage == '#/albums2020'">
      <div class="album" v-for="data in albumCovers2020" :key="data.id">
        <img class="artwork" :src="require(`@/assets/albums2020/${data.id}.jpg`)" :alt="alt" />
        <p class="album__title">{{ data.name }}</p>
        <iframe loading="lazy" frameborder="0" class="hideFrame frames" v-show="isFrameShown" :src="`${spotifyLinkToAlbum}${data.link}`"> </iframe>
        <div @click="closeFrame()" v-show="isFrameVisible" class="close-button"></div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
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
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}

.album {
  width: 100%;
  @media (min-width: 768px) {
    width: 25%;
  }

  &:hover .album__title {
    color: var(--album-title);
  }

  &__title {
    transition: 0.3s;
  }
}

.hideFrame {
  display: none;
}

.showFrame {
  display: block;
}

.filter-blur {
  filter: var(--filter);
}

.close-button {
  position: fixed;
  padding-top: 10rem;
  width: 3100px;
  height: 1000px;
  top: 0;
  left: 0;
  font-size: 4.5rem;
  z-index: 66;
  cursor: pointer;
  &:hover {
    color: var(--link-active-color);
  }
}

iframe {
  border: none;
  width: 100%;
  height: 450px;
  position: fixed;
  z-index: 70;
  top: 25%;
  left: 0%;
  box-shadow: var(--shadow-iframe);
  @media (min-width: 600px) {
    height: 450px;
  }
  @media (min-width: 768px) {
    width: 450px;
    left: 35%;
  }
}
</style>

<script>
import albumCovers2018 from "./albumCovers2018.json";
import epCovers2018 from "./epCovers2018.json";
import russian2018 from "./russian2018.json";
import albumCovers2019 from "./albumCovers2019.json";
import albumCovers2020 from "./albumCovers2020.json";
export default {
  name: "Album",
  data() {
    return {
      currentPage: window.location.hash,
      isFrameVisible: false,
      isFrameShown: true,
      spotifyLinkToAlbum: "https://open.spotify.com/embed/album/",
      alt: "album cover",
      albumCovers2018: albumCovers2018,
      epCovers2018: epCovers2018,
      russian2018: russian2018,
      albumCovers2019: albumCovers2019,
      albumCovers2020: albumCovers2020,
    };
  },
  methods: {
    addIframeSrc() {
      const frame = event.target.nextSibling.nextSibling;
      if (!frame.classList.contains("showFrame")) {
        frame.classList.remove("hideFrame");
        frame.classList.add("showFrame");
        this.isFrameVisible = true;
        this.isFrameShown = true;

        const albumTitles = document.querySelectorAll(".album__title");
        albumTitles.forEach((albumTitle) => {
          albumTitle.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            return false;
          });
        });

        const artworks = document.querySelectorAll(".artwork");
        artworks.forEach((artwork) => artwork.classList.add("filter-blur"));
      }
    },
    closeFrame() {
      this.isFrameShown = false;
      this.isFrameVisible = false;

      const frames = document.querySelectorAll(".frames");
      frames.forEach((frame) => {
        frame.classList.remove("showFrame");
        frame.classList.add("hideFrame");
      });

      const artworks = document.querySelectorAll(".artwork");
      artworks.forEach((artwork) => artwork.classList.remove("filter-blur"));
    },
  },
  mounted() {
    const clsBtns = document.querySelectorAll(".close-button");
    clsBtns.forEach((btn) => btn.addEventListener("click", (event) => event.stopPropagation()));
  },
};
</script>
