import React from 'react';
import './Timeline.css';
import TimelineItem from './TimelineItem';
//import ButtonColapse from './ButtonColapse';
import CustomData from './paginationContent.json';

class Timeline extends React.Component {
    constructor() {
        super();
        this.state = {
          items: []
        }
    }
    componentDidMount() {

        this.setState({
            items: CustomData
        })
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="tab-content ntTabContent topGap">
                        <div id="day01" className="tab-pane fade in active show">
                            {   Object
                                    .keys(this.state.items)
                                    .map(key => <TimelineItem key={key} index={key} details={this.state.items[key]}/>) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;