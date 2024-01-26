import React, { useState } from 'react';
import '../../App.css';
import './ActivityDetail.css';

function ActivityDetail() {
    const studyInfo = {
        description: '퀴푸 홍보용 홈페이지 개발',
        leaders: ['이예나'],
        members: ['김고은', '이제민', '외 8명'],
        image: "/ActivityDetail-img/Study/퀴푸홈페이지웹개발-min.png",
        title: '퀴푸 웹 개발',
        period: '기간: 2023.10 - 2024.02',
        allLeaders: ['이예나'],
        allMembers: ['김고은', '황민영', '박시현', '차준섭', '김은지', '이제민', '표성은', '박수연', '강형준'],
        allImgs: ["/ActivityDetail-img/Study/퀴푸홈페이지웹개발-min.png",
            "/ActivityDetail-img/Study/퀴푸홈페이지웹개발-min.png",
            "/ActivityDetail-img/Study/퀴푸홈페이지웹개발-min.png"]
    };

    return (
        <>
            <div className="blank-navbar"></div>
            <div className="ActivityDetail-container">
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

export default ActivityDetail;

function StudyCard({ description, leaders, members, image, title, period, allLeaders, allMembers, allImgs }) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="studycard">
            <div className="studycard__top">
                <img className="studycard__img" src={image} />
                <div className="studycard__content">
                    <h3>{title}</h3>
                    <p>{description}</p>
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
                image={image} title={title} period={period} allLeaders={allLeaders} allMembers={allMembers} allImgs={allImgs}
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

function StudyModal({ isOpen, onClose, image, title, period, allLeaders, allMembers, allImgs }) {

    if (!isOpen) return null;

    return (
        <div className="modal-container" onClick={onClose}>
            <div className="modal">
                <div className="modal__bar"></div>
                <div className="modal__content">
                    <div className="modal__content--top">
                        <div className="studycard__top">
                            <img className="studycard__img" src={image} />
                            <div className="studycard__content">
                                <h3>{title}</h3>
                                <p>{period}</p>
                            </div>
                        </div>
                        <div className="studycard__member--container">
                            {
                                allLeaders.map(function (name, index) {
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
                    <div className="modal__content--bottom">
                        <div className="w-20">
                            <p>MORE<br></br>INFORMATION</p>
                        </div>
                        <div className="w-80">
                            <div className="modal__img--container">
                                {
                                    allImgs.map(function (src, index) {
                                        return (
                                            <img src={src} className="modal__img"></img>
                                        )
                                    })
                                }
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat impedit, sint nobis necessitatibus non ipsum tenetur esse fuga quod beatae, numquam eveniet atque obcaecati cumque neque accusamus ducimus rem.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};