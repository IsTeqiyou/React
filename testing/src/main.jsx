import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './m2/file'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card />
  </StrictMode>,
)
   