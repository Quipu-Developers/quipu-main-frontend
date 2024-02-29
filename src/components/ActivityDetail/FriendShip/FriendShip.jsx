import React, { useState } from 'react';
import './FriendShip.css';

const friendshipImages = [
    { year: '2024', src: "/ActivityDetail-img/2024/FriendShip/친목3.jpg"},
    { year: '2024', src: "/ActivityDetail-img/2024/FriendShip/친목2.jpg"},
    { year: '2024', src: "/ActivityDetail-img/2024/FriendShip/친목1.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목15.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목14.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목13.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목12.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목11.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목10.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목9.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목8.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목7.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목6.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목5.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목3.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/2학기개강총회.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목2.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/FriendShip/친목1.jpg"},
]

function FriendShip({selectedYear}) {

    const [selectedImg, setSelectedImg] = useState(null);

    const handleImgClick = (img) => {
        setSelectedImg(img);
    };

    const closeModal = () => {
        setSelectedImg(null);
    };

    const filteredImages = friendshipImages.filter(image => image.year === selectedYear);

    return (
        <>
            <div className="FriendShip-container">
                {
                    filteredImages.map((image, index) => (
                        <img onClick={() => handleImgClick(image.src)} className="FriendShip-img" src={image.src} key={index}></img>
                    ))
                }
                
                {/*이미지들을 왼쪽부터 정렬한 듯 보이도록 빈 이미지 추가*/}
                <div className="blank-img"></div>
                <div className="blank-img"></div>
            </div>

            {selectedImg && (
                <div className="img__modal--container" onClick={closeModal}>
                    <img src={selectedImg} className="img__modal" />
                </div>
            )}
        </>
    )
}

export default FriendShip;