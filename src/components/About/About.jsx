import React, { useEffect } from 'react';
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
                let clipValue = 0;
        
                if (scrollPosition >= startAt && scrollPosition < endAt) {
                    clipValue = 100 - ((scrollPosition - startAt) / sectionHeight) * 100;
                } else if (scrollPosition >= endAt) {
                    clipValue = 0;
                }
        
                section.style.clipPath = `inset(${clipValue}% 0 0 0)`;
            });
        };
        
        aboutContainer.addEventListener('scroll', handleScroll);
    
        return () => {
            aboutContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className="About-container">
                <section>
                    <AboutPage
                        leftColor={'red'}
                        rightColor={'red'}
                        leftDescription={"Hello, QUIPU"}
                        rightDescription={"Hello, QUIPU"}>
                    </AboutPage>
                </section>
                <div className="spacer"></div>
                <section>
                    <AboutPage
                        leftColor={'yellow'}
                        rightColor={'yellow'}
                        leftDescription={"Hello, QUIPU"}
                        rightDescription={"Hello, QUIPU"}>
                    </AboutPage>
                </section>
                <div className="spacer"></div>
                <section>
                    <AboutPage
                        leftColor={'red'}
                        rightColor={'red'}
                        leftDescription={"Hello, QUIPU"}
                        rightDescription={"Hello, QUIPU"}>
                    </AboutPage>
                </section>
                <div className="spacer"></div>
                <section>
                    <AboutPage
                        leftColor={'green'}
                        rightColor={'green'}
                        leftDescription={"Hello, QUIPU"}
                        rightDescription={"Hello, QUIPU"}>
                    </AboutPage>
                </section>
                <div className="spacer"></div>
                <section>
                    <AboutPage
                        leftColor={'black'}
                        rightColor={'black'}
                        leftDescription={"Hello, QUIPU"}
                        rightDescription={"Hello, QUIPU"}>
                    </AboutPage>
                </section>
                <div className="spacer"></div>
                <section>
                    <AboutPage
                        leftColor={'red'}
                        rightColor={'red'}
                        leftDescription={"Hello, QUIPU"}
                        rightDescription={"Hello, QUIPU"}>
                    </AboutPage>
                </section>
            </div>
        </>
    );
}


function AboutPage(props) {
    return (
        <>
            <div className="about-left" style={{ backgroundColor: props.leftColor }}>
                <p>print("{props.leftDescription}")</p>
            </div>
            <div className="about-right" style={{ backgroundColor: props.rightColor }}>
                <h4>About<br></br>QUIPU</h4>
                <p>{props.rightDescription}</p>
            </div>
        </>
    )
}

export default About;