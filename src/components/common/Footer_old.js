import React from 'react';
import ContactForm from '../formElements/contactForm';

const Footer = () => {
    return (
        <footer className="white">
            <div className="row d-flex justify-content-center wrap">
                <div className="row centered flex-row col-lg-10 maxWidth">
                    <div className="formColumn flex-column col-lg-6 ">
                        <h2 className="centered mx-auto sectionHeading">feel free to contact</h2>
                        <div className="headingDivider">
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;