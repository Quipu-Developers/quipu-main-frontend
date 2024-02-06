import React, { useRef, useEffect, useState, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './About.css';

const Confetti = memo(({ position, rotationSpeed }) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += rotationSpeed.x;
    mesh.current.rotation.y += rotationSpeed.y;
    mesh.current.position.y -= 0.02;
    if (mesh.current.position.y < -5) {
      mesh.current.position.y = 5;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <planeGeometry args={[0.1, 0.1, 1, 1]} />
      <meshBasicMaterial color={`hsl(${Math.random() * 360}, 100%, 50%)`} />
    </mesh>
  );
});

function About() {
  const [confettis, setConfettis] = useState([]);

  useEffect(() => {
    const tempConfettis = [];
    for (let i = 0; i < 200; i++) {
      tempConfettis.push({
        position: [Math.random() * 5 - 2.5, Math.random() * 5, Math.random() * 5 - 2.5],
        rotationSpeed: { x: Math.random() * 0.02, y: Math.random() * 0.02 },
      });
    }
    setConfettis(tempConfettis);
  }, []);

  return (
    <>
      <div className="About-container">
        <Canvas
          camera={{ fov: 45, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000 }}
        >
          <ambientLight intensity={1} />
          <pointLight position={[-5, 0, 5]} intensity={100} />
          <pointLight position={[0, 10, 0]} intensity={100} />

          {confettis.map((confetti, index) => (
            <Confetti key={index} position={confetti.position} rotationSpeed={confetti.rotationSpeed} />
          ))}
        </Canvas>

        <div className="About-content">
          <div className="w-90">
            <p>
              안녕하세요! 서울시립대학교 중앙 컴퓨터 학술 동아리 QUIPU입니다.
              <br></br>
              'Quipu'는 문자 없이 끈과 매듭으로 정보를 기록하고 전달하는 고대 잉카 제국에서 사용된 시스템을 뜻합니다.
              <br></br>
              이 어원에 영감을 받아 QUIPU는 다음 세 가지를 핵심 키워드로 삼고 있습니다.
            </p>
          </div>
          <div className="w-90">
            <div className="w-30">
              <p>Potential</p>
            </div>
            <div className="w-60">
              <p>
                Quipu의 매듭은 각각 다른 정보와 지식을 담고 있듯이, 동아리 구성원 각자의 잠재력이 모여 더 큰 가치를 창출합니다.
              </p>
            </div>
          </div>
          <div className="w-90">
            <div className="w-60">
              <p>
                서로 다른 매듭과 실이 하나의 Quipu를 완성시키듯, 동아리는 개개인의 다양성을 조화롭게 엮어 공동의 목표를 향해 나아갑니다.
              </p>
            </div>
            <div className="w-30">
              <p>Harmony</p>
            </div>
          </div>
          <div className="w-90">
            <div className="w-30">
              <p>Variety</p>
            </div>
            <div className="w-60">
              <p>
                Quipu에 사용된 다양한 색상과 길이의 실처럼, 동아리는 다양한 배경과 생각을 가진 사람들이 모여 새로운 아이디어와 혁신을 만들어냅니다.
              </p>
            </div>
          </div>
          <div className="w-90">
            <p>
              QUIPU에서는 프로그래밍 언어 기초 공부, 개발, 공모전 등 컴퓨터와 관련하여 다양하게 스터디를 개설하거나 참여할 수 있습니다.
              <br></br>
              창의적이고 협력적인 분위기로 개개인이 성장할 수 있는 환경을 조성하는 것을 목표로 하며, 교내에서 다양하게 컴퓨터에 관련한 활동 경험을 쌓을 수 있도록 노력하고 있습니다.
              <br></br>
              컴퓨터에 관심있는 서울시립대 학우분들 모두 환영합니다!
            </p>
          </div>
          <div className="w-90">
              <p>회장 차준섭&nbsp;|&nbsp;</p>
              <p>부회장 하진혁&nbsp;|&nbsp;</p>
              <p>총무 정민욱</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(About);