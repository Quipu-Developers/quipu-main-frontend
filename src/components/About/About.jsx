import React, { useEffect, useState} from 'react';
import '../../App.css';
import './About.css';

function About() {
    useEffect(() => {
        const aboutContainer = document.querySelector('.About-container');

        const handleScroll = () => {
            const scrollPosition = aboutContainer.scrollTop;
            const viewportHeight = window.innerHeight;

            document.querySelectorAll('.About-container section').forEach((section, index) => {
                const sectionHeight = viewportHeight;
                const startAt = index * sectionHeight;
                const endAt = startAt + sectionHeight;

                if (scrollPosition >= startAt && scrollPosition < endAt) {
                    section.style.opacity = 1;
                } else {
                    section.style.opacity = 0;
                }
            });
        };

        const handleWheel = (e) => {
            aboutContainer.scrollTop += e.deltaY;
        };

        const firstSection = aboutContainer.querySelector('section');
        if (firstSection) {
            firstSection.style.opacity = 1;
        }

        aboutContainer.addEventListener('scroll', handleScroll);
        aboutContainer.addEventListener('wheel', handleWheel);
        aboutContainer.addEventListener('touchmove', handleScroll); 

        return () => {
            aboutContainer.removeEventListener('scroll', handleScroll);
            aboutContainer.removeEventListener('wheel', handleWheel);
            aboutContainer.removeEventListener('touchmove', handleScroll);
        };
    }, []);


    return (
        <>
            <div className="About-container">
                <AboutPage
                    leftColor={'#BECDFF'}
                    rightColor={'#96A5FF'}
                    leftDescription={"Hello, QUIPU"}
                    rightDescription={"안녕하세요! 서울시립대학교 중앙 컴퓨터 학술 동아리 Quipu입니다."}>
                </AboutPage>
                <div className="spacer"></div>
                <AboutPage
                    leftColor={'#96A5FF'}
                    rightColor={'#6495ED'}
                    leftDescription={"Hello, QUIPU"}
                    rightDescription={"'Quipu'는 끈과 매듭만으로 복잡한 정보를 기록하고 전달한 혁신적인 커뮤니케이션 방식입니다. 어원에 따른 QUIPU의 세 가지 핵심 키워드를 소개합니다!"}>
                </AboutPage>
                <div className="spacer"></div>
                <AboutPage
                    leftColor={'#6495ED'}
                    rightColor={'#506EA5'}
                    leftDescription={"Creativity"}
                    rightDescription={"퀴푸는 혁신적인 아이디어를 창출하고 실현하는데 중점을 둡니다."}>
                </AboutPage>
                <div className="spacer"></div>
                <AboutPage
                    leftColor={'#506EA5'}
                    rightColor={'#3C467D'}
                    leftDescription={"Collaboration"}
                    rightDescription={"퀴푸는 함께 협력하여 더 큰 목표를 바라봅니다."}>
                </AboutPage>
                <div className="spacer"></div>
                <AboutPage
                    leftColor={'#3C467D'}
                    rightColor={'black'}
                    leftDescription={"Transmission"}
                    rightDescription={"퀴푸는 배운 것을 내면화하고 공유하여 지식의 가치를 높입니다."}>
                </AboutPage>
                <div className="spacer"></div>
                <AboutPage
                    leftColor={'black'}
                    rightColor={'black'}
                    leftDescription={"Welcome, QUIPU!"}
                    rightDescription={"퀴푸에서는 프로그래밍 언어 공부, 개발, 공모전 등 컴퓨터와 관련한 다양한 스터디를 개설하거나 참여할 수 있습니다. 창의적이고 협력적인 분위기로 개개인이 성장할 수 있는 환경을 만들도록 노력하고 있습니다."}>
                </AboutPage>
                <div className="spacer"></div>
            </div>
        </>
    );
}


function AboutPage(props) {

    const sectionStyle = {
        background: `linear-gradient(to bottom right, ${props.leftColor} 40%, ${props.rightColor} 60%)`
    };

    return (
        <section style={sectionStyle}>
            <div className="about-left">
                <div className="left-text">
                    <p>&#123;</p>
                    <p>"{props.leftDescription}"</p>
                    <p>&#125;</p>
                </div>
            </div>
            <div className="about-right">
                <div className="right-text">
                    <div className="right-title">
                        <p>About QUIPU</p>
                    </div>
                    <div className="right-content">
                        <p>{props.rightDescription}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;