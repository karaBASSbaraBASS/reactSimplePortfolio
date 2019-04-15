import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/data-random-squares.svg';
import './Header.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            collapsed: true,
            convert: false
        };
    }
    
    toggleNavbar() {
        const currentState = this.state.convert;
        this.setState({
            collapsed: !this.state.collapsed,
            convert: !currentState
        });
    }
    closeNavbar() {
        this.setState({
            collapsed: true,
            convert: false
        });
    }
    render() {
        return (
            <Navbar className="navbar navbar-toggleable-sm navbar-inverse navbar-fixed-top">
                <div className="container maxWidth">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="logo-img" className="logo-img"/>
                            JACK
                        </Link>
                        <NavbarToggler onClick={this.toggleNavbar} className="navbar-toggler navbar-toggler-right" >
                            <div className={this.state.convert ? 'hamburger convert': 'hamburger'}>
                                <div className="hamburger1"></div>
                                <div className="hamburger2"></div>
                                <div className="hamburger3"></div>
                            </div>
                        </NavbarToggler>
                    </div>
                    <Collapse isOpen={!this.state.collapsed} navbar className="">
                        <Scrollspy className="nav navbar-nav nav__list navAlignRight" items={ ['about', 'exp', 'portfolio', 'contacts'] } currentClassName="active">
                            <li className="nav__item">
                                <AnchorLink onClick={this.closeNavbar} offset='0' className="nav__item-link" href="#about">About</AnchorLink>
                            </li>
                            <li className="nav__item">
                                <AnchorLink onClick={this.closeNavbar} offset='0' className="nav__item-link" href="#exp">Experience</AnchorLink>
                            </li>
                            <li className="nav__item">
                                <AnchorLink onClick={this.closeNavbar} offset='0' className="nav__item-link" href="#portfolio">Portfolio</AnchorLink>
                            </li>
                            <li className="nav__item">
                                <AnchorLink onClick={this.closeNavbar} offset='0' className="nav__item-link" href="#contacts">Contacts</AnchorLink>
                            </li>
                        </Scrollspy>
                    </Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Header;