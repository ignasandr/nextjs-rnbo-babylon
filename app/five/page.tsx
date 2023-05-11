'use client';
import { OrbitControls } from '@react-three/drei';

import { Canvas } from '@react-three/fiber';

export default function Five() {
  return (
    <section className="w-screen h-screen">
        <Canvas>
            <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
            <ambientLight intensity={0.1} color="green" />
            <directionalLight color="blue" position={[0, 0, 5]} />
            <directionalLight color="hotpink" position={[5, 5, 0]} />
            <mesh>
                <sphereGeometry />
                {/* <boxGeometry args={[1, 1, 1]} /> */}
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    </section>
  )
}