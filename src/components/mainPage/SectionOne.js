import React from 'react';
import FlyingBlocks from './FlyingBlocks';
import myface from '../../img/myface.png'
import './MainPage.css'

import AnchorLink from 'react-anchor-link-smooth-scroll';

const SectionOne = () => {
    return (
        <section className="firstSection" id="about">
            <div className="d-flex justify-content-center wrap containerGrad">
                <div className='uc-shape-devider uc-shape-devider-bottom'>
                </div>
                <FlyingBlocks/>
                <div className="row centered flex-row col-lg-10 maxWidth">
                    <div className="centered flex-column col-lg-6 col-md-7">
                        <div className="verticalCentered">
                            <div className="mainTitle">
                                <h1 className="">
                                    Hi! My name is Jack
                                </h1>
                            </div>
                            <div className='uc-grid-col-addon'>
                                <div className="subTitle">
                                    <span className="">
                                        And i am Junior Front End Developer.
                                    </span>
                                </div>
                                <span className="listTitle">Special skills:</span>

                                    <ul className="customList topGap">
                                        <li><i></i>HTML5</li>
                                        <li><i></i>CSS 3 / SAAS</li>
                                        <li><i></i>ES5 / ES6 / jQuery</li>
                                        <li><i></i>MySQL</li>
                                        <li><i></i>React</li>
                                        <li><i></i>GIT</li>
                                        <li><i></i>English - Pre-Intermediate</li>
                                    </ul>

                                <AnchorLink href="#portfolio" offset='0' className="primaryButton">Lets see portfolio</AnchorLink>
                            </div>
			            </div>
                    </div>
                    <div className="centered flex-column col-lg-6 col-md-5 d-flex">
                        <img className="flyingFace" src={myface} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;