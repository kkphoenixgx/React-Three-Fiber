import { useRef } from "react"
import { useFrame } from '@react-three/fiber'

export default function Box(props) {

  const refBox = useRef()

  return (
    <mesh {...props} ref={refBox} >
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}