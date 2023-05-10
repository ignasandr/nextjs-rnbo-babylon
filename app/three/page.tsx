'use client';

import { Canvas } from '@react-three/fiber';
import Floor from '@/components/devtut/Floor';
import Box from '@/components/devtut/Box';
import LightBulb from '@/components/devtut/LightBulb';
import { OrbitControls, TransformControls } from "@react-three/drei";



export default function Three() {
    return (
      <section className="w-screen h-screen">
        <Canvas
            shadows
            className="bg-black"
            camera={{ position: [-6, 7, 7],}}
        >
            <ambientLight color={"white"} intensity={0.3} />
            <LightBulb position={[0, 3, 0]} />
            <Floor position={[6, 2, 0]}/>
            <OrbitControls />
            <Box position={[1, 4, 2]} rotation={[90, 0, 0]}/>
        </Canvas>
      </section>
    )
  }