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
  name: 'ep2018',
  data () {
    return {
      alt: 'album cover',
      images: [
        {
          id: 1,
          name: 'The Fever 333 - Made An America',
          path: require('@/assets/ep2018/1.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5156765'
        },
        {
          id: 2,
          name: 'Code Orange - The Hurt Will Go On',
          path: require('@/assets/ep2018/2.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5475685'
        },
        {
          id: 3,
          name: 'Converge - Beautiful Ruin',
          path: require('@/assets/ep2018/3.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5476836'
        },
        {
          id: 4,
          name: 'Cryptopsy - Book Of Suffering Tome - II',
          path: require('@/assets/ep2018/4.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5747986'
        },
        {
          id: 5,
          name: 'Every Stranger Looks Like You - I - Levensmoeheid',
          path: require('@/assets/ep2018/5.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5870341'
        },
        {
          id: 6,
          name: 'Nine Inch Nails - Bad Witch',
          path: require('@/assets/ep2018/6.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5369599'
        },
        {
          id: 7,
          name: 'Rotten Sound - Suffer To Abuse',
          path: require('@/assets/ep2018/7.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5057178'
        },
        {
          id: 8,
          name: 'Thou - Rheia Sylvia',
          path: require('@/assets/ep2018/8.jpg'),
          album: 'https://bandcamp.com/EmbeddedPlayer/album=2880169009/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
        },
      ],
    }  
  },
}
</script>