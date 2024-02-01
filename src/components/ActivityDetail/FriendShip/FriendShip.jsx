import React, { useState } from 'react';
import './FriendShip.css';

function FriendShip() {
    const imgs = [,
    "/ActivityDetail-img/2023/FriendShip/친목16.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목15.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목14.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목13.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목12.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목11.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목10.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목9.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목8.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목7.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목6.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목5.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목3.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목2.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목1.jpg",
    "/ActivityDetail-img/2023/FriendShip/2학기개강총회.jpg"]

    const [selectedImg, setSelectedImg] = useState(null);

    const handleImgClick = (img) => {
        setSelectedImg(img);
    };

    const closeModal = () => {
        setSelectedImg(null);
    };



    return (
        <>
            <div className="FriendShip-container">
                {
                    imgs.map(function (img, index) {
                        return (
                            <img onClick={() => handleImgClick(img)}className="FriendShip-img" src={img}></img>
                        )
                    })
                }
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