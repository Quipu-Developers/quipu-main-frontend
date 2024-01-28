import React, { useState } from 'react';
import '../../../App.css';
import './FriendShip.css';

function FriendShip() {
    const imgs = ["/ActivityDetail-img/FriendShip/친목1-min2.jpg",
    "/ActivityDetail-img/FriendShip/친목2-min2.jpg","/ActivityDetail-img/FriendShip/친목1-min2.jpg",
    "/ActivityDetail-img/FriendShip/친목2-min2.jpg","/ActivityDetail-img/FriendShip/친목1-min2.jpg",
    "/ActivityDetail-img/FriendShip/친목2-min2.jpg","/ActivityDetail-img/FriendShip/친목1-min2.jpg",
    "/ActivityDetail-img/FriendShip/친목2-min2.jpg","/ActivityDetail-img/FriendShip/친목1-min2.jpg",
    "/ActivityDetail-img/FriendShip/친목2-min2.jpg","/ActivityDetail-img/FriendShip/친목1-min2.jpg",
    "/ActivityDetail-img/FriendShip/친목2-min2.jpg"]

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