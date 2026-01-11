
"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment, Decal, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "@/data/content";

interface SkillIconProps {
    name: string;
    logo: string;
    position: [number, number, number];
}

function IconTexture({ logo }: { logo: string }) {
    const texture = useTexture(logo);
    return (
        <Decal
            position={[0, 0, 0.2]}
            rotation={[0, 0, 0]}
            scale={1.0}
            map={texture}
        />
    );
}

function IconMesh({ name, logo, position }: SkillIconProps) {
    const meshRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle floating rotation
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

            // Hover effect: faster rotation and scale
            if (hovered) {
                meshRef.current.rotation.y += 0.05;
                meshRef.current.scale.setScalar(1.1);
            } else {
                meshRef.current.scale.setScalar(1);
            }
        }
    });

    return (
        <group
            position={position}
            ref={meshRef}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true); }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false); }}
        >
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <RoundedBox args={[1.5, 1.5, 0.4]} radius={0.3} smoothness={4}>
                    <meshStandardMaterial color="#1f1f22" roughness={0.3} metalness={0.8} />
                    <Suspense fallback={null}>
                        <IconTexture logo={logo} />
                    </Suspense>
                </RoundedBox>
            </Float>
        </group>
    );
}

export function Skills3D() {
    return (
        <div className="h-[400px] w-full relative">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
                <Environment preset="city" />
                <ambientLight intensity={0.5} color="#fed7aa" />
                <pointLight position={[10, 10, 10]} intensity={1} color="#f97316" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#fbbf24" />

                {skills.map((skill, idx) => (
                    <IconMesh
                        key={idx}
                        name={skill.name}
                        logo={skill.logo}
                        position={skill.pos as [number, number, number]}
                    />
                ))}
            </Canvas>
        </div>
    );
}
