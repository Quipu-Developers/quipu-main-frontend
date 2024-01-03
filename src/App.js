/*eslint-disable*/

import './App.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="#"><img className="navbar__logo--img" src="/logo_main.png"></img></a>
        </div>
        <ul className="navbar__menu">
          <li><a href="#">home</a></li>
          <li><a href="#">activity</a></li>
          <li><a href="#">recommend site</a></li>
          <li><a href="#">join Quipu</a></li>
        </ul>
      </nav>

      <Object3D className="main-container"></Object3D>

    </div>
  );
}

function Object3D() {

  const scene = new THREE.Scene();
  
  window.innerHeight = window.innerHeight - 80; //네브바 height 제외

  const camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0,0,5);

  const renderer = new THREE.WebGLRenderer({
    alpha : true,
    antialias : true
  });
  renderer.setSize(window.innerWidth, window.innerHeight); 

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 2;
  controls.maxDistance = 5;
  controls.maxPolarAngle = Math.PI / 2;

  const pointLight = new THREE.PointLight(0xffffff, 100);
  pointLight.position.set(1,1,1);
  scene.add(pointLight);

  scene.add(new THREE.PointLightHelper(pointLight, 0.3, 'black'));

  const sphere1 = new THREE.Mesh( new THREE.SphereGeometry( 0.5, 32, 16 ), new THREE.MeshStandardMaterial( { color: "blue" } ) );
  scene.add( sphere1 );

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

export default App;