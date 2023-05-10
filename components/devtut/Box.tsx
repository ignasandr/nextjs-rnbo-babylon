import { ThreeElements } from "@react-three/fiber";

export default function Box(props: ThreeElements['mesh']) {
  return (
    <mesh {...props} receiveShadow={true} castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial  color={"white"} />
    </mesh>
  );
}