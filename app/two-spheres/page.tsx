'use client';
import { Sphere } from '@/components/two-spheres/Sphere';
import { Canvas } from '@react-three/fiber';
// import Sphere from '@/components/two-spheres/Sphere'

export default function Five() {
  return (
    <section className="w-screen h-screen">
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Sphere position={[-1.6, 0, 0]} userData-color={'red'}/>
            <Sphere position={[1.6, 0, 0]} userData-color={'blue'}/>
        </Canvas>
    </section>
  )
}