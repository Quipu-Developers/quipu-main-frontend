import React, { useState } from 'react';
import '../../../App.css';
import './Study.css';

function Study() {
    const Cpp = {
        title: 'C++',
        period: '2022.12 - 2023.02',
        shortDescription: 'C++ 기본 문법 강연',
        longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.",
        leaders: ['최준하']        ,
        members: ['김시은', '김형민', '서진주', '외 8명'],
        allMembers: ['김시은', '김형민', '서진주', '이예나', '이학재', '이해리', '조승호', '차준섭', '최영채', '표성은', '하진혁'],
        image: "/ActivityDetail-img/2023/Study/C++_1-min.png",
        allImgs: ["/ActivityDetail-img/2023/Study/C++_2-min.png",],
    };

    const Python1 = {
        title: 'Python',
        period: '2023.02 - 2023.06',
        shortDescription: 'python 입문 및 활용',
        longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.",
        leaders: ['이예나'],
        members: ['김형민', '남민우', '남현우', '외 8명'],
        allMembers: ['김형민', '남민우', '남현우', '최영채', '전한솔', '최다영', '표성은', '하진혁'],
        image: "/ActivityDetail-img/2023/Study/Python-min.png",
        allImgs: [
        "/ActivityDetail-img/2023/Study/Python1_1-min.png",
        "/ActivityDetail-img/2023/Study/Python1_2-min.png",],
    };

    const Python2 = {
        title: 'Python',
        period: '2023.03 - 2023.06',
        shortDescription: 'python 기본 강연',
        longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.",
        leaders: ['정욱재'],
        members: ['전체'],
        allMembers: ['전체'],
        image: "/ActivityDetail-img/2023/Study/Python-min.png",
        allImgs: ["/ActivityDetail-img/2023/Study/Python2-min.png"],
    };

    const CodingTest23 = {
        title: '코딩테스트',
        period: '2023.06 - 2023.08',
        shortDescription: '코딩테스트 코드 리뷰',
        longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.",
        leaders: ['모용'],
        members: ['이동현', '이예나', '하진혁'],
        allMembers: ['이동현', '이예나', '하진혁'],
        image: "/ActivityDetail-img/2023/Study/Python-min.png",
        allImgs: ["/ActivityDetail-img/2023/Study/코딩테스트-min.png"],
    };

    const QuipuDev = {
        title: '퀴푸 웹 개발',
        period: '2023.10 - 2024.02',
        shortDescription: '퀴푸 홍보용 웹페이지 개발',
        longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.",
        leaders: ['이예나'],
        members: ['김고은', '황민영', '박시현', '외 6명'],
        allMembers: ['김고은', '황민영', '박시현', '차준섭', '김은지', '이제민', '표성은', '박수연', '강형준'],
        image: "/ActivityDetail-img/2023/Study/웹개발_1-min.png",
        allImgs: ["/ActivityDetail-img/2023/Study/웹개발_2-min.jpg",
        "/ActivityDetail-img/2023/Study/웹개발_3-min.jpg",
        "/ActivityDetail-img/2023/Study/웹개발_4-min.jpg",],
    };

    const C = {
        title: 'C언어',
        period: '2023.10 - 2023.11',
        shortDescription: 'c언어 입문 및 코드 리뷰',
        longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.",
        leaders: ['서강훈'],
        members: ['이예나', '이정훈', '조영서', '외 2명'],
        allMembers: ['이예나', '이정훈', '조영서', '차원재', '최다영'],
        image: "/ActivityDetail-img/2023/Study/C_1-min.png",
        allImgs: ["/ActivityDetail-img/2023/Study/C_2-min.png"],
    };

    const Competition = {
        title: 'IT 공모전',
        period: '2023.08 - 2023.11',
        shortDescription: '대한전자공학과 IT창의 챌린지 공모전',
        longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.",
        leaders: ['김형민'],
        members: ['신교윤', '안태성', '정하연'],
        allMembers: ['신교윤', '안태성', '정하연'],
        image: "/ActivityDetail-img/2023/Study/웹개발_1-min.png",
        allImgs: ["/ActivityDetail-img/2023/Study/공모전-min.png"],
    };

    const CodingTest24 = {
        title: '코딩테스트',
        period: '2024.01 - 진행 중',
        shortDescription: '코딩테스트 코드 리뷰',
        longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.",
        leaders: ['이예나'],
        members: ['강형준', '김명준', '김예영', '외 3명'],
        allMembers: ['강형준', '김명준', '김예영', '이제민', '최영채', '표성은'],
        image: "/ActivityDetail-img/2023/Study/Python-min.png",
        allImgs: ["/ActivityDetail-img/2024/Study/코딩테스트-min.jpg",],
    };

    return (
        <>
            <div className="Study-container">
                <StudyCard {...Cpp} />
                <StudyCard {...Python1} />
                <StudyCard {...Python2} />
                <StudyCard {...CodingTest23} />
                <StudyCard {...QuipuDev} />
                <StudyCard {...C} />
                <StudyCard {...Competition} />
                <StudyCard {...CodingTest24} />
            </div>
        </>
    )
}

function StudyCard({ title, period, shortDescription, longDescription, leaders, members, allMembers, image, allImgs}) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="studycard">
            <div className="studycard__top">
                <img className="studycard__img" src={image} />
                <div className="studycard__content">
                    <h3>{title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: shortDescription }}></p>
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
                 title={title} period={period} longDescription={longDescription} leaders={leaders} allMembers={allMembers} image={image} allImgs={allImgs} 
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

function StudyModal({ isOpen, onClose, title, period, longDescription, leaders, allMembers, image, allImgs }) {

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
                            <img className="studycard__img" src={image} />
                            <div className="studycard__content" style={{ margin: '10px' }}>
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
                            <p dangerouslySetInnerHTML={{ __html: longDescription }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;