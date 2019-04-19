import React from 'react';
//import ContactForm from '../formElements/contactForm';

const Footer = () => {
    return (
        <footer className="white" id="contacts">
            <div className="d-flex justify-content-center">
                <div className="row centered flex-row col-lg-10 maxWidth">
                    <div className="formColumn flex-column col-lg-6 ">
                        <div className="headingDivider">
                        </div>
                        <div className="contactMail">
                            <p className="centered mx-auto">Feel free to contact me:</p>
                            <a href="mailto:gellertyevhen@gmail.com">gellertyevhen@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;