"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { Mesh } from "three";

function SmallShape({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.3;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.4}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#16a34a"
                    roughness={0.3}
                    metalness={0.6}
                    transparent
                    opacity={0.7}
                />
            </mesh>
        </Float>
    );
}

function Sphere({ position, scale }: { position: [number, number, number]; scale: number }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#166534"
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.5}
                />
            </mesh>
        </Float>
    );
}

function Ring({ position, scale }: { position: [number, number, number]; scale: number }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
            meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <torusGeometry args={[1, 0.3, 16, 32]} />
                <meshStandardMaterial
                    color="#22c55e"
                    roughness={0.4}
                    metalness={0.5}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden opacity-50 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
                <Environment preset="studio" />
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={0.5} />

                {/* Small scattered shapes */}
                <SmallShape position={[-4, 2, -2]} scale={0.4} speed={1.2} />
                <SmallShape position={[4, -1, -1]} scale={0.3} speed={1.5} />
                <SmallShape position={[3, 2.5, -3]} scale={0.25} speed={1} />
                <SmallShape position={[-3, -2, -2]} scale={0.35} speed={1.3} />

                {/* Spheres */}
                <Sphere position={[-5, 0, -4]} scale={0.5} />
                <Sphere position={[5, 1.5, -3]} scale={0.4} />

                {/* Rings */}
                <Ring position={[0, -3, -5]} scale={0.6} />
                <Ring position={[-2, 3, -4]} scale={0.4} />
            </Canvas>
        </div>
    );
}
