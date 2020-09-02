<template>
<main @click="addIframeSrc()" class="template-container">
  <div class="album" v-for="image in images" :key="image.id">
    <img class="artwork" :src="image.path" :alt="alt">
    <p class="album__title">{{image.name}}</p>
    <iframe
    loading="lazy"
    frameborder="0"
    class="hideFrame frames"
    v-show="isFrameShown"
    :src="image.link">
    </iframe>
    <div @click="closeFrame()" v-show="isFrameVisible" class="close-button"></div>
  </div>
</main>
</template>

<script>
export default {
  name: 'ep2018',
  data () {
    return {
      isFrameVisible: false,
      isFrameShown: true,
      alt: 'album cover',
      images: [
        {
          id: 1,
          name: 'The Fever 333 - Made An America',
          path:  require('@/assets/ep2018/1.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5156765'
        },
        {
          id: 2,
          name: 'Code Orange - The Hurt Will Go On',
          path:  require('@/assets/ep2018/2.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5475685'
        },
        {
          id: 3,
          name: 'Converge - Beautiful Ruin',
          path:  require('@/assets/ep2018/3.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5476836'
        },
        {
          id: 4,
          name: 'Cryptopsy - Book Of Suffering Tome - II',
          path:  require('@/assets/ep2018/4.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5747986'
        },
        {
          id: 5,
          name: 'Every Stranger Looks Like You - I - Levensmoeheid',
          path:  require('@/assets/ep2018/5.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5870341'
        },
        {
          id: 6,
          name: 'Nine Inch Nails - Bad Witch',
          path:  require('@/assets/ep2018/6.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5369599'
        },
        {
          id: 7,
          name: 'Rotten Sound - Suffer To Abuse',
          path:  require('@/assets/ep2018/7.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5057178'
        },
        {
          id: 8,
          name: 'Thou - Rheia Sylvia',
          path:  require('@/assets/ep2018/8.jpg'),
          link: 'https://bandcamp.com/EmbeddedPlayer/album=2880169009/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
        },
      ],
      // arrLinks: [
      //    'https://music.yandex.ru/iframe/#album/5156765',
      //    'https://music.yandex.ru/iframe/#album/5475685',
      //    'https://music.yandex.ru/iframe/#album/5476836',
      //    'https://music.yandex.ru/iframe/#album/5747986',
      //    'https://music.yandex.ru/iframe/#album/5870341',
      //    'https://music.yandex.ru/iframe/#album/5369599',
      //    'https://music.yandex.ru/iframe/#album/5057178',
      //    'https://bandcamp.com/EmbeddedPlayer/album=2880169009/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
      // ],
    }  
  },
  methods: {
    addIframeSrc() {
      const frame = event.target.nextSibling.nextSibling;   
      if (!frame.classList.contains('showFrame')) {
        frame.classList.remove('hideFrame');
        frame.classList.add('showFrame');
        this.isFrameVisible = true;
        this.isFrameShown = true;

        const albumTitles = document.querySelectorAll('.album__title');
        albumTitles.forEach(albumTitle => {
          albumTitle.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            return false;
          })
        });

        const artworks = document.querySelectorAll('.artwork');
        artworks.forEach(artwork => artwork.classList.add('filter-blur'));
      }
    },
    closeFrame() {
      this.isFrameShown = false;
      this.isFrameVisible = false;

      const frames = document.querySelectorAll('.frames');
      frames.forEach(frame => {
        frame.classList.remove('showFrame');
        frame.classList.add('hideFrame');
      });
     
      const artworks = document.querySelectorAll('.artwork');
      artworks.forEach(artwork => artwork.classList.remove('filter-blur'));
    }
  },
  mounted() {
      const clsBtns = document.querySelectorAll('.close-button');
      clsBtns.forEach(btn => btn.addEventListener('click', event => event.stopPropagation()));
  },
}
</script>