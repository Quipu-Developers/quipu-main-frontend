import React, { useState } from 'react';
import '../../../App.css';
import './FriendShip.css';

function FriendShip() {
    const imgs = ["/ActivityDetail-img/2023/FriendShip/개강총회-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목1-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목2-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목3-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목5-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목6-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목7-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목8-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목9-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목10-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목11-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목12-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목13-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목14-min.jpg",
    "/ActivityDetail-img/2023/FriendShip/친목15-min.jpg",]

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