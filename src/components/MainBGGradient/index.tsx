import { useLocation } from 'react-router-dom'

import { BGGradient } from './styles'

const MainBGGradient = ({ testId }: { testId?: string }) => {
  const { pathname } = useLocation()

  if (pathname !== '/') return null

  return <BGGradient data-testid={testId} />
}

export default MainBGGradient
