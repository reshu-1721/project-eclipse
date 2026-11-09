
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Planet() {
  const planet = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (planet.current) {
      planet.current.rotation.y += delta * 0.035;
    }
  });

  return (
    <group>
      <mesh ref={planet}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#14263B"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.08, 64, 64]} />
        <meshBasicMaterial
          color="#557E91"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function Lantern({
  radius,
  speed,
  offset,
  inclination,
}: {
  radius: number;
  speed: number;
  offset: number;
  inclination: number;
}) {
  const station = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!station.current) return;

    const angle = clock.elapsedTime * speed + offset;

    station.current.position.set(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * Math.sin(inclination),
      Math.sin(angle) * radius * Math.cos(inclination)
    );
  });

  return (
    <group ref={station}>
      <mesh>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshBasicMaterial color="#FFD28A" />
      </mesh>

      <pointLight
        color="#FFBB66"
        intensity={2}
        distance={3}
      />
    </group>
  );
}

export default function SpaceScene() {
  return (
    <div className="h-full w-full bg-[#09111F]">
      <Canvas
        camera={{ position: [0, 1.5, 7], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.2} />

        <directionalLight
          position={[5, 3, 5]}
          intensity={0.65}
          color="#BCD1DE"
        />

        <Stars
          radius={100}
          depth={50}
          count={2500}
          factor={4}
          fade
        />

        <Planet />

        <Lantern
          radius={3.1}
          speed={0.16}
          offset={0}
          inclination={0.3}
        />

        <Lantern
          radius={3.5}
          speed={0.12}
          offset={2}
          inclination={1.2}
        />

        <Lantern
          radius={3.8}
          speed={0.09}
          offset={4}
          inclination={2.1}
        />

        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={5}
          maxDistance={12}
        />
      </Canvas>
    </div>
  );
}
