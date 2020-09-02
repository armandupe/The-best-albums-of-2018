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
    <div @click="closeFrame()" v-show="isFrameVisible" class="close-button">×</div>
  </div>
</main>
</template>

<script>
export default {
  name: 'russian2018',
  data () {
    return {
      isFrameVisible: false,
      isFrameShown: true,
      alt: 'album cover',
      images: [
        {
          id: 1,
          name: 'The Barber - Black Friday',
          path:  require('@/assets/russian2018/1.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5379982'
        },
        {
          id: 2,
          name: 'Ермак! - Мать',
          path:  require('@/assets/russian2018/2.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5489725'
        },
        {
          id: 3,
          name: 'Grizzly Knows No Remorse - GKNR',
          path:  require('@/assets/russian2018/3.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/6171215'
        },
        {
          id: 4,
          name: 'Jars - ДЖРС II',
          path:  require('@/assets/russian2018/4.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5319274'
        },
        {
          id: 5,
          name: 'Kytowrath - War Dominion',
          path:  require('@/assets/russian2018/5.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5762045'
        },
        {
          id: 6,
          name: 'Magik Black - Magik Black',
          path:  require('@/assets/russian2018/6.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5265173'
        },
        {
          id: 7,
          name: 'SMHT - The Loss',
          path:  require('@/assets/russian2018/7.jpg'),
          link: 'https://bandcamp.com/EmbeddedPlayer/album=2616731240/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
        },
        {
          id: 8,
          name: 'Улыбайся Ветру - Иллюзии',
          path:  require('@/assets/russian2018/8.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5166631'
        },
        {
          id: 9,
          name: 'uSSSy - Voyage',
          path:  require('@/assets/russian2018/9.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/6072236'
        },
        {
          id: 10,
          name: 'Winch - Ignorant Wanderers',
          path:  require('@/assets/russian2018/10.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/5393450'
        },
        {
          id: 11,
          name: 'WLVS - Дотла II',
          path:  require('@/assets/russian2018/11.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/9781392'
        },
        {
          id: 12,
          name: 'Wowod - Nutro',
          path:  require('@/assets/russian2018/12.jpg'),
          link: 'https://music.yandex.ru/iframe/#album/10074304'
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
  }
}
</script>