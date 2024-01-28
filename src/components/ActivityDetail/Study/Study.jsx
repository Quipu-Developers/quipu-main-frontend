import React, { useState } from 'react';
import '../../../App.css';
import './Study.css';

function Study() {
    const studyInfo = {
        title: '퀴푸 웹 개발',
        period: '2023.10 - 2024.02',
        shortDescription: '퀴푸 홍보용 웹페이지 개발',
        longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.",
        leaders: ['이예나'],
        members: ['김고은', '황민영', '박시현', '외 6명'],
        allMembers: ['김고은', '황민영', '박시현', '차준섭', '김은지', '이제민', '표성은', '박수연', '강형준'],
        image: "/ActivityDetail-img/Study/퀴푸홈페이지웹개발-min.png",
        allImgs: ["/ActivityDetail-img/Study/퀴푸홈페이지웹개발-min.png",
            "/ActivityDetail-img/Study/퀴푸홈페이지웹개발-min.png",
            "/ActivityDetail-img/Study/퀴푸홈페이지웹개발-min.png"],
    };

    return (
        <>
            <div className="Study-container">
                <StudyCard {...studyInfo} />
                <StudyCard {...studyInfo} />
                <StudyCard {...studyInfo} />
                <StudyCard {...studyInfo} />
                <StudyCard {...studyInfo} />
                <StudyCard {...studyInfo} />
                <StudyCard {...studyInfo} />
                <StudyCard {...studyInfo} />
                <StudyCard {...studyInfo} />
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
                            <Member name={name} backgroundColor="#1C0093"></Member>
                        )
                    })
                }
                {
                    members.map(function (name, index) {
                        return (
                            <Member name={name} backgroundColor="#D5D5D5"></Member>
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

function Member({ name, backgroundColor }) {
    return (
        <div className="studycard__member" style={{ backgroundColor }}>
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
                                        <Member name={name} backgroundColor="#1C0093"></Member>
                                    )
                                })
                            }
                            {
                                allMembers.map(function (name, index) {
                                    return (
                                        <Member name={name} backgroundColor="#D5D5D5"></Member>
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