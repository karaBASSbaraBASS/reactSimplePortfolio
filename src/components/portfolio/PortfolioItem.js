import React from 'react';

class PortfolioItem extends React.Component {
    
    render() {
        const { details } = this.props;
        const isAvailable = details.status === 'available';
        /*const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';*/
        return (
            <div className="column-4 portfolio__wrap">
                <div className="portfolio__item">
                    <div className="galery__item">
                        <img src={details.image} alt={details.Head} className="whiteSquare galery__img"></img>
                        <a href={details.link} target="_blank" rel="noopener noreferrer" className="caption">
                            <h3 className="caption__title">{details.titleFirst}&nbsp;<span>{details.titleSecond}</span></h3>
                            <p className="caption__description">
                                {details.techList}
                            </p>
                        </a>
                    </div>
                    <div className="description__item" ref="inner">
                        <h2>{details.descrHead}</h2>
                        <p className="descr__text">{details.descrText}</p>
                    </div>
                </div>
        </div>
        )
    }
}

export default PortfolioItem;