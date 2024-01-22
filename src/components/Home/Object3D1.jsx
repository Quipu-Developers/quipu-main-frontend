import React, {useEffect, useState, useRef} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

function Object3D1({ isVisible }) {
  const mountRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(1.2,-2,-5);
  
    const renderer = new THREE.WebGLRenderer({
      alpha : true,
      antialias : true
    });
    renderer.setSize(window.innerWidth, window.innerHeight); 

    mountRef.current.appendChild(renderer.domElement);
  
    //
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 2;
    controls.maxDistance = 5;
    controls.target.set(0.7, 0.2, 0);
    
    // light

    const pointLight1 = new THREE.PointLight(0xffffff, 120);
    pointLight1.position.set(-5,0,5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 140);
    pointLight2.position.set(0,10,0);
    scene.add(pointLight2);

    const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
    scene.add(ambientLight);

    // mesh

    //파란색 구
    const sphere1 = new THREE.Mesh( new THREE.SphereGeometry( 0.7, 32, 32 ), new THREE.MeshPhysicalMaterial( { color: "#9AB9FF", transparent: true, opacity: 0.6, clearcoat: 0.5, clearcoatRoughness: 0.2} ) );
    scene.add( sphere1 );
    sphere1.position.set(-1.5,0.5,-3);

    //보라색 구
    const sphere2 = new THREE.Mesh( new THREE.SphereGeometry( 0.8, 32, 32 ), new THREE.MeshPhysicalMaterial( { color: "#B4B4FF", transparent: true, opacity: 0.6, clearcoat: 0.3, clearcoatRoughness: 0.2} ) );
    scene.add( sphere2 );
    sphere2.position.set(-0.3,-1,-1);

    //민트색 구
    const sphere3 = new THREE.Mesh( new THREE.SphereGeometry( 0.75, 32, 32 ), new THREE.MeshPhysicalMaterial( { color: "#95CFFE", transparent: true, opacity: 0.6, clearcoat: 0.5, clearcoatRoughness: 0.2} ) );
    scene.add( sphere3 );
    sphere3.position.set(2,0.3, -1);
    
    //작은 구
    const sphere4 = new THREE.Mesh( new THREE.SphereGeometry( 0.2, 32, 32 ), new THREE.MeshPhysicalMaterial( { color: "#B0A0CD", transparent: true, opacity: 0.8, clearcoat: 0.5, clearcoatRoughness: 0.2} ) );
    scene.add( sphere4 );
    sphere4.position.set(0.2,0.5,-1);

    //분홍색 링
    const torus1 = new THREE.Mesh(new THREE.TorusGeometry( 0.45, 0.15, 32, 100 ) , new THREE.MeshPhysicalMaterial( { color: "#FFDCFF", transparent: true, opacity: 0.8, clearcoat: 0.2, clearcoatRoughness: 0.2} ));
    scene.add(torus1);
    torus1.position.set(0.3,-0.8,-3);
    torus1.rotation.x = -Math.PI / 5;
    torus1.rotation.y = Math.PI / 5;

    //회색 링
    const torus2 = new THREE.Mesh(new THREE.TorusGeometry( 0.35, 0.1, 32, 100 ) , new THREE.MeshPhysicalMaterial( { color: "#D2D2FF", transparent: true, opacity: 0.8, clearcoat: 0.2, clearcoatRoughness: 0.2} ));
    scene.add(torus2);
    torus2.position.set(2.4,-1.5,-2);
    torus2.rotation.x = -Math.PI / 2;
    torus2.rotation.y = -Math.PI / 5;

    //보라색 링
    const torus3 = new THREE.Mesh(new THREE.TorusGeometry( 0.35, 0.1, 32, 100 ) , new THREE.MeshPhysicalMaterial( { color: "#B4B4FF", transparent: true, opacity: 0.8, clearcoat: 0.2, clearcoatRoughness: 0.2} ));
    scene.add(torus3);
    torus3.position.set(1.5,0.8,-2);
    torus3.rotation.x = -Math.PI / 5;
    torus3.rotation.y = -Math.PI / 5;

    //보라색 캡슐
    const capsule1 = new THREE.Mesh( new THREE.CapsuleGeometry( 0.17, 0.3, 32, 32 ), new THREE.MeshPhysicalMaterial( {color: "#9282CD", transparent: true, opacity: 0.6, clearcoat: 0.6, clearcoatRoughness: 0.2} ) );
    scene.add( capsule1 );
    capsule1.position.set(1.3,-1, -1);
    capsule1.rotation.x = Math.PI / 5;
    capsule1.rotation.z = Math.PI / 4;

    //파란색 캡슐
    const capsule2 = new THREE.Mesh( new THREE.CapsuleGeometry( 0.17, 0.3, 32, 32 ), new THREE.MeshPhysicalMaterial( {color: "#87AFEB", transparent: true, opacity: 0.6, clearcoat: 0.6, clearcoatRoughness: 0.2} ) );
    scene.add( capsule2 );
    capsule2.position.set(2.2,-0.7,-3);
    capsule2.rotation.x = -Math.PI / 12;
    capsule2.rotation.z = -Math.PI / 6;

    setIsLoaded(true);
  
    //
    function animate(){
      torus1.rotation.x += 0.005;
      torus1.rotation.y += 0.005;
      torus2.rotation.x += 0.005;
      torus2.rotation.y += 0.005;
      torus3.rotation.x += 0.005;
      torus3.rotation.y += 0.005;
      capsule1.rotation.x += 0.005;
      capsule1.rotation.y += 0.005;
      capsule2.rotation.x += 0.005;
      capsule2.rotation.y += 0.005;
      
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  
    function onWindowResize(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);
  
    return () => {
      window.removeEventListener('resize', onWindowResize);
      mountRef.current.removeChild(renderer.domElement);
      
      // 모든 메시(mesh)와 라이트(light)를 씬에서 제거하고, 메모리를 해제합니다.
      scene.children.forEach(child => {
        if (child.geometry) {
          child.geometry.dispose(); // Geometry 메모리 해제
        }
        if (child.material) {
          Object.keys(child.material).forEach(prop => {
            if (child.material[prop] && typeof child.material[prop].dispose === 'function') {
              child.material[prop].dispose(); // Material 프로퍼티의 메모리 해제
            }
          });
          child.material.dispose(); // Material 메모리 해제
        }
      });
      
      renderer.dispose(); // 렌더러와 관련된 메모리 해제
      controls.dispose(); // 컨트롤러 메모리 해제
    };
  }, []);

  useEffect(() => {
    if (mountRef.current) {
      mountRef.current.style.display = isVisible ? 'block' : 'none';
    }
  }, [isVisible]);

  return <div ref={mountRef} style={{ display: 'none' }} />;
}

export default Object3D1;