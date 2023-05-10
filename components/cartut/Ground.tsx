import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";
import { useEffect } from "react";

export function Ground() {
    const [roughness, normal] = useLoader(TextureLoader, [
        "./textures/terrain-roughness.jpg",
        "./textures/terrain-normal.jpg",
    ])

    useEffect(() => {
        [roughness, normal].forEach((texture) => {
            texture.wrapS = RepeatWrapping;
            texture.wrapT = RepeatWrapping;
            texture.repeat.set(5,5);
            texture.offset.set(0, 0);
        });

    }, [roughness, normal])
    return (
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial
                normalMap={normal}
                roughnessMap={roughness}
                mirror={0}
                envMapIntensity={0}
                dithering={true}
                color={[0.015, 0.015, 0.015]}
                roughness={0.7}
                blur={[1000, 400]}
                mixBlur={30}
                mixStrength={80}
                mixContrast={1}
                resolution={1024}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                reflectorOffset={0.2}
            />
        </mesh>
    )
}