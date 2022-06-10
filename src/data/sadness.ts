import type { AlbumListItemProps } from '../components/AlbumListItem'

import aurora from '../assets/images/aurora.jpg'
import idk from '../assets/images/idk.jpg'
import mix90 from '../assets/images/mix-90.jpg'
import mix2000 from '../assets/images/mix-2000.jpg'
import mixId from '../assets/images/mix-id.jpg'
import mixMelancholy from '../assets/images/mix-melancholy.jpg'
import mixRelax from '../assets/images/mix-relax.jpg'
import sadSongs from '../assets/images/sad-songs.jpg'

const sadness: AlbumListItemProps[] = [
  {
    src: sadSongs,
    title: 'Sad Songs',
    text: 'Beautiful songs to break your heart...',
  },
  {
    src: idk,
    title: 'idk.',
    text: 'We hear you',
  },
  {
    src: aurora,
    title: 'This is AURORA',
    text: 'This is AURORA. The essential tracks, all in one playlist.',
  },
  {
    src: mixMelancholy,
    title: 'Mix melancólico',
    text: 'Joji, Bruno Mars, Cigarettes After Sex e mais',
  },
  {
    src: mixRelax,
    title: 'Mix relax',
    text: 'Joji, Mr. Probz, AnnenMayKantereit e mais',
  },
  {
    src: mix2000,
    title: 'Mix anos 2000',
    text: 'Linkin Park, James Blunt, Sorriso Maroto e mais',
  },
  {
    src: mix90,
    title: 'Mix anos 90',
    text: 'Tim Maia, Bon Jovi, Oasis e mais',
  },
  {
    src: mixId,
    title: 'Mix de Imagine Dragons',
    text: 'NF, James Blunt, Sia e mais',
  },
]

export default sadness
