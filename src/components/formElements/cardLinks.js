import React, {Component} from 'react';

class CardLinks extends Component {
    render() {
        const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];

        const linkList = profileLinks.map((link, index) => 
            <li key={index}>  
            {/* reconsulation algoritm обновит только часть кода после обновления данных на сервере ко ключу */}
                <a href="#">
                    <i className={`fa fa-${link}`}></i>
                </a>
            </li>
        
        );
        return(
            <div className='card-social-links'>
                <ul className='social-links'>
                    {linkList}
                </ul>
            </div>
        )
    }
}
export default CardLinks;