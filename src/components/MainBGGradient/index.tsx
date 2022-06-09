import { useLocation } from 'react-router-dom'

import { BGGradient } from './styles'

const MainBGGradient = () => {
  const { pathname } = useLocation()

  if (pathname !== '/') return null

  return <BGGradient />
}

export default MainBGGradient
