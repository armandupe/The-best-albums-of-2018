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
  name: 'albums2019',
  data () {
    return {
      alt: 'album cover',
      images: [
        {
          id: 1,
          name: 'Norma Jean - All Hail',
          path: require('@/assets/albums2019/1.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/8403543'
        },
        {
          id: 2,
          name: 'Tool - Fear Inoculum',
          path: require('@/assets/albums2019/2.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/8527511'
        },
        {
          id: 3,
          name: 'Lingua Ignota - Caligula',
          path: require('@/assets/albums2019/3.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/7553480'
        },
        {
          id: 4,
          name: 'Cult Of Luna - A Dawn To Fear',
          path: require('@/assets/albums2019/4.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/8050749'
        },
        {
          id: 5,
          name: 'Russian Circles - Blood Year',
          path: require('@/assets/albums2019/5.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/7433512'
        },
        {
          id: 6,
          name: 'Big Brave - A Gaze Among Them',
          path: require('@/assets/albums2019/6.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/7164868'
        },
        {
          id: 7,
          name: 'Brutus - Nest',
          path: require('@/assets/albums2019/7.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/6672726'
        },
        {
          id: 8,
          name: 'Batushka - Hospodi',
          path: require('@/assets/albums2019/8.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/7347028'
        },
        {
          id: 9,
          name: 'Dead Kiwis - Systematic Home Run',
          path: require('@/assets/albums2019/9.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/6713441'
        },
        {
          id: 10,
          name: 'Touche Amore - Dead Horse X',
          path: require('@/assets/albums2019/10.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/8275324'
        },
      ],
    }  
  },
}
</script>