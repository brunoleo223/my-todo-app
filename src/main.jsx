import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CardsProvider } from './Contexts/CardsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CardsProvider>
        <App />
      </CardsProvider>
  </React.StrictMode>,
)
