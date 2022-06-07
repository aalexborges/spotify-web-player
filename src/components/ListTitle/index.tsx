import { Link } from 'react-router-dom'
import { Container } from './styles'

const ListTitle = ({ title }: { title: string }) => {
  return (
    <Container>
      <h2>
        <Link to="/">{title}</Link>
      </h2>

      <Link to="/">Ver tudo</Link>
    </Container>
  )
}

export default ListTitle
