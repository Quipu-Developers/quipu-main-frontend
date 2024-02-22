import React, { useState } from 'react';
import './Study.css';

const 웹개발입문 = {
    year: '2024',
    title: '웹개발 입문 스터디',
    period: '2024.03 - 2024.08',
    shortDescription: '(모집 예정)',
    goal: "웹 개발에 필요한 개발 지식을 학습하고 팀별로 작은 서비스를 개발합니다.",
    details: ["포럼 웹 개발팀과 스터디를 같이 진행합니다. 전체적인 스터디 커리큘럼은 하단 계획서를 참고해주세요!", "3월에 모집합니다. 많은 관심 부탁드립니다!"],
    links: {'계획서':"https://quipu-web.notion.site/a032f2bed8a3441896dc89a8dfe932e6?pvs=4"},
    leaders: ['이예나', '이제민'],
    members: ['모집 예정'],
    allMembers: ['모집 예정'],
    mainimage: "/ActivityDetail-img/2024/Study/웹개발입문1.png",
    allImgs: ["/ActivityDetail-img/2024/Study/웹개발입문1.png",],
};

const 퀴푸포럼웹개발 = {
    year: '2024',
    title: '퀴푸 포럼 웹 개발',
    period: '2024.03 - 2024.08',
    shortDescription: '(모집 예정)',
    goal: "퀴푸의 기록용 게시판 웹사이트를 제작합니다.",
    details: ["모집분야: 웹 기획, 웹 디자인, 백엔드 개발", "자세한 사항은 하단 회의록 참고해주세요!", "3월에 모집합니다. 많은 관심 부탁드립니다!"],
    links: {"2월 27일 첫 회의록":"https://quipu-web.notion.site/02-27-43ca936739434d4083e1c1c3c0c1e6b8?pvs=4"},
    leaders: ['이예나', '이제민'],
    members: ['김예영', '김은지', '차준섭'],
    allMembers: ['김예영', '김은지', '차준섭'],
    mainimage: "/ActivityDetail-img/2024/Study/퀴푸포럼웹개발1.png",
    allImgs: ["/ActivityDetail-img/2024/Study/퀴푸포럼웹개발1.png",],
};

const 코딩테스트2024 = {
    year: '2024',
    title: '코딩테스트 스터디',
    period: '2024.01 - 진행 중',
    shortDescription: '깃허브를 사용하여 백준 문제 리뷰',
    goal: "코딩테스트에 나오는 기본 개념들을 숙지하고 코드를 짜봅니다.",
    details: ["범위 : 자료구조, 정렬, 탐색, 그리디, 정수론, 그래프, 트리, 조합, 동적계획법, 기하", "1. 매주 개념 하나씩 노션에 정리", "2. 개념과 관련한 백준 5문제씩 풀어 깃허브에 업로드", "3. 메타버스를 활용하여 풀어온 5문제를 대표자가 리뷰하며 코드 소개", "4. 깃허브에 업로드 된 다른 사람의 코드를 PR을 이용하여 리뷰"],
    links: { "노션": "https://cote-review.notion.site/bb652211855e4d02a68f011081e0e100?pvs=4", "깃허브": "https://github.com/COTE-review" },
    leaders: ['이예나'],
    members: ['강형준', '김명준', '김예영', '외 2명'],
    allMembers: ['강형준', '김명준', '김예영', '이제민', '표성은'],
    mainimage: "/ActivityDetail-img/2024/Study/코딩테스트스터디1.png",
    allImgs: ["/ActivityDetail-img/2024/Study/코딩테스트스터디2.jpg",],
};

const 퀴푸메인웹개발 = {
    year: '2023',
    title: '퀴푸 메인 웹 개발',
    period: '2023.10 - 2024.02',
    shortDescription: '퀴푸의 첫 웹 개발 스터디',
    goal: "퀴푸를 대표하는 메인 웹을 제작합니다.",
    details: ["디자인, 프론트엔드, 백엔드 팀을 나누어 매주 1회 팀별 정기모임을 갖습니다.",
        "3개월 동안 인프런 및 유튜브 강의를 들으며 개발관련 내용을 숙지합니다.",
        "2개월 동안 노션에 개발일지를 쓰며 깃허브를 사용해 협업하며 개발을 진행합니다."],
    links: { "노션": "https://quipu-dev.notion.site/main-website-c8661a4633804bfdaadb105c86d2df1e?pvs=4", "깃허브": "https://github.com/Quipu-Developers" },
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
    shortDescription: 'C언어 입문 및 코드 리뷰',
    goal: "C언어의 기본 개념과 문법을 배웁니다",
    details: ["CodeUp 사이트에서 'C언어 기초 100제'를 범위를 나누어 매주 풀고 만나서 리뷰하는 방식으로 진행하였습니다."],
    links: {},
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
    goal: "학부 과정에 필요한 핵심적인 전자장과 전기회로의 기본 개념을 배웁니다.",
    details: ["매주 강의실에서 수업을 듣고 질의응답을 받습니다."],
    links: {},
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
    goal: "무더운 여름 횡단보도 주변에 설치된 파라솔에 쿨링 포그 시스템을 접목하여, 획기적으로 주변 온도를 줄이는 스마트 쿨링 포그 파라솔 제작합니다.",
    details: ["2개월동안 어떤 아이디어를 설계해 구현할지 생각하고 이에 따른 플로우 차트를 구성해 교수님과 면담을 진행합니다.",
        "아이디어 선정 후 온도, 습도, 사람 인식 센서 및 clock에 대해 파트를 나눠 주 2-3회씩 정기적 모임을 갖습니다.",
        "1개월동안 맡은 파트에대해 data sheet 및 유튜브를 통해 설계할 회로에 대한 구상을 합니다. ",
        "회로 설계 후 breadboard에 해당 회로에 맞게 소자를 납땜합니다. (PCB기판 이용 시 가산점)",
        "설계한 회로를 이용한 시제품을 구성 후 발표자료를 만들고 대회장에서 시제품을 동작시키며 발표합니다."
    ],
    links: {},
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
    shortDescription: '백준 문제 코드 리뷰',
    goal: "기본 파이썬 문법을 익히고, 백준 문제를 풀며 코딩테스트에 대비합니다.",
    details: ["매주 동아리방에 모여 풀어온 10문제를 각자 리뷰하며 문제에 대한 접근 방식을 공유합니다."],
    links: {},
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
    shortDescription: 'python 입문 강연',
    goal: "수업과 실습을 통해 파이썬에 입문합니다.",
    details: ["파이썬 기초 문법을 배웁니다.",
        "파이썬과 관련한 터미널의 기본적인 사용방법을 배웁니다."],
    links: {},
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
    goal: "파이썬에 입문하고 간단한 파이썬 프로젝트를 만듭니다.",
    details: ["파이썬 유튜브 강의를 보고 문제를 풀며 서로 질의응답을 합니다.",
        "파이썬 스도쿠 오픈소스를 보며 파이썬 모듈에 대해 공부하고, 전체적인 동작 흐름을 분석합니다",
        "flask를 사용하여 기본적인 웹을 제작해봅니다."],
    links: {},
    leaders: ['이예나'],
    members: ['김형민', '남민우', '남현우', '외 5명'],
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
    goal: "C++에 입문하고 객체 지향 프로그래밍에 대한 기초 지식을 배웁니다.",
    details: ["매주 스터디룸에서 C++에 관련한 문법을 배웁니다.",
        "수업과 관련한 코드 작성 과제를 풀고 해답을 얻으며 질의응답을 합니다."],
    links: {},
    leaders: ['최준하'],
    members: ['김시은', '김형민', '서진주', '외 8명'],
    allMembers: ['김시은', '김형민', '서진주', '이예나', '이학재', '이해리', '조승호', '차준섭', '최영채', '표성은', '하진혁'],
    mainimage: "/ActivityDetail-img/2023/Study/Cpp스터디1.png",
    allImgs: ["/ActivityDetail-img/2023/Study/Cpp스터디2.png",],
};

function Study({ selectedYear }) {

    const studies = [웹개발입문, 퀴푸포럼웹개발, 코딩테스트2024, 퀴푸메인웹개발, C스터디, 전자장및전기회로강연, IT공모전, 코딩테스트2023, Python강연, Python기초스터디, Cpp강연];

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

function StudyCard({ title, period, shortDescription, goal, details, links, leaders, members, allMembers, mainimage, allImgs }) {
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
                title={title} period={period} goal={goal} details={details} links={links} leaders={leaders} allMembers={allMembers} mainimage={mainimage} allImgs={allImgs}
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

function StudyModal({ isOpen, onClose, title, period, goal, details, links, leaders, allMembers, mainimage, allImgs }) {

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
                                {Object.entries(links || {}).map(([key, value]) => (
                                    <p key={key}>▪️ <a href={value} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#8294C4' }}>{key}</a></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;