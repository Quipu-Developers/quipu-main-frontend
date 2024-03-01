import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './JoinQuipu.css';
import Error from '../Error/Error';

function JoinQuipu() {
    
    const isRecruiting = true; //모집 기간 여부
    const location = useLocation();

    const [entryType, setEntryType] = useState('newEntry');
    const [hasReviewed, setHasReviewed] = useState(false);
    const [hasPaidFee, setHasPaidFee] = useState(false);

    const [name, setName] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [major, setMajor] = useState('전자전기컴퓨터공학부');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [textAreaContent, setTextAreaContent] = useState('');

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    const [showPopup, setShowPopup] = useState(false);

    const [modalMessage, setModalMessage] = useState('모집기간이 아닙니다.');
    const [modalSubMessage, setModalSubMessage] = useState('다음 모집을 기다려주세요!😭');

    const [reviewed, setReviewed] = useState(false);
    const [paidFee, setPaidFee] = useState(false);

    const [isError, setIsError] = useState(false);

    const canSubmit = isRecruiting && hasReviewed && hasPaidFee;

    const phoneAutoHyphen = (value) => {
        return value
            .replace(/[^0-9]/g, '')  // 숫자 이외의 문자 제거
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")  // 숫자를 그룹화하여 하이픈 추가
            .replace(/(\-{1,2})$/g, "");  // 끝에 하이픈이 1개 또는 2개인 경우 1개로 변경
    };

    const textareaRef = useRef();
    const handleResizeHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
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
        window.location.reload();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            membershipType: entryType,
            name: name,
            studentNumber: studentNumber,
            major: major,
            phoneNumber: phoneNumber,
            textAreaContent: textAreaContent
        };

        axios.post('https://quipu-main-server.site/api/data', formData, {
            headers: {
                'Origin': 'https://uos-quipu.vercel.app'
            },
        }).then(response => {
            setModalMessage('Welcome to Quipu!');
            setModalSubMessage('퀴푸의 회원이 되어주셔서 감사합니다.');
            setShowPopup(true);
        }).catch(error => {
            if (error.response && error.response.status === 400) {
                setModalMessage('잘못된 형식으로 입력되었습니다.');
                setModalSubMessage('다시 확인해 주세요.');
                setShowPopup(true);
            } 
            else if (error.response && error.response.status === 409) {
                setModalMessage('이미 제출하셨습니다.');
                setModalSubMessage('다른 응답을 원하시면 퀴푸에 문의해주세요.');
                setShowPopup(true);
            }
            else {
                setIsError(true);
            }
        });
        return false
    };

    useEffect(() => {
        
        if (location.pathname === '/join-quipu') {
            setShowPopup(!isRecruiting);
        } else {
            setShowPopup(false);
        }
    }, [location]);

    if (isError) {
        return <Error/>;
    }

    return (
        <div>
            <div className="blank-navbar-pc"></div>
            <div className="blank-navbar-mobile"></div>

            {/* JoinQuipu 컨테이너 */}
            <div className="JoinQuipu-container">
                <div className="member">
                    <h1>Join Quipu</h1>

                    {/* 신입/기존 부원 라디오 버튼 */}
                    <div className="field-type">
                        <input
                            type="radio"
                            name="entryType"
                            id="newEntry"
                            checked={entryType === 'newEntry'}
                            onChange={() => { setEntryType('newEntry'); setHasReviewed(false); setHasPaidFee(false); }}
                        />
                        <label htmlFor="newEntry">💻New Entry</label>

                        <input
                            type="radio"
                            name="entryType"
                            id="reEntry"
                            checked={entryType === 'reEntry'}
                            onChange={() => { setEntryType('reEntry'); setHasReviewed(false); setHasPaidFee(false); }}
                        />
                        <label htmlFor="reEntry">🔎Re-Entry</label>
                    </div>

                    {/* 가입 안내 */}
                    <div className="join-notice">
                        <div className="join-notice__icon">
                            <div className="join-notice__icon--top1">
                                <p style={{ color: "red", marginTop: "1.5px", marginLeft: "10px", fontSize: "8px" }}>●</p>
                                <p style={{ color: "#ffd400", marginLeft: "7px", marginTop: "1.5px", fontSize: "8px" }}>●</p>
                                <p style={{ color: "#09ce20", marginLeft: "7px", marginTop: "1.5px", fontSize: "8px" }}>●</p>
                            </div>
                            <div className="join-notice__icon--top2"></div>
                            <div className="join-notice__icon--body">
                                <p>신입부원의 경우 <span style={{ color: '#448FFF' }}>New Entry</span> / <br></br> 기존부원의 경우 <span style={{ color: '#448FFF' }}>Re-Entry</span>로 체크 후</p>
                                <p>지원서 작성해주세요!</p>
                                <p style={{ color: 'whitesmoke' }}>또한, 지원서는 회비 납부 이후 제출바랍니다 :)</p>
                                <p >(신규회원 : <span style={{ fontWeight: 900 }}>20,000</span>원 / 기존회원 : <span style={{ fontWeight: 900 }}>25,000</span>원)</p>
                                <p onClick={() => copyToClipboard('1002-861-110963')}>
                                    우리은행&nbsp;
                                    <span className="account-number">1002-861-110963</span>
                                </p>
                                <p><span style={{ color: '#448FFF' }}>*</span>는 필수입력 칸입니다. </p>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <h2>{entryType === 'newEntry' ? 'For New Entry' : 'For Re-Entry'}</h2>

                    <div className="field">
                        <b>이름 <span style={{ color: '#448FFF' }}>*</span></b>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="field">
                        <b>학번 <span style={{ color: '#448FFF' }}>*</span></b>
                        <input
                            type="tel"
                            maxLength={10}
                            placeholder="2020xxxxxx"
                            value={studentNumber}
                            onChange={(e) => setStudentNumber(e.target.value)} />
                    </div>

                    <div className="field major">
                        <b>학과 <span style={{ color: '#448FFF' }}>*</span></b>
                        <div>
                            <select value={major} onChange={(e) => setMajor(e.target.value)} className="major-dropdown">
                                <option value="공과대학" disabled>🏫 공과대학</option>
                                <option value="전자전기컴퓨터공학부">전자전기컴퓨터공학부</option>
                                <option value="화학공학과">화학공학과</option>
                                <option value="기계정보공학과">기계정보공학과</option>
                                <option value="신소재공학과">신소재공학과</option>
                                <option value="토목공학과">토목공학과</option>
                                <option value="인공지능학과">인공지능학과</option>
                                <option value="컴퓨터과학부">컴퓨터과학부</option>
                                <option value="정경대학" disabled>🏫 정경대학</option>
                                <option value="국제관계학과">국제관계학과</option>
                                <option value="경제학부">경제학부</option>
                                <option value="세무학과">세무학과</option>
                                <option value="사회복지학과">사회복지학과</option>
                                <option value="행정학과">행정학과</option>
                                <option value="경영대학" disabled>🏫 경영대학</option>
                                <option value="경영학부">경영학부</option>
                                <option value="인문대학" disabled>🏫 인문대학</option>
                                <option value="국사학과">국사학과</option>
                                <option value="국어국문학과">국어국문학과</option>
                                <option value="영어영문학과">영어영문학과</option>
                                <option value="중국어문화학과">중국어문화학과</option>
                                <option value="철학과">철학과</option>
                                <option value="자연과학대학" disabled>🏫 자연과학대학</option>
                                <option value="물리학과">물리학과</option>
                                <option value="생명과학과">생명과학과</option>
                                <option value="수학과">수학과</option>
                                <option value="융합응용화학과">융합응용화학과</option>
                                <option value="통계학과">통계학과</option>
                                <option value="환경원예학과">환경원예학과</option>
                                <option value="도시과학대학" disabled>🏫 도시과학대학</option>
                                <option value="건축학부(건축공학)">건축학부(건축공학)</option>
                                <option value="건축학부(건축학)">건축학부(건축학)</option>
                                <option value="공간정보공학과">공간정보공학과</option>
                                <option value="교통공학과">교통공학과</option>
                                <option value="도시공학과">도시공학과</option>
                                <option value="도시사회학과">도시사회학과</option>
                                <option value="도시행정학과">도시행정학과</option>
                                <option value="조경학과">조경학과</option>
                                <option value="환경공학부">환경공학부</option>
                                <option value="소방방재학과">소방방재학과</option>
                                <option value="예술체육대학" disabled>🏫 예술체육대학</option>
                                <option value="디자인학과">디자인학과</option>
                                <option value="스포츠과학과">스포츠과학과</option>
                                <option value="음악학과">음악학과</option>
                                <option value="환경조각학과">환경조각학과</option>
                                <option value="자유융합대학" disabled>🏫 자유융합대학</option>
                                <option value="융합전공학부">융합전공학부</option>
                                <option value="자유전공학부">자유전공학부</option>
                                <option value="첨단융합학부">첨단융합학부</option>
                            </select>
                        </div>
                    </div>

                    <div className="field tel-number">
                        <b>전화번호 <span style={{ color: '#448FFF' }}>*</span></b>
                        <div>
                            <input
                                type="tel"
                                maxLength={13}
                                placeholder="010-xxxx-xxxx"
                                value={phoneAutoHyphen(phoneNumber)}
                                onChange={(e) => setPhoneNumber(phoneAutoHyphen(e.target.value))}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <b>{entryType === 'newEntry' ? '지원동기' : '건의사항'}</b>
                        <textarea
                            ref={textareaRef}
                            onChange={(e) => { setTextAreaContent(e.target.value); handleResizeHeight(e.target.value); }}
                            rows={2}
                            placeholder={entryType === 'newEntry' ? "하고 싶은 활동이 있으시면 작성해 주세요" : "개선을 바라는 점을 적어주세요!"}
                            value={textAreaContent}
                        />
                    </div>
                    <div className="checkbox">
                        <label id="checkbox-label">입력하신 정보가 정확한지 다시 한 번 확인해주세요!</label>
                        <input id="checkbox-input" type="checkbox" checked={reviewed} onChange={handleReviewedChange} />
                    </div>
                    <div className="checkbox">
                        <label id="checkbox-label">폼 제출 전, 회비를 미리 납부해 주시기 바랍니다!</label>
                        <input id="checkbox-input" type="checkbox" checked={paidFee} onChange={handlePaidFeeChange} />
                    </div>

                    {/* 신청 버튼 */}
                    <div className="apply">
                        <button type="button" onClick={(event) => {handleSubmit(event);}} disabled={!canSubmit}
                            className={`apply-button ${!canSubmit ? 'button-disabled' : 'button-enabled'}`}>
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
                                            <img src="/ActivityDetail-img/2023/Study/퀴푸메인웹개발1.png"></img>
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

                    <div className="divider"></div>

                    <h2>FAQ</h2>

                    {/* FAQ 컴포넌트 */}
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
                        <p class="more-detail">*추가 문의사항은 아래 "퀴푸문의사항" 혹은 @uos_qupiu로 문의 바랍니다 :)</p>

                    </div>
                </div>

                <div className="footer">
                    <div className="footer-content">
                        <p>카카오톡&nbsp;&nbsp;|&nbsp;&nbsp;👉<a href="https://open.kakao.com/o/sO45q17f" target="_blank">퀴푸문의사항</a>👈</p>
                        <p>인스타그램&nbsp;&nbsp;|&nbsp;&nbsp;👉<a href="https://www.instagram.com/uos_quipu?igsh=MTVjZTFhaXl6NGRoZQ==" target="_blank">@uos_quipu</a>👈</p>
                        <p>동아리방 위치&nbsp;&nbsp;|&nbsp;&nbsp;학생회관 342호</p>
                        <br></br>
                        <p>Copyright 2024.QUIPU. All rights reserved.</p>
                        <p>study icon designed by Flaticon(Freepik)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default JoinQuipu;

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
            {isExpanded && (
                <div className="expanded-content">
                    {answer}
                </div>
            )}
        </div>
    );
};
