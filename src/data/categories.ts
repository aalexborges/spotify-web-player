import type { CategoriesItemProps } from '../components/CategoriesItem'

import afro from '../assets/images/categories/afro.jpg'
import alternatives from '../assets/images/categories/alternatives.jpeg'
import ambient from '../assets/images/categories/ambient.jpg'
import anime from '../assets/images/categories/anime.jpeg'
import api from '../assets/images/categories/api.jpg'
import arabic from '../assets/images/categories/arabic.jpg'
import artists from '../assets/images/categories/artists.jpeg'
import blues from '../assets/images/categories/blues.jpg'
import brasil from '../assets/images/categories/Brasil.jpeg'
import car from '../assets/images/categories/car.jpg'
import christian from '../assets/images/categories/christian.jpeg'
import city from '../assets/images/categories/city.jpeg'
import classic from '../assets/images/categories/classic.jpg'
import composers from '../assets/images/categories/composers.jpg'
import cooking from '../assets/images/categories/cooking.jpg'
import crown from '../assets/images/categories/crown.jpg'
import dance from '../assets/images/categories/dance.jpg'
import decades from '../assets/images/categories/decades.jpg'
import discover from '../assets/images/categories/discover.jpeg'
import equal from '../assets/images/categories/equal.jpg'
import focus from '../assets/images/categories/focus.jpg'
import folk from '../assets/images/categories/folk.jpg'
import freshFriends from '../assets/images/categories/fresh-friends.jpeg'
import funk from '../assets/images/categories/funk.jpeg'
import games from '../assets/images/categories/games.jpg'
import higherGround from '../assets/images/categories/higher-ground.jpg'
import home from '../assets/images/categories/home.jpg'
import indian from '../assets/images/categories/indian.jpg'
import indie from '../assets/images/categories/indie.jpg'
import instrumental from '../assets/images/categories/instrumental.jpg'
import jPop from '../assets/images/categories/j-pop.jpg'
import jazz from '../assets/images/categories/jazz.jpg'
import kids from '../assets/images/categories/kids.png'
import kPop from '../assets/images/categories/k-pop.jpg'
import latina from '../assets/images/categories/latina.jpg'
import lgbt from '../assets/images/categories/lgbt.jpeg'
import live from '../assets/images/categories/live.jpg'
import lol from '../assets/images/categories/lol.jpg'
import metal from '../assets/images/categories/metal.jpg'
import mood from '../assets/images/categories/mood.jpg'
import mpb from '../assets/images/categories/mpb.jpeg'
import netflix from '../assets/images/categories/netflix.jpg'
import newMusic from '../assets/images/categories/new-music.jpg'
import onHigh from '../assets/images/categories/on-high.jpg'
import party from '../assets/images/categories/party.jpg'
import podcast from '../assets/images/categories/podcast.jpg'
import popMix from '../assets/images/categories/pop-mix.png'
import punk from '../assets/images/categories/punk.jpg'
import rb from '../assets/images/categories/r&b.jpg'
import radar from '../assets/images/categories/radar.png'
import reggae from '../assets/images/categories/reggae.jpg'
import relax from '../assets/images/categories/relax.jpg'
import romance from '../assets/images/categories/romance.jpg'
import samba from '../assets/images/categories/samba.jpeg'
import singles from '../assets/images/categories/singles.jpg'
import song from '../assets/images/categories/song.jpg'
import soul from '../assets/images/categories/soul.jpg'
import soundtrack from '../assets/images/categories/soundtrack.jpg'
import summer from '../assets/images/categories/summer.jpeg'
import toSleep from '../assets/images/categories/to-sleep.jpg'
import toTrain from '../assets/images/categories/to-train.jpg'
import topSongsGlobal from '../assets/images/categories/top-songs-global.jpg'
import travel from '../assets/images/categories/travel.png'
import trendMakers from '../assets/images/categories/trend-makers.jpeg'
import welfare from '../assets/images/categories/welfare.jpg'

const categories: CategoriesItemProps[] = [
  { color: '#27856a', name: 'Podcasts', src: podcast },
  { color: '#1E3264', name: 'Feito para você', src: popMix },
  { color: '#8D67AB', name: 'Paradas', src: topSongsGlobal },
  { color: '#e8115b', name: 'Novos lançamentos', src: newMusic },
  { color: '#8D67AB', name: 'Descobrir', src: discover },
  { color: '#1E3264', name: 'Eventos ao vivo', src: live },
  { color: '#B49BC8', name: 'Brasil', src: brasil },
  { color: '#F037A5', name: 'Funk', src: funk },
  { color: '#477D95', name: 'Em casa', src: home },
  { color: '#509BF5', name: 'LGBTQ+', src: lgbt },
  { color: '#477D95', name: 'No carro', src: car },
  { color: '#148A08', name: 'EQUAL', src: equal },
  { color: '#9CF0E1', name: 'Samba & Pagode', src: samba },
  { color: '#A56752', name: 'Bem-estar', src: welfare },
  { color: '#509BF5', name: 'Cristã', src: christian },
  { color: '#D7F27D', name: 'AMPLIFIKA', src: crown },
  { color: '#148A08', name: 'League of Legends', src: lol },
  { color: '#8D67AB', name: 'MPB', src: mpb },
  { color: '#477D95', name: 'Música ambiente', src: ambient },
  { color: '#8D67AB', name: 'Crianças e família', src: kids },
  { color: '#1E3264', name: 'RADAR', src: radar },
  { color: '#DC148C', name: 'Dance / Eletrônica', src: dance },
  { color: '#608108', name: 'Indie', src: indie },
  { color: '#E1118B', name: 'Música latina', src: latina },
  { color: '#AF2896', name: 'Em alta', src: onHigh },
  { color: '#8D67AB', name: 'Seu astral', src: mood },
  { color: '#EB1E32', name: 'API Heritage Month', src: api },
  { color: '#AF2896', name: 'Festa', src: party },
  { color: '#477D95', name: 'Relax', src: relax },
  { color: '#8C1932', name: 'Romance', src: romance },
  { color: '#1E3264', name: 'Para dormir', src: toSleep },
  { color: '#0D73EC', name: 'Fresh Finds', src: freshFriends },
  { color: '#777777', name: 'Para treinar', src: toTrain },
  { color: '#503750', name: 'Foco', src: focus },
  { color: '#509BF5', name: 'Décadas', src: decades },
  { color: '#1E3264', name: 'Reggae', src: reggae },
  { color: '#B49BC8', name: 'Cidades', src: city },
  { color: '#DC148C', name: 'R&B', src: rb },
  { color: '#148A08', name: 'K-pop', src: kPop },
  { color: '#477D95', name: 'Instrumental', src: instrumental },
  { color: '#A0C3D2', name: 'Netflix', src: netflix },
  { color: '#AF2896', name: 'Trilhas Sonoras', src: soundtrack },
  { color: '#1E3264', name: 'Jazz', src: jazz },
  { color: '#8D67AB', name: 'Clássico', src: classic },
  { color: '#F59B23', name: 'Criadores de tendências', src: trendMakers },
  { color: '#1E3264', name: 'Artistas', src: artists },
  { color: '#BA5D07', name: 'Culinária', src: cooking },
  { color: '#2D46B9', name: 'Viagem', src: travel },
  { color: '#FF4632', name: 'Soul', src: soul },
  { color: '#AF2896', name: 'Afro', src: afro },
  { color: '#FFC864', name: 'J-pop', src: jPop },
  { color: '#E13300', name: 'Música Indiana', src: indian },
  { color: '#FF4632', name: 'Spotify Singles', src: singles },
  { color: '#B49BC8', name: 'Alternativa', src: alternatives },
  { color: '#A0C3D2', name: 'Higher Ground', src: higherGround },
  { color: '#1E3264', name: 'Blues', src: blues },
  { color: '#1E3264', name: 'Punk', src: punk },
  { color: '#777777', name: 'Metal', src: metal },
  { color: '#8D67AB', name: 'Árabe', src: arabic },
  { color: '#1E3264', name: 'Folk & acústico', src: folk },
  { color: '#E8115B', name: 'Jogos', src: games },
  { color: '#477D95', name: 'Anime', src: anime },
  { color: '#8C1932', name: 'Compositores', src: composers },
  { color: '#8D67AB', name: 'Música + Papo', src: song },
  { color: '#FFC864', name: 'Verão', src: summer },
]

export default categories
