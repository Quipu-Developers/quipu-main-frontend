import React, { useState } from 'react';
import '../FriendShip/FriendShip.css';

const mtImages = [
    { year: '2023', src: "/ActivityDetail-img/2023/MT/엠티3.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/MT/엠티2.jpg"},
    { year: '2023', src: "/ActivityDetail-img/2023/MT/엠티1.jpg"},
]

function MT({selectedYear}) {

    const [selectedImg, setSelectedImg] = useState(null);

    const handleImgClick = (img) => {
        setSelectedImg(img);
    };

    const closeModal = () => {
        setSelectedImg(null);
    };

    const filteredImages = mtImages.filter(image => image.year === selectedYear);

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

export default MT;