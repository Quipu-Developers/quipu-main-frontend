import React, { useRef, useEffect, memo  } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

extend({ OrbitControls })

const Sphere = (props) => {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  })
  
  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[props.size, 32, 32]} />
      <meshPhysicalMaterial {...props.material} />
    </mesh>
  )
}

const Torus = (props) => {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  })

  useEffect(() => {
    if (mesh.current) {
      mesh.current.rotation.x = props.rotationX;
      mesh.current.rotation.y = props.rotationY;
    }
  }, []);

  return (
    <mesh {...props} ref={mesh}>
      <torusGeometry args={[props.size, props.tube, 32, 100]} />
      <meshPhysicalMaterial {...props.material} />
    </mesh>
  )
}

const Capsule = (props) => {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  })

  useEffect(() => {
    if (mesh.current) {
      mesh.current.rotation.x = props.rotationX;
      mesh.current.rotation.z = props.rotationZ;
    }
  }, []);

  return (
    <mesh {...props} ref={mesh}>
      <capsuleGeometry args={[props.size, props.tube, 32, 32]} />
      <meshPhysicalMaterial {...props.material} />
    </mesh>
  )
}

const Object3D2 = () => {
  return (
    <Canvas
      camera={{ fov: 65, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000, position: [1.2, -2, -3.5] }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[-5, 2, 5]} intensity={130} />
      <pointLight position={[2, 10, 0]} intensity={150} />
      <pointLight position={[0, 0, -10]} intensity={80} />

      {/* 보라색 구 */}
      <Sphere position={[1.3, 2.5, 0.5]} size={0.7} material={{ color: "#B4B4FF", transparent: true, opacity: 0.6, clearcoat: 0.5, clearcoatRoughness: 0.2 }} />
      {/* 파란색 구 */}
      <Sphere position={[-0.3, -1, -0.7]} size={0.8} material={{ color: "#9AB9FF", transparent: true, opacity: 0.6, clearcoat: 0.3, clearcoatRoughness: 0.2 }} />
      {/* 민트색 구 */}
      <Sphere position={[2, 0.3, -1]} size={0.75} material={{ color: "#95CFFE", transparent: true, opacity: 0.6, clearcoat: 0.5, clearcoatRoughness: 0.2 }} />
      {/* 분홍색 링 */}
      <Torus position={[0.3, -0.5, -2]} size={0.45} tube={0.15} material={{ color: "#FFDCFF", transparent: true, opacity: 0.8, clearcoat: 0.2, clearcoatRoughness: 0.2 }} rotationX={-Math.PI / 5} rotationY={Math.PI / 5} />
      {/* 보라색 링 */}
      <Torus position={[1.5, -2, -2]} size={0.35} tube={0.1} material={{ color: "#B4B4FF", transparent: true, opacity: 0.8, clearcoat: 0.2, clearcoatRoughness: 0.2 }} rotationX={-Math.PI / 5} rotationY={-Math.PI / 5} />
      {/* 회색 링 */}
      <Torus position={[1.5, 1, -2]} size={0.35} tube={0.1} material={{ color: "#D2D2FF", transparent: true, opacity: 0.8, clearcoat: 0.2, clearcoatRoughness: 0.2 }} rotationX={-Math.PI / 2} rotationY={-Math.PI / 5} />
      {/* 흰 캡슐 */}
      <Capsule position={[1.1, -1, -1]} size={0.17} tube={0.3} material={{ color: "#EBFBFF", transparent: true, opacity: 0.6, clearcoat: 0.6, clearcoatRoughness: 0.2 }} rotationX={Math.PI / 5} rotationZ={Math.PI / 4} />

      <OrbitControls minDistance={2} maxDistance={5} target={[0.7, 0.2, 0]} />
    </Canvas>
  )
}

// export default Object3D2;
export default memo(Object3D2);