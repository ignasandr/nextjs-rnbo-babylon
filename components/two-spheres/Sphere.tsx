import React, { useRef, useState } from 'react'
import { ThreeElements, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export function Sphere(props: ThreeElements['mesh']) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null!)

  const clr = mesh.current.userData.color;
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {if (active) mesh.current.rotation.x += delta})
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <sphereGeometry />
      <meshStandardMaterial color={active ? clr : hovered ? 'hotpink' : 'grey'} />
    </mesh>
  )
}