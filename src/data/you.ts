import type { AlbumListItemProps } from '../components/AlbumListItem'

import dailyPath from '../assets/images/daily-path.jpg'
import likedSongs from '../assets/images/liked-songs.png'
import my2020 from '../assets/images/2020.jpg'
import noRepeat from '../assets/images/no-repeat.jpg'
import repeat from '../assets/images/repeat.jpg'
import timeMachine from '../assets/images/time-machine.jpg'

const you: AlbumListItemProps[] = [
  {
    src: noRepeat,
    title: 'No Repeat',
    text: 'As músicas que você está curtindo agora',
  },
  {
    src: timeMachine,
    title: 'Sua Máquina do Tempo',
    text: 'Criamos uma playlist personalizada para você relembrar as músicas que marcaram o seu ano.',
  },
  {
    src: dailyPath,
    title: 'Caminho Diário',
    text: 'Um mix de músicas e notícias feito para você',
  },
  {
    src: repeat,
    title: 'De volta pro repeat',
    text: 'Recordar é viver',
  },
  {
    src: likedSongs,
    title: 'Músicas Curtidas',
    text: '361 músicas',
    to: '/collection/tracks',
  },
  {
    src: my2020,
    title: 'As mais tocadas no seu 2020',
    text: 'As músicas que você mais curtiu este ano, todas reunidas em uma só playlist.',
  },
]

export default you
