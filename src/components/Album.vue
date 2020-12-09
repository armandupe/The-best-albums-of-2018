<template>
  <main @click="addIframeSrc()">
    <section class="template-container" v-if="currentPage == '#/albums2018'">
      <div class="album" v-for="image in imagesAlbums2018" :key="image.id">
        <img class="artwork" :src="image.path" :alt="alt" />
        <p class="album__title">{{ image.name }}</p>
        <iframe
          loading="lazy"
          frameborder="0"
          class="hideFrame frames"
          v-show="isFrameShown"
          :src="image.link"
        >
        </iframe>
        <div
          @click="closeFrame()"
          v-show="isFrameVisible"
          class="close-button"
        ></div>
      </div>
    </section>
    <section class="template-container" v-if="currentPage == '#/ep2018'">
      <div class="album" v-for="image in imagesEp2018" :key="image.id">
        <img class="artwork" :src="image.path" :alt="alt" />
        <p class="album__title">{{ image.name }}</p>
        <iframe
          loading="lazy"
          frameborder="0"
          class="hideFrame frames"
          v-show="isFrameShown"
          :src="image.link"
        >
        </iframe>
        <div
          @click="closeFrame()"
          v-show="isFrameVisible"
          class="close-button"
        ></div>
      </div>
    </section>
    <section class="template-container" v-if="currentPage == '#/russian2018'">
      <div class="album" v-for="image in imagesRussian2018" :key="image.id">
        <img class="artwork" :src="image.path" :alt="alt" />
        <p class="album__title">{{ image.name }}</p>
        <iframe
          loading="lazy"
          frameborder="0"
          class="hideFrame frames"
          v-show="isFrameShown"
          :src="image.link"
        >
        </iframe>
        <div
          @click="closeFrame()"
          v-show="isFrameVisible"
          class="close-button"
        ></div>
      </div>
    </section>
    <section class="template-container" v-if="currentPage == '#/albums2019'">
      <div class="album" v-for="image in imagesAlbums2019" :key="image.id">
        <img class="artwork" :src="image.path" :alt="alt" />
        <p class="album__title">{{ image.name }}</p>
        <iframe
          loading="lazy"
          frameborder="0"
          class="hideFrame frames"
          v-show="isFrameShown"
          :src="image.link"
        >
        </iframe>
        <div
          @click="closeFrame()"
          v-show="isFrameVisible"
          class="close-button"
        ></div>
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
    color: #7a9fc4;
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
  filter: blur(3px);
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
    color: #42b983;
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
  box-shadow: 1px 1px 15px 5px #42b983;
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
export default {
  name: "Album",
  data() {
    return {
      currentPage: window.location.hash,
      isFrameVisible: false,
      isFrameShown: true,
      alt: "album cover",
      jsonPath: require("@/albumCovers.json"),
      imagesAlbums2018: [
        {
          id: 1,
          name: "KEN Mode - Loved",
          path: require("@/assets/albums2018/1.jpg"),
          link: "https://open.spotify.com/embed/album/1cFzMVueUdFqx859ysAsIv",
        },
        {
          id: 2,
          name: "The Armed - Only Love",
          path: require("@/assets/albums2018/2.jpg"),
          link: "https://open.spotify.com/embed/album/0rqwAw1OsmH6qwGjnbAgn4",
        },
        {
          id: 3,
          name: "Zapruder - Zapruder",
          path: require("@/assets/albums2018/3.jpg"),
          link: "https://open.spotify.com/embed/album/0tzTrOFRMFr1GQMsogkSUt",
        },
        {
          id: 4,
          name: "Zeal & Ardor - Stranger Fruit",
          path: require("@/assets/albums2018/4.jpg"),
          link: "https://open.spotify.com/embed/album/1oSxrt8srwdUqlg5jq3aFK",
        },
        {
          id: 5,
          name: "Author & Punisher - Beastland",
          path: require("@/assets/albums2018/5.jpg"),
          link: "https://open.spotify.com/embed/album/7eeGQz44dnAsZEUL5jQAfk",
        },
        {
          id: 6,
          name: "Baptists - Beacon Of Faith",
          path: require("@/assets/albums2018/6.jpg"),
          link: "https://open.spotify.com/embed/album/76ncBSj7xatwLRc1Gyq6Jh",
        },
        {
          id: 7,
          name: "Birds In Row - We Already Lost The World",
          path: require("@/assets/albums2018/7.jpg"),
          link: "https://open.spotify.com/embed/album/0jCpN5ObSWBRhHnz02xKqy",
        },
        {
          id: 8,
          name: "Madball - For The Cause",
          path: require("@/assets/albums2018/8.jpg"),
          link: "https://open.spotify.com/embed/album/4LBgCtcdVp8hBBRDdwJaZk",
        },
        {
          id: 9,
          name: "Moderator - Sinners Syndrome",
          path: require("@/assets/albums2018/9.jpg"),
          link: "https://open.spotify.com/embed/album/6ozEgJRgNtukED69hrg5XF",
        },
        {
          id: 10,
          name: "Night Verses - From The Gallery Of Sleep",
          path: require("@/assets/albums2018/10.jpg"),
          link: "https://open.spotify.com/embed/album/4HYYq0DrvR7L6G7nINEw69",
        },
        {
          id: 11,
          name: "Palm - To Live Is to Die, To Die Is to Live",
          path: require("@/assets/albums2018/11.jpg"),
          link: "https://open.spotify.com/embed/album/4xNiNO8zeOCTmK6CFrzwCx",
        },
        {
          id: 12,
          name: "Harms Way - PostHuman",
          path: require("@/assets/albums2018/12.jpg"),
          link: "https://open.spotify.com/embed/album/1RIr3dLd64m8fh23p2gm9L",
        },
        {
          id: 13,
          name: "The Prodigy - No Tourists",
          path: require("@/assets/albums2018/13.jpg"),
          link: "https://open.spotify.com/embed/album/6DAq2tDWMqPP7MTdb3aIDi",
        },
        {
          id: 14,
          name: "Sandrider - Armada",
          path: require("@/assets/albums2018/14.jpg"),
          link: "https://open.spotify.com/embed/album/2BsVF9NiHJB8z4nqWZHRp6",
        },
        {
          id: 15,
          name: "Sumac - Love In Shadow",
          path: require("@/assets/albums2018/15.jpg"),
          link: "https://open.spotify.com/embed/album/2bH90aULuT0vmo10zSy4uH",
        },
        {
          id: 16,
          name: "Sectioned - Annihilated",
          path: require("@/assets/albums2018/16.jpg"),
          link: "https://open.spotify.com/embed/album/2Xg2xAMrkBQQNd4FPYijrc",
        },
        {
          id: 17,
          name: "Sick Of It All - Wake The Sleeping Dragon",
          path: require("@/assets/albums2018/17.jpg"),
          link: "https://open.spotify.com/embed/album/0a3peoydFvzUOVj0N5deVv",
        },
        {
          id: 18,
          name: "Svartidaudi - Revelations Of The Red Sword",
          path: require("@/assets/albums2018/18.jpg"),
          link: "https://open.spotify.com/embed/album/21r8djHhS74EgLMeHKllr3",
        },
        {
          id: 19,
          name: "Terror - Total Retaliation",
          path: require("@/assets/albums2018/19.jpg"),
          link: "https://open.spotify.com/embed/album/4L7nhEtz4jQYumFuTSmaGy",
        },
        {
          id: 20,
          name: "The Ocean - Phanerozoic I Palaeozoic",
          path: require("@/assets/albums2018/20.jpg"),
          link: "https://open.spotify.com/embed/album/5wXk12dqhJZAxJSsMBUd6e",
        },
      ],
      imagesEp2018: [
        {
          id: 1,
          name: "The Fever 333 - Made An America",
          path: require("@/assets/ep2018/1.jpg"),
          link: "https://open.spotify.com/embed/album/6HLseXtiQsGBeLaQ43Pm6G",
        },
        {
          id: 2,
          name: "Code Orange - The Hurt Will Go On",
          path: require("@/assets/ep2018/2.jpg"),
          link: "https://open.spotify.com/embed/album/3ch5GzevW8qb1712GXnvqE",
        },
        {
          id: 3,
          name: "Converge - Beautiful Ruin",
          path: require("@/assets/ep2018/3.jpg"),
          link: "https://open.spotify.com/embed/album/0ou6DfhPpgGjbNLX00LbgK",
        },
        {
          id: 4,
          name: "Cryptopsy - Book Of Suffering Tome - II",
          path: require("@/assets/ep2018/4.jpg"),
          link: "https://open.spotify.com/embed/album/5XlcD9OFVsQb07xN2c2gaf",
        },
        {
          id: 5,
          name: "Every Stranger Looks Like You - I - Levensmoeheid",
          path: require("@/assets/ep2018/5.jpg"),
          link: "https://open.spotify.com/embed/album/1ihDs99r9kWx5lgxchJl5o",
        },
        {
          id: 6,
          name: "Nine Inch Nails - Bad Witch",
          path: require("@/assets/ep2018/6.jpg"),
          link: "https://open.spotify.com/embed/album/0Q2o6ioxIOlKPvRdG1K5da",
        },
        {
          id: 7,
          name: "Rotten Sound - Suffer To Abuse",
          path: require("@/assets/ep2018/7.jpg"),
          link: "https://open.spotify.com/embed/album/4PXBjtbjoHDcfxDTz1RhCM",
        },
        {
          id: 8,
          name: "Thou - Rheia Sylvia",
          path: require("@/assets/ep2018/8.jpg"),
          link: "https://open.spotify.com/embed/album/4qbIrB7bD5x8vbE62CEzuj",
        },
      ],
      imagesRussian2018: [
        {
          id: 1,
          name: "The Barber - Black Friday",
          path: require("@/assets/russian2018/1.jpg"),
          link: "https://open.spotify.com/embed/album/2Xf8WeoOHQCIJeju2GqHLK",
        },
        {
          id: 2,
          name: "Ермак! - Мать",
          path: require("@/assets/russian2018/2.jpg"),
          link: "https://open.spotify.com/embed/album/7pKn9vZfY4sYxFHWHJzY9J",
        },
        {
          id: 3,
          name: "Grizzly Knows No Remorse - GKNR",
          path: require("@/assets/russian2018/3.jpg"),
          link: "https://open.spotify.com/embed/album/3b6AtRUqw8SGVoJ4LZ7pJE",
        },
        {
          id: 4,
          name: "Jars - ДЖРС II",
          path: require("@/assets/russian2018/4.jpg"),
          link: "https://open.spotify.com/embed/album/1h3FiFcvK9tgvuljrzSkON",
        },
        {
          id: 5,
          name: "Kytowrath - War Dominion",
          path: require("@/assets/russian2018/5.jpg"),
          link: "https://open.spotify.com/embed/album/4jla49U5gFb8jxtv0KR0jZ",
        },
        {
          id: 6,
          name: "Magik Black - Magik Black",
          path: require("@/assets/russian2018/6.jpg"),
          link: "https://open.spotify.com/embed/album/3YJXBs0ul5VPG8OS1JrUJz",
        },
        {
          id: 7,
          name: "SMHT - The Loss",
          path: require("@/assets/russian2018/7.jpg"),
          link: "https://open.spotify.com/embed/album/1BCSpywZ9iay74hypwL7Kr",
        },
        {
          id: 8,
          name: "Улыбайся Ветру - Иллюзии",
          path: require("@/assets/russian2018/8.jpg"),
          link: "https://open.spotify.com/embed/album/7Ds6ExjbTlPl6zYzz5q6Zp",
        },
        {
          id: 9,
          name: "uSSSy - Voyage",
          path: require("@/assets/russian2018/9.jpg"),
          link: "https://open.spotify.com/embed/album/:(",
        },
        {
          id: 10,
          name: "Winch - Ignorant Wanderers",
          path: require("@/assets/russian2018/10.jpg"),
          link: "https://open.spotify.com/embed/album/3I7QKUnVpyLPj20gJgFqU0",
        },
        {
          id: 11,
          name: "WLVS - Дотла II",
          path: require("@/assets/russian2018/11.jpg"),
          link: "https://open.spotify.com/embed/album/46DLLnD17nssdRGmhAIiJK",
        },
        {
          id: 12,
          name: "Wowod - Nutro",
          path: require("@/assets/russian2018/12.jpg"),
          link: "https://open.spotify.com/embed/album/5FjVRhymsiiz1PigE5fxYZ",
        },
      ],
      imagesAlbums2019: [
        {
          id: 1,
          name: "Norma Jean - All Hail",
          path: require("@/assets/albums2019/1.jpg"),
          link: "https://open.spotify.com/embed/album/0DYeH7SR1w2dvQ05eR0dIP",
        },
        {
          id: 2,
          name: "Tool - Fear Inoculum",
          path: require("@/assets/albums2019/2.jpg"),
          link: "https://open.spotify.com/embed/album/7acEciVtnuTzmwKptkjth5",
        },
        {
          id: 3,
          name: "Lingua Ignota - Caligula",
          path: require("@/assets/albums2019/3.jpg"),
          link: "https://open.spotify.com/embed/album/2GBJg7nTQs3go1w24ECKvy",
        },
        {
          id: 4,
          name: "Cult Of Luna - A Dawn To Fear",
          path: require("@/assets/albums2019/4.jpg"),
          link: "https://open.spotify.com/embed/album/5wF8QXoGV5Woz6EzfZjMZC",
        },
        {
          id: 5,
          name: "Russian Circles - Blood Year",
          path: require("@/assets/albums2019/5.jpg"),
          link: "https://open.spotify.com/embed/album/1LWWmVyhDxFAxBmQe3ecZb",
        },
        {
          id: 6,
          name: "Big Brave - A Gaze Among Them",
          path: require("@/assets/albums2019/6.jpg"),
          link: "https://open.spotify.com/embed/album/1i10no8p3y1igTW46jquub",
        },
        {
          id: 7,
          name: "Brutus - Nest",
          path: require("@/assets/albums2019/7.jpg"),
          link: "https://open.spotify.com/embed/album/1OqeCBpnBINPaOni2h3hVv",
        },
        {
          id: 8,
          name: "Batushka - Hospodi",
          path: require("@/assets/albums2019/8.jpg"),
          link: "https://open.spotify.com/embed/album/4EpSJyvM3FaueYWpGyQiGW",
        },
        {
          id: 9,
          name: "Dead Kiwis - Systematic Home Run",
          path: require("@/assets/albums2019/9.jpg"),
          link: "https://open.spotify.com/embed/album/0wuBs3SJvqntMy0M32HxHK",
        },
        {
          id: 10,
          name: "Touche Amore - Dead Horse X",
          path: require("@/assets/albums2019/10.jpg"),
          link: "https://open.spotify.com/embed/album/18mkStcF82XtIJT9ENw9pa",
        },
      ],
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
    clsBtns.forEach((btn) =>
      btn.addEventListener("click", (event) => event.stopPropagation())
    );
  },
};
</script>
