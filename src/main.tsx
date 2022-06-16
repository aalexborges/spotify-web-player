import React from 'react'
import ReactDOM from 'react-dom/client'

import { isMobile } from 'react-device-detect'
import { BrowserRouter } from 'react-router-dom'

import App from './screens/App'
import MobileMessage from './components/MobileMessage'

import './styles/font.css'
import './styles/global.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>{isMobile ? <MobileMessage /> : <App />}</BrowserRouter>
  </React.StrictMode>
)
