import React from 'react';
//import ContactForm from '../formElements/contactForm';

const Footer = () => {
    return (
        <footer className="white" id="contacts">
            <div className="d-flex justify-content-center">
                <div className="row centered flex-row col-lg-10 maxWidth">
                    <div className="formColumn flex-column col-lg-6 ">
                        <h2 className="centered mx-auto sectionHeading">About me</h2>
                        <div className="headingDivider">
                        </div>
                    </div>
                    <div className="textAbout">
                        <p>I have a good knowledge in HTML5, CSS. Experienced Photoshop / Ilustrator user, work with *.psd/*.sketch layout. I can animate .svg graphics. Fiew years ago i had finished the system administration of local networks course.</p>
                        <p>Since last 2 years I am actively engaged in HTML coding – HTML5, CSS. Have experience of Saas, MySQL, PHP and Java Script (ES5/ES6). In work I use "Chrom developer tools", "phpStorm", "VSCode". I know how to work with GIT, but prefer the bitbucket, because it helps to keep client privacy. A few years ago  worked with Jira and bug tracking Mantis.</p>
                        <p>I love nature, mountain tourism and survival in the wild. Also like to cook interesting dishes and I go bouldering training one times of a week. I like to learn something new and finding the essence of the problem.</p>
                        <p>In a future want to more practice in front-end development and I’ll do my best for it.</p>
                    </div>
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