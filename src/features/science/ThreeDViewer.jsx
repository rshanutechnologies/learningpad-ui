// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }

// function ThreeDViewer({ modelFile }) {
//   return (
//     <Canvas camera={{ position: [0, 2, 5] }}>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[2, 2, 5]} />
//       <Model url={modelFile} />
//       <OrbitControls />
//     </Canvas>
//   );
// }

//export default ThreeDViewer;

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";
import "./ThreeDViewer.css";
function Model({ url }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);

    const size = box.getSize(new THREE.Vector3()).length();
    const scale = 5 / size;
    scene.scale.setScalar(scale);
  }, [scene]);

  return <primitive object={scene} />;
}

function ThreeDViewer({ modelFile }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Suspense fallback={null}>
        <Model url={modelFile} />
        <Environment preset="city" />
      </Suspense>

      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}

export default ThreeDViewer;
