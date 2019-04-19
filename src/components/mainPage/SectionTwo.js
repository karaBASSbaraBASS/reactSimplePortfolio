import React from 'react';
import Timeline from '../timeline/Timeline';

const SectionTwo = () => {
    return (
        <section id="exp" className="aboutMe d-flex white">
            <div className="row d-flex justify-content-center wrap widthAll">
                <div className="centered flex-col col-lg-10 mx-auto">
                    <h2 className="centered mx-auto">Working experience in WEB</h2>
                    <div className="headingDivider"></div>
                </div>
                
                <div className="centered flex-row col-lg-10 mx-auto maxWidth">
                    <Timeline/>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo;