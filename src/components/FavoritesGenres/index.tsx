import { Container, Image, Title } from './styles'

interface FavoritesGenresProps {
  src: string
  color: string
  title: string
}

const FavoritesGenres = ({ color, src, title }: FavoritesGenresProps) => {
  return (
    <Container to="/search" bg={color}>
      <Title>{title}</Title>

      <Image
        aria-hidden="false"
        draggable="false"
        loading="lazy"
        src={src}
        alt=""
      />
    </Container>
  )
}

export default FavoritesGenres
