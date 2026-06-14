"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedBlob({ color, position, scale, speed, distort }: any) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!mesh.current) return;
        const time = state.clock.getElapsedTime();
        // Subtle floating movement
        mesh.current.position.y = position[1] + Math.sin(time * 0.5) * 0.5;
        mesh.current.position.x = position[0] + Math.cos(time * 0.3) * 0.5;
    });

    return (
        <Sphere ref={mesh} position={position} scale={scale} args={[1, 64, 64]}>
            <MeshDistortMaterial
                color={color}
                envMapIntensity={1}
                clearcoat={1}
                clearcoatRoughness={0}
                metalness={0.5}
                roughness={0.2}
                distort={distort}
                speed={speed}
            />
        </Sphere>
    );
}

export function LiquidBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen blur-[40px]">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={2} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                <directionalLight position={[-10, -10, -5]} intensity={1} />
                
                {/* Accent Yellow Blob */}
                <AnimatedBlob 
                    color="#FFE600" 
                    position={[-3, 2, -2]} 
                    scale={3} 
                    speed={2} 
                    distort={0.4} 
                />
                
                {/* Accent Red Blob */}
                <AnimatedBlob 
                    color="#FF2A00" 
                    position={[4, -1, -5]} 
                    scale={4} 
                    speed={1.5} 
                    distort={0.5} 
                />

                {/* Dark foreground/shadow blob */}
                <AnimatedBlob 
                    color="#2A2A2A" 
                    position={[0, -3, 0]} 
                    scale={3.5} 
                    speed={1} 
                    distort={0.3} 
                />
            </Canvas>
        </div>
    );
}
