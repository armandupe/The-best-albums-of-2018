<template>
<main class="template-container">
  <div class="album" v-for="image in images" :key="image.id">
    <a href="" target="_blank">
      <img class="artwork" :src="image.path" :alt="alt">
    </a>
    <p class="">{{image.name}}</p>
    <iframe
    loading="lazy"
    frameborder="0"
    style="border:none;width:450px;height:450px;"
    width="450"
    height="450"
    :src="image.album">
    </iframe>
  </div>
</main>
</template>

<script>
export default {
  name: 'russian2018',
  data () {
    return {
      alt: 'album cover',
      images: [
        {
          id: 1,
          name: 'The Barber - Black Friday',
          path: require('@/assets/russian2018/1.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5379982'
        },
        {
          id: 2,
          name: 'Ермак! - Мать',
          path: require('@/assets/russian2018/2.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5489725'
        },
        {
          id: 3,
          name: 'Grizzly Knows No Remorse - GKNR',
          path: require('@/assets/russian2018/3.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/6171215'
        },
        {
          id: 4,
          name: 'Jars - ДЖРС II',
          path: require('@/assets/russian2018/4.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5319274'
        },
        {
          id: 5,
          name: 'Kytowrath - War Dominion',
          path: require('@/assets/russian2018/5.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5762045'
        },
        {
          id: 6,
          name: 'Magik Black - Magik Black',
          path: require('@/assets/russian2018/6.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5265173'
        },
        {
          id: 7,
          name: 'SMHT - The Loss',
          path: require('@/assets/russian2018/7.jpg'),
          album: 'https://bandcamp.com/EmbeddedPlayer/album=2616731240/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
        },
        {
          id: 8,
          name: 'Улыбайся Ветру - Иллюзии',
          path: require('@/assets/russian2018/8.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5166631'
        },
        {
          id: 9,
          name: 'uSSSy - Voyage',
          path: require('@/assets/russian2018/9.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/6072236'
        },
        {
          id: 10,
          name: 'Winch - Ignorant Wanderers',
          path: require('@/assets/russian2018/10.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5393450'
        },
        {
          id: 11,
          name: 'WLVS - Дотла II',
          path: require('@/assets/russian2018/11.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/9781392'
        },
        {
          id: 12,
          name: 'Wowod - Nutro',
          path: require('@/assets/russian2018/12.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/10074304'
        },
      ],
    }  
  },
}
</script>