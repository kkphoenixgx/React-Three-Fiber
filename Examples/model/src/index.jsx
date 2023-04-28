import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas camera={{ position: [0, 0, 2] }}>

      <Box position={[-0.75, 0, 0]} name="A" />

    </Canvas>
  </StrictMode>
)