import React from 'react';
import ArrowDown from './ArrowDown';
class TimelineItem extends React.Component {
    
    render() {
        const { details } = this.props;
        return (
            <div className="ntEvent extend">
                <div className="ntEventTime">
                        {details.date}
                    <span className="collapseBtn">
                        <ArrowDown/>
                    </span>
                </div>
                <div className="tnEventInfo">
                    <h3>{details.title}</h3>
                    <span className="tnSpeakerName" >
                        {details.description}
                    </span>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default TimelineItem;