'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { ThreeErrorBoundary } from './ThreeErrorBoundary'
import { WebGLFallback } from './WebGLFallback'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import type { Mesh } from 'three'

// We create a procedural 3D dental-inspired shape since GLTF models are placeholders
function ToothMesh({ rotationEnabled }: { rotationEnabled: boolean }) {
  const meshRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current && rotationEnabled) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5} enabled={rotationEnabled}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#0EA5E9"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  )
}

export function IntroToothModel() {
  const reducedMotion = useReducedMotion()

  return (
    <ThreeErrorBoundary>
      <div className="w-64 h-64 md:w-80 md:h-80" role="img" aria-label="3D dental model animation">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
          <directionalLight position={[-5, -5, 3]} intensity={0.4} color="#0EA5E9" />
          <pointLight position={[0, 5, 0]} intensity={0.5} color="#38BDF8" />
          <ToothMesh rotationEnabled={!reducedMotion} />
        </Canvas>
      </div>
    </ThreeErrorBoundary>
  )
}

// Fallback export for when WebGL is not supported
export { WebGLFallback as IntroToothFallback }
