import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Slider from './Slider.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Slider />
    </StrictMode>,
)
