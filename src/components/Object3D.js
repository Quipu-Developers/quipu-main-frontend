import React from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

function Object3D() {

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(1,0.5,5);
  
    const renderer = new THREE.WebGLRenderer({
      alpha : true,
      antialias : true
    });
    renderer.setSize(window.innerWidth, window.innerHeight); 
  
    //
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 2;
    controls.maxDistance = 5;
    controls.maxPolarAngle = Math.PI / 2;
    
    // light

    const pointLight1 = new THREE.PointLight(0xffffff, 90);
    pointLight1.position.set(-5,0,5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 160);
    pointLight2.position.set(0,10,0);
    scene.add(pointLight2);

    const ambientLight = new THREE.AmbientLight( 0xffffff, 1.2 );
    scene.add(ambientLight);

    // mesh

    const sphere_left = new THREE.Mesh( new THREE.SphereGeometry( 0.7, 32, 32 ), new THREE.MeshPhysicalMaterial( { color: "#9AB9FF"} ) );
    scene.add( sphere_left );
    sphere_left.position.set(-1.5,0.5,-3);

    const sphere_middle = new THREE.Mesh( new THREE.SphereGeometry( 0.8, 32, 32 ), new THREE.MeshPhysicalMaterial( { color: "#FFD4DF"} ) );
    scene.add( sphere_middle );
    sphere_middle.position.set(-0.3,-1,-1);

    const sphere_right = new THREE.Mesh( new THREE.SphereGeometry( 0.8, 32, 32 ), new THREE.MeshPhysicalMaterial( { color: "#95CFFE"} ) );
    scene.add( sphere_right );
    sphere_right.position.set(2.2,-1.4, -1);

    const cone = new THREE.Mesh( new THREE.ConeGeometry( 0.45, 0.8, 32 ) , new THREE.MeshPhysicalMaterial( { color: "#FFD2FF"} ));
    scene.add(cone);
    cone.position.set(0.6,0.2,-1);
    cone.rotation.z = -Math.PI / 6;
    cone.rotation.x = -Math.PI / 10;

    const capsule = new THREE.Mesh( new THREE.CapsuleGeometry( 0.17, 0.3, 32, 32 ), new THREE.MeshPhysicalMaterial( {color: "#FFF8E1"} ) );
    scene.add( capsule );
    capsule.position.set(2.1,0.8,-1);
    capsule.rotation.x = Math.PI / 5;
    capsule.rotation.z = Math.PI / 4;

    const cube = new THREE.Mesh( new THREE.BoxGeometry( 0.3, 0.3, 0.3 ), new THREE.MeshPhysicalMaterial( {color: '#E0EBFF'} ) ); 
    scene.add( cube );
    cube.position.set(2.6,-0.3,0);
    cube.rotation.x = -Math.PI / 18;
    cube.rotation.y = Math.PI / 6;
    cube.rotation.z = Math.PI / 6;
  
    //
    function animate(){
      requestAnimationFrame(animate);
  
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  
    function onWindowResize(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);
  
    return <div ref={(ref) => ref && ref.appendChild(renderer.domElement)} />;
}

export default Object3D;