
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.002));

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2.5 : 1.5}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'black' : 'grey'} />
    </mesh>
  );
}

function ThreeComp() {
  return (
    <Canvas style={{ height: '80vh' }}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
 <ambientLight intensity={0.5} />      
        <directionalLight color="yellowgreen" position={[0, 0, 5]} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-2, 3, -1]} />
      <Box position={[1.2, -1, 0]} />
      <Box position={[1.2, 1.7, 0]} />
      <Box position={[-0.8, -1.2, 1]} />
    </Canvas>
  );
}

export default ThreeComp;