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

<style lang="scss">

</style>

<script>
export default {
  name: 'albums2018',
  data () {
    return {
      alt: 'album cover',
      images: [
        {
          id: 1,
          name: 'KEN Mode - Loved',
          path: require('@/assets/albums2018/1.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/6772283'
        },
        {
          id: 2,
          name: 'The Armed - Only Love',
          path: require('@/assets/albums2018/2.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5131311'
        },
        {
          id: 3,
          name: 'Zapruder - Zapruder',
          path: require('@/assets/albums2018/3.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5744531'
        },
        {
          id: 4,
          name: 'Zeal & Ardor - Stranger Fruit',
          path: require('@/assets/albums2018/4.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5409511'
        },
        {
          id: 5,
          name: 'Author & Punisher - Beastland',
          path: require('@/assets/albums2018/5.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5552570'
        },
        {
          id: 6,
          name: 'Baptists - Beacon Of Faith',
          path: require('@/assets/albums2018/6.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5231290'
        },
        {
          id: 7,
          name: 'Birds In Row - We Already Lost The World',
          path: require('@/assets/albums2018/7.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/6928912'
        },
        {
          id: 8,
          name: 'Madball - For The Cause',
          path: require('@/assets/albums2018/8.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/7293818'
        },
        {
          id: 9,
          name: 'Moderator - Sinners Syndrome',
          path: require('@/assets/albums2018/9.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5288889'
        },
        {
          id: 10,
          name: 'Night Verses - From The Gallery Of Sleep',
          path: require('@/assets/albums2018/10.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5249512'
        },
        {
          id: 11,
          name: 'Palm - To Live Is to Die, To Die Is to Live',
          path: require('@/assets/albums2018/11.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5679214'
        },
        {
          id: 12,
          name: 'Harms Way - PostHuman',
          path: require('@/assets/albums2018/12.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/4866906'
        },
        {
          id: 13,
          name: 'The Prodigy - No Tourists',
          path: require('@/assets/albums2018/13.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5986868'
        },
        {
          id: 14,
          name: 'Sandrider - Armada',
          path: require('@/assets/albums2018/14.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5461273'
        },
        {
          id: 15,
          name: 'Sumac - Love In Shadow',
          path: require('@/assets/albums2018/15.jpg'),
          album: 'https://bandcamp.com/EmbeddedPlayer/album=1884865545/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
        },
        {
          id: 16,
          name: 'Sectioned - Annihilated',
          path: require('@/assets/albums2018/16.jpg'),
          album: 'https://bandcamp.com/EmbeddedPlayer/album=118191513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
        },
        {
          id: 17,
          name: 'Sick Of It All - Wake The Sleeping Dragon',
          path: require('@/assets/albums2018/17.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5782851'
        },
        {
          id: 18,
          name: 'Svartidaudi - Revelations Of The Red Sword',
          path: require('@/assets/albums2018/18.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/6232465'
        },
        {
          id: 19,
          name: 'Terror - Total Retaliation',
          path: require('@/assets/albums2018/19.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/6721230'
        },
        {
          id: 20,
          name: 'The Ocean - Phanerozoic I Palaeozoic',
          path: require('@/assets/albums2018/20.jpg'),
          album: 'https://music.yandex.ru/iframe/#album/5680584'
        },
      ],
    }  
  },
}
</script>
