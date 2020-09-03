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
  name: 'albums2019',
  data () {
    return {
      isFrameVisible: false,
      isFrameShown: true,
      alt: 'album cover',
      images: [
        {
          id: 1,
          name: 'Norma Jean - All Hail',
          path:  require('@/assets/albums2019/1.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/8403543'
        },
        {
          id: 2,
          name: 'Tool - Fear Inoculum',
          path:  require('@/assets/albums2019/2.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/8527511'
        },
        {
          id: 3,
          name: 'Lingua Ignota - Caligula',
          path:  require('@/assets/albums2019/3.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/7553480'
        },
        {
          id: 4,
          name: 'Cult Of Luna - A Dawn To Fear',
          path:  require('@/assets/albums2019/4.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/8050749'
        },
        {
          id: 5,
          name: 'Russian Circles - Blood Year',
          path:  require('@/assets/albums2019/5.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/7433512'
        },
        {
          id: 6,
          name: 'Big Brave - A Gaze Among Them',
          path:  require('@/assets/albums2019/6.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/7164868'
        },
        {
          id: 7,
          name: 'Brutus - Nest',
          path:  require('@/assets/albums2019/7.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/6672726'
        },
        {
          id: 8,
          name: 'Batushka - Hospodi',
          path:  require('@/assets/albums2019/8.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/7347028'
        },
        {
          id: 9,
          name: 'Dead Kiwis - Systematic Home Run',
          path:  require('@/assets/albums2019/9.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/6713441'
        },
        {
          id: 10,
          name: 'Touche Amore - Dead Horse X',
          path:  require('@/assets/albums2019/10.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/8275324'
        },
      ],
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