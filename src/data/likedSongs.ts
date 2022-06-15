import darlin from '../assets/images/albums/darlin.jpg'
import existForLove from '../assets/images/albums/exist-for-love.jpg'
import glassySky from '../assets/images/albums/glassy-sky.jpg'
import lovingYou from '../assets/images/albums/loving-you.jpg'
import mansion from '../assets/images/albums/mansion.jpg'
import miracles from '../assets/images/albums/miracles.jpg'
import tom from '../assets/images/albums/tom.jpg'
import vertigo from '../assets/images/albums/vertigo.jpg'
import yours from '../assets/images/albums/yours.jpg'

interface LikedSongs {
  name: string
  artist: string
  duration: string
  album: { name: string; src: string }
}

const likedSongs: LikedSongs[] = [
  {
    name: 'GLASSY SKY',
    artist: 'Yutaka Yamada',
    album: { src: glassySky, name: 'TVアニメ『東京喰種』ORIGINAL SOUNDTRACK' },
    duration: '4:54',
  },
  {
    name: "Darlin' - Remastered",
    artist: 'The Beach Boys',
    album: { src: darlin, name: 'Wild Honey (Remastered)' },
    duration: '2:14',
  },
  {
    name: 'Yours',
    artist: 'Conan Gray',
    album: { src: yours, name: 'Yours' },
    duration: '3:24',
  },
  {
    name: 'Vertigo',
    artist: 'Raphael Lake',
    album: { src: vertigo, name: 'Indie Soul' },
    duration: '4:05',
  },
  {
    name: 'Paralyzed',
    artist: 'NF',
    album: { src: mansion, name: 'Mansion' },
    duration: '4:30',
  },
  {
    name: 'Loving You',
    artist: 'Seafret',
    album: { src: lovingYou, name: 'Most of Us Are Strangers' },
    duration: '3:15',
  },
  {
    name: "Tom's Dinner",
    artist: 'AnnenMayKantereit, Giant Rooks',
    album: { src: tom, name: "Tom's Diner" },
    duration: '4:29',
  },
  {
    name: 'Exist for Love',
    artist: 'AURORA',
    album: { src: existForLove, name: 'Exist For Love' },
    duration: '4:12',
  },
  {
    name: 'Miracles',
    artist: 'Coldplay',
    album: {
      src: miracles,
      name: 'Unbroken (Original Motion Picture Soundtrack)',
    },
    duration: '3:55',
  },
]

export default likedSongs
