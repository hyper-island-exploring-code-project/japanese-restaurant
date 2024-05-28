import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import HeroSection from './components/HeroSection'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <HeroSection />
  </React.StrictMode>,
)
