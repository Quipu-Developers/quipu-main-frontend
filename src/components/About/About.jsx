import React, { useRef, useEffect, useState, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './About.css';

function getRandomColor() {
  let hue;
  const colorType = Math.floor(Math.random() * 3);
  switch (colorType) {
    case 0:
      return `hsl(0, 0%, ${90 + Math.random() * 10}%)`;
    case 1:
      hue = Math.random() < 0.5 ? Math.random() * 30 : 300 + Math.random() * 60;
      break;
    case 2:
      hue = 210 + Math.random() * 30;
      break;
  }
  return `hsl(${hue}, 100%, 50%)`;
}

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
      <meshBasicMaterial color={getRandomColor()} />
    </mesh>
  );
});

function About() {
  const [confettis, setConfettis] = useState([]);

  useEffect(() => {
    const tempConfettis = [];
    for (let i = 0; i < 100; i++) {
      tempConfettis.push({
        position: [Math.random() * 5 - 2.5, Math.random() * 5, Math.random() * 5 - 2.5],
        rotationSpeed: { x: Math.random() * 0.02, y: Math.random() * 0.02 },
      });
    }
    setConfettis(tempConfettis);
  }, []);

  const [backgroundState, setBackgroundState] = useState('');

  const toggleBackground = () => {
    if (backgroundState === 'drain' || backgroundState === '') {
      setBackgroundState('fill');
    } else {
      setBackgroundState('drain');
    }
  };

  return (
    <>
      <div className={`About-container ${backgroundState}`} onClick={toggleBackground}>
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
          <div className="w-90" style={{ marginTop: '40px', flexDirection: 'row' }}>
            <p className="title" style={{ fontSize: '40px' }}>About</p>
            <p style={{ color: 'black' }}>click!</p>
          </div>
          <div className="w-90">
            <p>
              안녕하세요! 서울시립대학교 중앙 컴퓨터 학술 동아리 QUIPU입니다.
              <br></br>
              '퀴푸'는 문자 없이 끈과 매듭으로 정보를 기록하고 전달하는 고대 잉카 제국에서 사용된 시스템을 뜻합니다.
              <br></br>
              이러한 어원에 따른 QUIPU의 핵심 키워드 세 가지를 소개합니다!
            </p>
          </div>
          <div className="w-90" style={{ marginTop: '40px' }}>
            <p className="title" style={{ fontSize: '40px' }}>Our Keyword</p>
          </div>
          <div className="w-90">
            <div className="w-30">
              <p>Potential</p>
            </div>
            <div className="w-60">
              <p>
                퀴푸의 매듭은 각각 다른 정보와 지식을 담고 있듯이, QUIPU 구성원 각자의 잠재력이 모여 더 큰 가치를 창출합니다.
              </p>
            </div>
          </div>
          <div className="w-90 harmony">
            <div className="w-60">
              <p>
                서로 다른 매듭과 실이 하나의 퀴푸를 완성시키듯, QUIPU는 개개인의 다양성을 조화롭게 엮어 공동의 목표를 향해 나아갑니다.
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
                퀴푸에 사용된 다양한 색상과 길이의 실처럼, QUIPU는 다양한 배경과 생각을 가진 사람들이 모여 새로운 아이디어와 혁신을 만들어냅니다.
              </p>
            </div>
          </div>
          <div className="w-90" style={{ marginTop: '40px' }}>
            <p className="title" style={{ fontSize: '40px' }}>Welcome!</p>
          </div>
          <div className="w-90">
            <p>
              QUIPU에서는 프로그래밍 언어 기초 공부, 개발, 공모전 등 컴퓨터와 관련하여 다양하게 스터디를 개설하거나 스터디에 참여할 수 있습니다.
              <br></br>
              자유롭고 협력적인 분위기로 개개인이 성장할 수 있는 환경을 조성하는 것을 목표로 하며, 교내에서 컴퓨터와 관련하여 다양한 경험을 쌓을 수 있도록 노력하고 있습니다.
              <br></br>
              컴퓨터에 관심있는 서울시립대 학우분들 모두 환영합니다!
            </p>
          </div>
          <div className="w-90 leaders" style={{ justifyContent: 'center', marginBottom: '50px'}}>
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