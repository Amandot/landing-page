'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedPoints() {
  const ref = useRef<THREE.Points>(null!)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3) // Reduced for better performance
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <AnimatedPoints />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default InteractiveBackground