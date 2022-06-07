import { Link } from 'react-router-dom'
import { Container } from './styles'

const ListTitle = ({ title, noMore }: { title: string; noMore?: boolean }) => {
  return (
    <Container>
      <h2>
        <Link to="/">{title}</Link>
      </h2>

      {!noMore && <Link to="/">Ver tudo</Link>}
    </Container>
  )
}

export default ListTitle
