import type { AlbumListItemProps } from '../components/AlbumListItem'

import mix90 from '../assets/images/mix-90.jpg'
import mix2000 from '../assets/images/mix-2000.jpg'
import mix2010 from '../assets/images/mix-2010.jpg'
import mixId from '../assets/images/mix-id.jpg'
import mixJPop from '../assets/images/mix-j-pop.jpg'
import mixMelancholy from '../assets/images/mix-melancholy.jpg'
import mixPop from '../assets/images/mix-pop.jpg'
import mixRelax from '../assets/images/mix-relax.jpg'

const mixes: AlbumListItemProps[] = [
  {
    src: mixPop,
    title: 'Mix pop',
    text: 'Lauv, Hanson, Bruno Mars e mais',
  },
  {
    src: mixId,
    title: 'Mix de Imagine Dragons',
    text: 'NF, James Blunt, Sia e mais',
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
    src: mix2010,
    title: 'Mix anos 2010',
    text: 'Bruno Mars, TK from Ling tosite sigure, Akano e mais',
  },
  {
    src: mixJPop,
    title: 'Mix J-pop',
    text: 'TRUE, Akano, いとうかなこ e mais',
  },
]

export default mixes
