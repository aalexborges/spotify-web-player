import type { AlbumListItemProps } from '../components/AlbumListItem'

import aurora from '../assets/images/aurora.jpg'
import dailyMix1 from '../assets/images/daily-mix-1.jpg'
import likedSongs from '../assets/images/liked-songs.png'
import mixId from '../assets/images/mix-id.jpg'
import mixPop from '../assets/images/mix-pop.jpg'
import mixRelax from '../assets/images/mix-relax.jpg'
import my2020 from '../assets/images/2020.jpg'
import news from '../assets/images/news.jpg'

import likedSongsData from './likedSongs'

const recentlyPlayed: AlbumListItemProps[] = [
  {
    src: likedSongs,
    title: 'Músicas Curtidas',
    text: `${likedSongsData.length} músicas`,
    to: '/collection/tracks',
  },
  {
    src: aurora,
    title: 'This is AURORA',
    text: 'This is AURORA. The essential tracks, all in one playlist.',
  },
  {
    src: mixId,
    title: 'Mix de Imagine Dragons',
    text: 'NF, James Blunt, Sia e mais',
  },
  {
    src: mixPop,
    title: 'Mix pop',
    text: 'Lauv, Hanson, Bruno Mars e mais',
  },
  {
    src: news,
    title: 'Radar de Novidades',
    text: 'Confira os lançamentos dos artistas que você segue e novos singles escolhidos só pra você. Atualiza toda sexta.',
  },
  {
    src: mixRelax,
    title: 'Mix relax',
    text: 'Joji, Mr. Probz, AnnenMayKantereit e mais',
  },
  {
    src: my2020,
    title: 'As mais tocadas no seu 2020',
    text: 'As músicas que você mais curtiu este ano, todas reunidas em uma só playlist.',
  },
  {
    src: dailyMix1,
    title: 'Daily Mix 1',
    text: 'Joji, Shiloh Dynasty, Tate McRae e mais',
  },
]

export default recentlyPlayed
