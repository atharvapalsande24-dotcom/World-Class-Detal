'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { ThreeErrorBoundary } from './ThreeErrorBoundary'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface DentalSceneProps {
  rx: number
  ry: number
  enabled: boolean
}

function DentalScene({ rx, ry, enabled }: DentalSceneProps) {
  const groupRef = useRef<THREE.Group>(null)
  const sphere1Ref = useRef<THREE.Mesh>(null)
  const sphere2Ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!enabled) return
    if (groupRef.current) {
      // Apply mouse parallax
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (rx * Math.PI) / 180,
        0.05
      )
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (ry * Math.PI) / 180,
        0.05
      )
    }
    if (sphere1Ref.current) {
      sphere1Ref.current.rotation.y = clock.getElapsedTime() * 0.2
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.rotation.y = -clock.getElapsedTime() * 0.15
      sphere2Ref.current.rotation.x = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main tooth-inspired sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8} enabled={enabled}>
        <mesh ref={sphere1Ref} position={[0, 0, 0]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial
            color="#0EA5E9"
            distort={0.25}
            speed={1.5}
            roughness={0.05}
            metalness={0.3}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Floating accent sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} enabled={enabled}>
        <mesh ref={sphere2Ref} position={[2.5, 1, -1]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <MeshDistortMaterial
            color="#8B5CF6"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.2}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      {/* Small decorative sphere */}
      <Float speed={3} enabled={enabled}>
        <mesh position={[-2.2, -1, 0.5]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#F59E0B" roughness={0.2} metalness={0.5} />
        </mesh>
      </Float>

      {/* Glass ring */}
      <Float speed={1} enabled={enabled}>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2.2, 0.06, 16, 64]} />
          <meshStandardMaterial color="#38BDF8" transparent opacity={0.4} roughness={0} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  )
}

interface HeroCanvasProps {
  rx?: number
  ry?: number
}

export function HeroCanvas({ rx = 0, ry = 0 }: HeroCanvasProps) {
  const reducedMotion = useReducedMotion()

  return (
    <ThreeErrorBoundary>
      <div className="w-full h-full absolute inset-0" role="img" aria-label="Interactive 3D dental scene">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#0EA5E9" />
          <pointLight position={[0, 10, 0]} intensity={0.6} color="#38BDF8" />
          <pointLight position={[5, -5, 5]} intensity={0.3} color="#8B5CF6" />

          <Stars radius={50} depth={50} count={1000} factor={2} fade speed={reducedMotion ? 0 : 0.5} />

          <DentalScene rx={rx} ry={ry} enabled={!reducedMotion} />
        </Canvas>
      </div>
    </ThreeErrorBoundary>
  )
}
