
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { Mesh } from "three";

function Shape() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} scale={1.8}>
                <icosahedronGeometry args={[1, 15]} />
                <MeshDistortMaterial
                    color="#18181b" // Dark zinc color, will pick up lighting
                    attach="material"
                    distort={0.4} // Strength, 0 disables the effect (default=1)
                    speed={2} // Speed (default=1)
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden opacity-30 md:opacity-50 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                <Environment preset="city" />
                <ambientLight intensity={0.5} color="#fed7aa" /> {/* Warm ambient light */}
                <directionalLight position={[10, 10, 5]} intensity={1} color="#f97316" /> {/* Orange directional light */}
                <pointLight position={[-10, -10, -5]} intensity={1} color="#fbbf24" /> {/* Amber back light */}
                <Shape />
            </Canvas>
        </div>
    );
}
