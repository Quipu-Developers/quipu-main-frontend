import React, { useRef, useState, useEffect, memo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './JoinQuipu.css';
import Error from '../Error/Error';

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
    default:
      hue = 0;
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

const CameraAspectUpdater = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const updateCameraAspect = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', updateCameraAspect);
    updateCameraAspect(); // 초기 실행

    return () => window.removeEventListener('resize', updateCameraAspect);
  }, [camera, gl]); // 의존성 배열에 camera와 gl을 포함시킵니다.

  return null; // 시각적인 요소를 렌더링하지 않는 컴포넌트입니다.
};

function JoinQuipu(props) {
  const isRecruiting = true; //모집 기간 여부
  const location = useLocation();
  const navigate = useNavigate();
  const [confettis, setConfettis] = useState([]);

  const [hasReviewed, setHasReviewed] = useState(false);
  const [hasPaidFee, setHasPaidFee] = useState(false);

  const [name, setName] = useState('');
  const [student_id, setStudent_id] = useState();
  const [major, setMajor] = useState('');
  const [phone_number, setPhone_number] = useState();
  const [motivation, setMotivation] = useState('');
  const [project_description, setProject_description] = useState('');
  const [github_profile, setGithub_profile] = useState('');
  const [github_email, setGithub_email] = useState('');
  const [slack_email, setSlack_email] = useState('');

  const [pdf, setPDF] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const [showPopup, setShowPopup] = useState(false);

  const [modalMessage, setModalMessage] = useState('모집기간이 아닙니다.');
  const [modalSubMessage, setModalSubMessage] = useState('다음 모집을 기다려주세요!😭');

  const [reviewed, setReviewed] = useState(false);
  const [paidFee, setPaidFee] = useState(false);
  const [willing_general_member, setWilling_general_member] = useState(false);

  const [isError, setIsError] = useState(false);

  const canSubmit = isRecruiting && hasReviewed && hasPaidFee;

  const motivationRef = useRef();
  const project_descriptionRef = useRef();

  const handleResizeHeight = () => {
    if (motivationRef.current) {
      motivationRef.current.style.height = 'auto';
      motivationRef.current.style.height = motivationRef.current.scrollHeight + 'px';
    }
  };

  const handlewilling_general_memberChange = (e) => {
    setWilling_general_member(e.target.checked);
  };

  const handleReviewedChange = (e) => {
    setReviewed(e.target.checked);
    setHasReviewed(e.target.checked);
  };

  const handlePaidFeeChange = (e) => {
    setPaidFee(e.target.checked);
    setHasPaidFee(e.target.checked);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    // window.location.reload();
  };

  const handleUploadPdf = (e) => {
    console.log(e.target.files[0]);
    setPDF(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 일반 부원 폼 전송
    if (props.selectedPage === 'general') {
      const formData = {
        name: name,
        student_id: student_id,
        major: major,
        phone_number: phone_number,
        motivation: motivation,
      };

      console.log(formData);

      axios
        .post('http://localhost:3001/data1', formData, {
          headers: {
            'Content-Type': 'application/json',
            Origin: 'https://uos-quipu.vercel.app',
          },
        })
        .then((response) => {
          setModalMessage('Welcome to Quipu!');
          setModalSubMessage('퀴푸의 회원이 되어주셔서 감사합니다.');
          setShowPopup(true);
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            const message = error.response.data;
            setModalMessage(`${message}`);
            setModalSubMessage('다시 확인해 주세요.');
            setShowPopup(true);
          } else if (error.response && error.response.status === 401) {
            const message = error.response.data;
            setModalMessage(`${message}`);
            setModalSubMessage('다시 확인해 주세요.');
            setShowPopup(true);
          } else if (error.response && error.response.status === 409) {
            setModalMessage('이미 제출하셨습니다.');
            setModalSubMessage('다른 응답을 원하시면 퀴푸에 문의해주세요.');
            setShowPopup(true);
          } else if (error.response && error.response.status === 500) {
            setModalMessage('서버 오류입니다.');
            setModalSubMessage('다시 시도해보신 후 퀴푸에 문의해주세요.');
            setShowPopup(true);
          } else {
            setIsError(true);
          }
        });
    }

    //개발 부원 폼 전송
    if (props.selectedPage === 'development') {
      const formData = {
        name: name,
        student_id: student_id,
        major: major,
        phone_number: phone_number,
        motivation: motivation,
        portfolio_pdf: pdf,
        project_description: project_description,
        github_profile: github_profile,
        github_email: github_email,
        slack_email: slack_email,
        willing_general_member: willing_general_member,
      };
      console.log(formData);

      axios
        .post('http://localhost:3001/data2', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Origin: 'https://uos-quipu.vercel.app',
          },
        })
        .then((response) => {
          setModalMessage('Welcome to Quipu!');
          setModalSubMessage('퀴푸의 회원이 되어주셔서 감사합니다.');
          setShowPopup(true);
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            const message = error.response.data;
            setModalMessage(`${message}`);
            setModalSubMessage('다시 확인해 주세요.');
            setShowPopup(true);
          } else if (error.response && error.response.status === 401) {
            const message = error.response.data;
            setModalMessage(`${message}`);
            setModalSubMessage('다시 확인해 주세요.');
            setShowPopup(true);
          } else if (error.response && error.response.status === 409) {
            setModalMessage('이미 제출하셨습니다.');
            setModalSubMessage('다른 응답을 원하시면 퀴푸에 문의해주세요.');
            setShowPopup(true);
          } else if (error.response && error.response.status === 500) {
            setModalMessage('서버에 오류가 발생하였습니다.');
            setModalSubMessage('해결이 되지 않을 경우 퀴푸에 문의해주세요.');
            setShowPopup(true);
          } else {
            setIsError(true);
          }
        });
    }

    return false;
  };

  useEffect(() => {
    if (location.pathname === '/join-quipu') {
      setShowPopup(!isRecruiting);
    } else {
      setShowPopup(false);
    }

    const tempConfettis = [];
    for (let i = 0; i < 60; i++) {
      tempConfettis.push({
        position: [Math.random() * 5 - 2.5, Math.random() * 5, Math.random() * 5 - 2.5],
        rotationSpeed: { x: Math.random() * 0.02, y: Math.random() * 0.02 },
      });
    }
    setConfettis(tempConfettis);
  }, [isRecruiting, location]);

  if (isError) {
    return <Error />;
  }

  return (
    <div className="joinquipu-container">
      <div className="mesh-container">
        <Canvas
          camera={{ fov: 45, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000 }}
        >
          <ambientLight intensity={1} />
          <pointLight position={[-5, 0, 5]} intensity={100} />
          <pointLight position={[0, 10, 0]} intensity={100} />
          <CameraAspectUpdater />

          {confettis.map((confetti, index) => (
            <Confetti
              key={index}
              position={confetti.position}
              rotationSpeed={confetti.rotationSpeed}
            />
          ))}
        </Canvas>
      </div>
      <div className="joinquipu-nav">
        <img
          src={process.env.PUBLIC_URL + '/logo_main.png'}
          onClick={() => navigate('/')}
          alt="로고"
        ></img>
      </div>
      <div className="joinquipu-content">
        {/* 일반 부원 모집 폼 */}
        {props.selectedPage === 'general' && (
          <>
            <div className="joinquipu-notice">
              <img src={process.env.PUBLIC_URL + '/JoinQuipu-img/robot.png'} alt="" />
              <div>
                <p style={{ color: 'black' }}> 환영합니다!</p>
                <p style={{ color: 'black' }}>
                  지원서는 <span style={{ color: 'red' }}>회비 납부 이후</span> 제출바랍니다 :)
                </p>
                <p style={{ color: 'black' }}>(회비 : 20,000원)</p>
                <p
                  style={{ color: 'black' }}
                  onClick={() => {
                    copyToClipboard('1234567');
                  }}
                >
                  납부 계좌 : 카카오뱅크&nbsp;
                  <span className="account-number" style={{ color: '#448FFF' }}>
                    1234567 (예금주 : 김예영)
                  </span>
                </p>
              </div>
            </div>

            <h2>일반 부원</h2>

            <div className="field">
              <b>이름</b>
              <input
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <b>학번</b>
              <input
                type="tel"
                maxLength={10}
                placeholder="2024xxxxxx"
                value={student_id}
                onChange={(e) => setStudent_id(e.target.value)}
              />
            </div>
            <div className="field major">
              <b>학과</b>
              <input
                placeholder="전자전기컴퓨터공학부"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>

            <div className="field tel-number">
              <b>전화번호</b>
              <div>
                <input
                  type="tel"
                  maxLength={13}
                  placeholder="01012345678"
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <b>지원동기 또는 바라는 점</b>
              <textarea
                ref={motivationRef}
                onChange={(e) => {
                  setMotivation(e.target.value);
                  handleResizeHeight(e.target.value);
                }}
                rows={2}
                placeholder={'하고 싶은 활동이나 바라는 점을 적어주세요!'}
                value={motivation}
              />
            </div>
          </>
        )}

        {/* 개발 부원 모집 폼 */}
        {props.selectedPage === 'development' && (
          <>
            <div className="join-notice__icon--body">
              <p style={{ color: 'yellow' }}> 🥳환영합니다!🥳</p>
              <p style={{ color: '#F5F5DC' }}>
                저희 <span style={{ color: '#448FFF' }}>퀴푸 개발팀</span>에 관심을 가져주셔서
                감사합니다
              </p>
              <p style={{ color: '#F5F5DC' }}>제출해주신 지원서는 신중히 검토한 후, </p>
              <p style={{ color: '#F5F5DC' }}>
                합격 여부를<span style={{ color: 'red' }}> 8월 31일 오후 3시</span>에 문자 메세지로
              </p>
              <p style={{ color: '#F5F5DC' }}>안내해 드릴 예절입니다.</p>
              <p style={{ color: '#F5F5DC' }}>
                이는 지원자분들의 역량을{' '}
                <span style={{ color: '#448FFF' }}>평가하기 위함이 아니라,</span>{' '}
              </p>
              <p style={{ color: '#F5F5DC' }}>
                개발에 대한 <span style={{ color: '#448FFF' }}>방향성을 확인하기 위한 것이니</span>{' '}
              </p>
              <p style={{ color: '#F5F5DC' }}>부담 갖지 말고 작성해 주시기 바랍니다.</p>
            </div>

            <h2>개발 부원</h2>

            <div className="field">
              <b>이름</b>
              <input
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <b>학번</b>
              <input
                type="tel"
                maxLength={10}
                placeholder="2024xxxxxx"
                value={student_id}
                onChange={(e) => setStudent_id(e.target.value)}
              />
            </div>

            <div className="field major">
              <b>학과</b>
              <input
                placeholder="전자전기컴퓨터공학부"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>

            <div className="field tel-number">
              <b>전화번호</b>
              <div>
                <input
                  type="tel"
                  maxLength={13}
                  placeholder="01012345678"
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <b>지원동기 또는 바라는 점</b>
              <textarea
                ref={motivationRef}
                onChange={(e) => {
                  setMotivation(e.target.value);
                  handleResizeHeight(e.target.value);
                }}
                rows={2}
                placeholder={'하고 싶은 활동이나 바라는 점을 적어주세요!'}
                value={motivation}
              />
            </div>

            <div className="field">
              <b>지원동기</b>
              <textarea
                ref={motivationRef}
                onChange={(e) => {
                  setMotivation(e.target.value);
                }}
                rows={5}
                placeholder={'본 동아리에서 활동하고자 하는 이유를 구체적으로 말씀해주세요!'}
                value={motivation}
              />
            </div>

            <div className="field">
              <b>프로젝트 소개</b>
              <textarea
                ref={project_descriptionRef}
                onChange={(e) => {
                  setProject_description(e.target.value);
                }}
                rows={7}
                placeholder={
                  '경험해본 프로젝트 중 가장 대표적인 프로젝트에 대한 소개와 기여도 그리고 문제 해결 경험에 대해 구체적으로 설명해주시기 바랍니다.'
                }
                value={project_description}
              />
            </div>

            <div className="field">
              <p>
                <label style={{ fontWeight: 'bold' }}>포토폴리오 PDF</label>
              </p>
              <p>
                <input type="file" accept=".pdf" onChange={handleUploadPdf} />
              </p>
              <p>
                <span style={{ color: '#f0054f' }}> pdf 파일로 올려주세요!</span>
              </p>
            </div>

            <div className="field">
              <b>GitHub 프로필 주소</b>
              <input
                type="text"
                placeholder="https://github.com/Quipu-Developers"
                value={github_profile}
                onChange={(e) => setGithub_profile(e.target.value)}
              />
            </div>

            <div className="field">
              <b>GitHub 이메일</b>
              <input
                type="text"
                placeholder="quipu_github@naver.com"
                value={github_email}
                onChange={(e) => setGithub_email(e.target.value)}
              />
            </div>

            <div className="field">
              <b>Slack 이메일</b>
              <input
                type="text"
                placeholder="quipu_slack@naver.com"
                value={slack_email}
                onChange={(e) => setSlack_email(e.target.value)}
              />
            </div>

            <div className="checkbox">
              <label id="checkbox-label">
                <span style={{ color: '#f0054f' }}>불합격 시 일반 부원</span>으로 가입 희망하신다면
                체크해주세요!
              </label>
              <input
                id="checkbox-input"
                type="checkbox"
                checked={willing_general_member}
                onChange={handlewilling_general_memberChange}
              />
            </div>
          </>
        )}

        <div className="checkbox">
          <label id="checkbox-label">입력하신 정보가 정확한지 다시 한 번 확인해주세요!</label>
          <input
            id="checkbox-input"
            type="checkbox"
            checked={reviewed}
            onChange={handleReviewedChange}
          />
        </div>
        <div className="checkbox">
          <label id="checkbox-label">폼 제출 전, 회비를 미리 납부해 주시기 바랍니다!</label>
          <input
            id="checkbox-input"
            type="checkbox"
            checked={paidFee}
            onChange={handlePaidFeeChange}
          />
        </div>

        {/* 신청 버튼 */}
        <div className="apply">
          <button
            type="button"
            onClick={(event) => {
              handleSubmit(event);
            }}
            disabled={!canSubmit}
            className={`apply-button ${!canSubmit ? 'button-disabled' : 'button-enabled'}`}
          >
            📥 Apply
          </button>
        </div>

        {showPopup && (
          <div className="popup">
            <div className="popup__icon">
              <div className="popup__icon--top"></div>
              <div className="popup__icon--body">
                <div className="popup_content">
                  <div className="popup_img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/ActivityDetail-img/2023/Study/퀴푸메인웹개발1.png'
                      }
                      alt="로고"
                    ></img>
                  </div>
                  <div className="popup_message">
                    <p className="head-message">{modalMessage}</p>
                    <p className="sub-message">{modalSubMessage}</p>
                  </div>
                </div>
                <div className="popup__button-container">
                  <button onClick={handlePopupClose}>닫기</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <h2>FAQ</h2>

        {/* FAQ 컴포넌트 */}
        {props.selectedPage === 'general' && (
          <div className="faq">
            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;문과인데 가입해도 되나요?"
              answer="저희 Quipu는 이과에 국한된 동아리가 아닙니다. 현재 다양한 단과대의 부원들이 있으며 문과분들도 다수 계십니다 :) 이과 분들의 비율이 높지만, 컴퓨터에 관심이 있으신분들 혹은 이과 학우들과 친분을 쌓고 싶으신 분들 모두 환영입니다."
              emoji="🤓"
            />
            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;Quipu 남녀 성비는 어떻게 되나요?"
              answer="23년 2학기 기준 남녀 성비는 남자 3 : 여자 2 였습니다! 특히나 여성 회원분들의 참여도가 높았기 때문에 성비 걱정은 크게 안 하셔도 됩니다!!"
              emoji="🤔"
            />

            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;코딩 지식이 없는데 가입해도 되나요?"
              answer="전혀 상관 없습니다!! 현재 퀴푸에는 코딩 능력자분들도 계시지만 배우고자 들어오신 분들, 관심있어서 들어오신 분들이 더 많습니다! 또한 학술동아리로써 코딩이 아닌 다른 과목의 스터디도 개설 및 참여가 가능합니다 :)"
              emoji="🧐"
            />

            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;동아리방 위치가 어디인가요?"
              answer="학생회관 3층 342호 입니다!"
              emoji="🥸"
            />
            <p class="more-detail">
              *추가 문의사항은 아래 "퀴푸문의사항" 혹은 @uos_qupiu로 문의 바랍니다 :)
            </p>
          </div>
        )}
        {props.selectedPage === 'development' && (
          <div className="faq">
            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;문과인데 개발 부원으로 가입해도 되나요?"
              answer="저희 Quipu는 개발과 프로젝트에 관심이 있고, 과거 프로젝트를 진행했던 경험이 있는 분이시라면 소속과와 관계없이 모두 환영하고 있습니다!!"
              emoji="🤓"
            />

            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;Quipu 남녀 성비는 어떻게 되나요?"
              answer="24년 1학기 기준 남녀 성비는 남자 0 : 여자 0 였습니다! 특히나 여성 회원분들의 참여도가 높았기 때문에 성비 걱정은 크게 안 하셔도 됩니다!!"
              emoji="🤔"
            />

            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;팀 프로젝트 경험이 없는데 가입해도 되나요?"
              answer="전혀 상관없습니다!! 현재 퀴푸에는 팀 프로젝트를 여러 번 경험해 보신 능력자분들도 계시지만 배우고자 들어오신 분들, 관심 있어서 들어오신 분들이 더 많습니다! 함께 프로젝트에 참여하며 보다 체계적으로 포트폴리오도 작성해나갈 수 있을 것입니다 :)"
              emoji="🧐"
            />

            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;개발 및 프로젝트 진행 시 세부적인 팀 구성은 어떻게 되나요?"
              answer="24년 1학기 기준 팀 구성은 프론트엔드, 백엔드, 기획, 디자인 팀으로 나누었습니다!!"
              emoji="😝"
            />

            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;어떤 프로젝트를 진행하게 되며, 기술 스택은 어떻게 되나요?"
              answer="메뉴 바에 있는 quipu Dev를 참고하시면 됩니다!!"
              emoji="😏"
            />

            <FAQ
              question="Q.&nbsp;&nbsp;&nbsp;&nbsp;동아리방 위치가 어디인가요?"
              answer="학생회관 3층 342호 입니다!"
              emoji="🥸"
            />
            <p class="more-detail">
              *추가 문의사항은 아래 "퀴푸문의사항" 혹은 @uos_qupiu로 문의 바랍니다 :)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default memo(JoinQuipu);

const FAQ = ({ question, answer, emoji }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`question ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="question-content">
        <div className="title-container">
          <div className="question-title">{question}</div>
        </div>
        <div className="emoji-container">
          <div className="emoji">{emoji}</div>
        </div>
      </div>
      {isExpanded && <div className="expanded-content">{answer}</div>}
    </div>
  );
};
