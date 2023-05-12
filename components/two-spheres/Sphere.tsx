import React, { useRef, useState, useEffect } from 'react'
import { ThreeElements, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export function Sphere(props: ThreeElements['mesh']) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null!)
  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
    return () => {document.body.style.cursor = 'auto'}
  }, [hovered]);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (active) {
      mesh.current.rotation.x += delta * 0.1
      mesh.current.rotation.y += delta * 0.2
      mesh.current.rotation.z += delta * 0.3
    }
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      >
      <sphereGeometry />
      <meshStandardMaterial color={active ? mesh.current.userData.color : hovered ? 'pink' : 'lightgrey'}
        wireframe={active ? true : false}
      />
    </mesh>
  )
}