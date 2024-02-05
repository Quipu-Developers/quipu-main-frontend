import React, { useState } from 'react';
import './Study.css';

const 퀴푸포럼웹개발 = {
    year: '2024',
    title: '퀴푸 포럼 웹 개발',
    period: '2024.03 - 2024.08',
    shortDescription: '(모집 예정)',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['이예나', '이제민'],
    members: ['김은지', '차준섭', '표성은', '추가 예정'],
    allMembers: ['이제민', '김은지', '차준섭', '표성은', '추가 예정'],
    mainimage: "/ActivityDetail-img/2024/Study/퀴푸포럼웹개발1.png",
    allImgs: ["/ActivityDetail-img/2024/Study/퀴푸포럼웹개발1.png",],
};

const 코딩테스트2024 = {
    year: '2024',
    title: '코딩테스트 스터디',
    period: '2024.01 - 진행 중',
    shortDescription: '코딩테스트 코드 리뷰',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['이예나'],
    members: ['강형준', '김명준', '김예영', '외 3명'],
    allMembers: ['강형준', '김명준', '김예영', '이제민', '최영채', '표성은'],
    mainimage: "/ActivityDetail-img/2024/Study/코딩테스트스터디1.png",
    allImgs: ["/ActivityDetail-img/2024/Study/코딩테스트스터디2.jpg",],
};

const 퀴푸메인웹개발 = {
    year: '2023',
    title: '퀴푸 메인 웹 개발',
    period: '2023.10 - 2024.02',
    shortDescription: '퀴푸 홍보용 웹페이지 개발',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['이예나'],
    members: ['김고은', '황민영', '박시현', '외 6명'],
    allMembers: ['김고은', '황민영', '박시현', '차준섭', '김은지', '이제민', '표성은', '박수연', '강형준'],
    mainimage: "/ActivityDetail-img/2023/Study/퀴푸메인웹개발1.png",
    allImgs: ["/ActivityDetail-img/2023/Study/퀴푸메인웹개발2.jpg",
        "/ActivityDetail-img/2023/Study/퀴푸메인웹개발3.jpg",
        "/ActivityDetail-img/2023/Study/퀴푸메인웹개발4.jpg",],
};

const C스터디 = {
    year: '2023',
    title: 'C언어 스터디',
    period: '2023.10 - 2023.11',
    shortDescription: 'c언어 입문 및 코드 리뷰',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['서강훈'],
    members: ['이예나', '이정훈', '조영서', '외 2명'],
    allMembers: ['이예나', '이정훈', '조영서', '차원재', '최다영'],
    mainimage: "/ActivityDetail-img/2023/Study/C스터디1.png",
    allImgs: ["/ActivityDetail-img/2023/Study/C스터디2.png"],
};

const 전자장및전기회로강연 = {
    year: '2023',
    title: '전자장 및 전기회로 강연',
    period: '2023.09 - 2023.12',
    shortDescription: '전자장과 전기회로 기본 개념 강연',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['오병규'],
    members: ['전체'],
    allMembers: ['전체'],
    mainimage: "/ActivityDetail-img/2023/Study/전자장및전기회로1.png",
    allImgs: ["/ActivityDetail-img/2023/Study/전자장및전기회로2.png"],
};

const IT공모전 = {
    year: '2023',
    title: 'IT 공모전',
    period: '2023.08 - 2023.11',
    shortDescription: '대한전자공학과 IT창의 챌린지 공모전',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['김형민'],
    members: ['신교윤', '안태성', '정하연'],
    allMembers: ['신교윤', '안태성', '정하연'],
    mainimage: "/ActivityDetail-img/2023/Study/공모전1.png",
    allImgs: ["/ActivityDetail-img/2023/Study/공모전2.png"],
};

const 코딩테스트2023 = {
    year: '2023',
    title: '코딩테스트 스터디',
    period: '2023.06 - 2023.08',
    shortDescription: '코딩테스트 코드 리뷰',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['모용'],
    members: ['이동현', '이예나', '하진혁'],
    allMembers: ['이동현', '이예나', '하진혁'],
    mainimage: "/ActivityDetail-img/2023/Study/코딩테스트스터디1.png",
    allImgs: ["/ActivityDetail-img/2023/Study/코딩테스트스터디2.png"],
};

const Python강연 = {
    year: '2023',
    title: 'Python 강연',
    period: '2023.03 - 2023.06',
    shortDescription: 'python 기본 강연',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['정욱재'],
    members: ['전체'],
    allMembers: ['전체'],
    mainimage: "/ActivityDetail-img/2023/Study/Python강연1.png",
    allImgs: ["/ActivityDetail-img/2023/Study/Python강연2.png"],
};

const Python기초스터디 = {
    year: '2023',
    title: 'Python 기초 스터디',
    period: '2023.02 - 2023.06',
    shortDescription: 'python 입문 및 활용',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['이예나'],
    members: ['김형민', '남민우', '남현우', '외 8명'],
    allMembers: ['김형민', '남민우', '남현우', '최영채', '전한솔', '최다영', '표성은', '하진혁'],
    mainimage: "/ActivityDetail-img/2023/Study/Python기초스터디1.png",
    allImgs: [
        "/ActivityDetail-img/2023/Study/Python기초스터디2.png",
        "/ActivityDetail-img/2023/Study/Python기초스터디3.png",],
};

const Cpp강연 = {
    year: '2023',
    title: 'C++ 강연',
    period: '2022.12 - 2023.02',
    shortDescription: 'C++ 기본 문법 강연',
    goal: "c++ 기본 문법을 접해보는 것을 목표로 하였습니다.",
    details: ["매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다.",
        "매주 스터디룸에서 수업을 듣고 실습을 하였습니다."],
    leaders: ['최준하'],
    members: ['김시은', '김형민', '서진주', '외 8명'],
    allMembers: ['김시은', '김형민', '서진주', '이예나', '이학재', '이해리', '조승호', '차준섭', '최영채', '표성은', '하진혁'],
    mainimage: "/ActivityDetail-img/2023/Study/Cpp스터디1.png",
    allImgs: ["/ActivityDetail-img/2023/Study/Cpp스터디2.png",],
};

function Study({ selectedYear }) {

    const studies = [퀴푸포럼웹개발, 코딩테스트2024, 퀴푸메인웹개발, C스터디, 전자장및전기회로강연, IT공모전, 코딩테스트2023, Python강연, Python기초스터디, Cpp강연 ];

    const filteredStudies = studies.filter(study => study.year === selectedYear);
    
    return (
        <>
            <div className="Study-container">
                {filteredStudies.map(study => (
                    <StudyCard {...study} key={study.title} />
                ))}

                {/*카드들을 왼쪽부터 정렬한 듯 보이도록 빈 카드 추가*/}
                <div className="blank-studycard"></div>
                <div className="blank-studycard"></div>
            </div>
        </>
    )
}

function StudyCard({ title, period, shortDescription, goal, details, leaders, members, allMembers, mainimage, allImgs }) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="studycard">
            <div className="studycard__top">
                <img className="studycard__img" src={mainimage} />
                <div className="studycard__content">
                    <h3>{title}</h3>
                    <p>{shortDescription}</p>
                </div>
            </div>
            <div className="studycard__member--container">
                {
                    leaders.map(function (name, index) {
                        return (
                            <Member name={name} backgroundColor="#1C0093" color='white'></Member>
                        )
                    })
                }
                {
                    members.map(function (name, index) {
                        return (
                            <Member name={name} backgroundColor="#D5D5D5" color='black'></Member>
                        )
                    })
                }
            </div>
            <button className="moreinfo-button" onClick={() => setModalOpen(true)}>📚 MORE INFORMATION</button>

            <StudyModal
                isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                title={title} period={period} goal={goal} details={details} leaders={leaders} allMembers={allMembers} mainimage={mainimage} allImgs={allImgs}
            >
                <button onClick={() => setModalOpen(false)}>Close</button>
            </StudyModal>
        </div>
    );
};

function Member({ name, backgroundColor, color }) {
    return (
        <div className="studycard__member" style={{ backgroundColor, color }}>
            <p>{name}</p>
        </div>
    )
}

function StudyModal({ isOpen, onClose, title, period, goal, details, leaders, allMembers, mainimage, allImgs }) {

    if (!isOpen) return null;

    return (
        <div className="study__modal--container" onClick={onClose}>
            <div className="study__modal">
                <div className="study__modal--bar">
                    <p style={{ color: "red" }}>●</p>
                    <p style={{ color: "#ffd400" }}>●</p>
                    <p style={{ color: "#09ce20" }}>●</p>
                </div>
                <div className="study__modal--content">
                    <div className="study__modal--content-top">
                        <div className="studycard__top" style={{ height: '70%', justifyContent: "start" }}>
                            <img className="studycard__img" src={mainimage} style={{ width: 'auto', marginRight: "20px" }} />
                            <div className="studycard__content" style={{ width: 'auto' }}>
                                <h3>{title}</h3>
                                <p>기간: {period}</p>
                            </div>
                        </div>
                        <div className="studycard__member--container" style={{ height: '30%' }}>
                            {
                                leaders.map(function (name, index) {
                                    return (
                                        <Member name={name} backgroundColor="#1C0093" color='white'></Member>
                                    )
                                })
                            }
                            {
                                allMembers.map(function (name, index) {
                                    return (
                                        <Member name={name} backgroundColor="#D5D5D5" color='black'></Member>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="study__modal--content-bottom">
                        <p className="h10">MORE INFORMATION</p>
                        <div className="h90">
                            <div className="study__modal--img-container">
                                {
                                    allImgs.map(function (src, index) {
                                        return (
                                            <img src={src} className="study__modal--img"></img>
                                        )
                                    })
                                }
                            </div>
                            <div className="study__modal--content-container">
                                <li>Goal</li>
                                <p>▪️ {goal}</p>
                                <li>Details</li>
                                {
                                    details.map(function (detail, index) {
                                        return (
                                            <p>▪️ {detail}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;