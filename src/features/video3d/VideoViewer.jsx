import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import VideoPlane from "./VideoPlane";

export default function VideoViewer({ video }) {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={1} />

      <VideoPlane src={video} />

      <OrbitControls enableZoom />
    </Canvas>
  );
}
