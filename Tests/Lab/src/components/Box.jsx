import { useRef, useState } from "react"
import { useFrame } from '@react-three/fiber'

export default function Box(props) {

  const refBox = useRef()

  const [rotate, setRotate] = useState(false);
  const [hovered, setHovered] = useState(false);


  useFrame((state, delta) => {

    if (rotate) {
      refBox.current.rotation.x += 1 * delta
      refBox.current.rotation.y += 0.5 * delta
      // refBox.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) / 2
    }

  })



  return (
    <mesh {...props} ref={refBox}
      scale={hovered ? [1.1, 1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={() => setRotate(!rotate)}
      onPointerOver={() => { setHovered(true); setRotate(true) }}
      onPointerOut={() => { setHovered(false); setRotate(false) }}
    >
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 0x0000ff : 0x00ff00} wireframe />
    </mesh>
  )
}