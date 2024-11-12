import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './m2/file'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
