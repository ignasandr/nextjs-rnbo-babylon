import { ThreeElements } from "@react-three/fiber";

export default function Floor(props: ThreeElements['mesh']) {
    return (
        <mesh {...props} receiveShadow>
            <boxBufferGeometry args={[20,1,10]} />
            <meshPhysicalMaterial color="white" />
        </mesh>
    )
}