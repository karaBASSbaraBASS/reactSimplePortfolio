import React from 'react';
import './Timeline.css';
import ArrowDown from './ArrowDown';
//import ButtonColapse from './ButtonColapse';

class Timeline extends React.Component {
    
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="tab-content ntTabContent topGap">
                        {/* day 01 */}
                        <div id="day01" className="tab-pane fade in active show">
                            
                            {/* Event Extend */}
                            <div className="ntEvent extend">
                                {/* Event Time */}
                                <div className="ntEventTime">
                                05.2016 - 10.2016 
                                    <span className="collapseBtn">
                                        <ArrowDown/>
                                    </span>
                                </div>
                                {/* Event Time ends!*/}
                                {/*Event Details */}
                                <div className="tnEventInfo">
                                    <h3>Freecodecamp.com training course</h3>
                                    <span className="tnSpeakerName" >
                                        Learning the basics of layout, acquaintance with the profession «Front End Developer». Practice on video lessons. Building Websites to order.
                                    </span>
                                    <hr/>
                                </div>
                                {/*Event Details ends! */}
                            </div>
                            {/*Event Extend ends! */}

                            {/*Event Extend */}
                            <div className="ntEvent extend">
                                {/* Event Time */}
                                <div className="ntEventTime">
                                    04.2017 - 05.2017 
                                    <span className="collapseBtn">
                                        <ArrowDown/>
                                    </span>
                                </div>
                                {/* Event Time ends!*/}
                                {/*Event Details */}
                                <div className="tnEventInfo">
                                    <h3>QAlight training course</h3>
                                    <span className="tnSpeakerName" >
                                        Learning the structure of MVC and creating a CMS based on PHP. Practice on video lessons. Learning the Laravel framework. Building Websites to order.
                                    </span>
                                    <hr/>
                                </div>
                                {/*Event Details ends! */}
                            </div>
                            {/*Event Extend ends! */}

                            {/*Event Extend */}
                            <div className="ntEvent extend">
                                {/* Event Time */}
                                <div className="ntEventTime">
                                    05.2017 - 02.2018 
                                    <span className="collapseBtn">
                                        <ArrowDown/>
                                    </span>
                                </div>
                                {/* Event Time ends!*/}
                                {/*Event Details */}
                                <div className="tnEventInfo">
                                    <h3>LeoDigital</h3>
                                    <span className="tnSpeakerName" >
                                        Creation web-sites for clients of the company and their support, layout of blocks, setting up forms. etc...
                                    </span>
                                    <hr/>
                                </div>
                                {/*Event Details ends! */}
                            </div>
                            {/*Event Extend ends! */}

                            {/*Event Extend */}
                            <div className="ntEvent extend">
                                {/* Event Time */}
                                <div className="ntEventTime">
                                    02.2018 - 10.2018 
                                    <span className="collapseBtn">
                                        <ArrowDown/>
                                    </span>
                                </div>
                                {/* Event Time ends!*/}
                                {/*Event Details */}
                                <div className="tnEventInfo">
                                    <h3>CF Digital</h3>
                                    <span className="tnSpeakerName" >
                                        Creation web-sites for clients of the company and their support, layout of blocks, layout of advertising banners, performance optimization for old projects, scripting pages with es5/jquery etc...
                                    </span>
                                    <hr/>
                                </div>
                                {/*Event Details ends! */}
                            </div>
                            {/*Event Extend ends! */}

                            {/*Event Extend */}
                            <div className="ntEvent extend">
                                {/* Event Time */}
                                <div className="ntEventTime">
                                    10.2018 - till now 
                                    <span className="collapseBtn">
                                        <ArrowDown/>
                                    </span>
                                </div>
                                {/* Event Time ends!*/}
                                {/*Event Details */}
                                <div className="tnEventInfo">
                                    <h3>Freelance</h3>
                                    <span className="tnSpeakerName" >
                                        Learning ES6 and React in free courses. At the same time building websites, and blocks from .psd/.sketch to order.
                                    </span>
                                    <hr/>
                                </div>
                                {/*Event Details ends! */}
                            </div>
                            {/*Event Extend ends! */}
                            
                            
                        </div>
                        {/* day 01 ends! */}
                    </div>
                </div>
                {/* Tab content ends! */}
            </div>
        )
    }
}

export default Timeline;