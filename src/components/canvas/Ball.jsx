import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  RoundedBox,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef(); // Ref to the mesh for rotation

  // Add rotation animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Slow rotation around the Y-axis
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}> {/* Added ref for rotation */}
        {/* Use RoundedBoxGeometry for rounded edges */}
        <RoundedBox args={[1.5, 1.5, 0.25]} radius={0.1} smoothness={4}> {/* Larger tile with rounded edges */}
          <meshStandardMaterial
            color='#fff8eb' // Tile surface color
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          {/* Apply the decal to the front face of the tile */}
          <Decal
            position={[0, 0, 0.105]} // Slightly offset to place it on the front face
            rotation={[0, 0, 0]}
            scale={[1.4, 1.4]} // Adjusted scale for larger tile
            map={decal}
            flatShading
          />
        </RoundedBox>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;