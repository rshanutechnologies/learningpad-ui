import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function VideoPlane({ src }) {
  const meshRef = useRef();
  const videoRef = useRef(document.createElement("video"));

  useEffect(() => {
    const video = videoRef.current;

    video.src = src;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = false;
    video.playsInline = true;
    video.play();

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;

    meshRef.current.material.map = texture;
  }, [src]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[6, 3.5]} />
      <meshBasicMaterial toneMapped={false} />
    </mesh>
  );
}
