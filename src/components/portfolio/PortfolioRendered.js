
import React from 'react';
import Loading from '../common/loading';
import PortfolioItem from './PortfolioItem';

class PortfolioRendered extends React.Component {
    
    render() {
        const { items } = this.props;
        
        if (this.props.loading) {
            return (<div className="loading-container"><Loading/></div>)
        };
        if (this.props.error) {
            return (<div className="error">{this.state.error}</div>)
        } else {
            return (
                Object
                    .keys(this.props.items)
                    .map(key => <PortfolioItem key={key} index={key} details={this.props.items[key]}/>)
            )
        }
    }
        
}

export default PortfolioRendered;