import { Container, Image, Title } from './styles'

export interface CategoriesItemProps {
  src: string
  name: string
  color: string
}

const CategoriesItem = ({ color, name, src }: CategoriesItemProps) => {
  return (
    <Container to="/search" bg={color}>
      <Title>{name}</Title>

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

export default CategoriesItem
