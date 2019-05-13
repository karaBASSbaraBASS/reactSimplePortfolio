import React from 'react';
import FlyingBlocks from './FlyingBlocks';
import PortfolioRendered from '../portfolio/PortfolioRendered';
import db from '../../base.js';
import Pagination from '../portfolio/Pagination'


class SectionThree extends React.Component {
    constructor() {
        super();
        this.selectDataFromDB = this.selectDataFromDB.bind(this); 
        this.handlePaginationClick = this.handlePaginationClick.bind(this); 
        this.state = {
            loading: false,
            error: false,
            items: {},
            totalPages: 5,
            currentPage: 1,
            itemsPerPage: 3,
            selectNextPoint: '',
            firstItemCurrentPage: '',
            arrOfFirstItemsPrevPage: ['1555117810362']
        };
    };
    
    async selectDataFromDB(direction) {
        this.setState({loading: true})
        const {arrOfFirstItemsPrevPage, firstItemCurrentPage, selectNextPoint, currentPage, itemsPerPage} = this.state
        let startAt = 0
        if (direction === "next") {
            startAt = selectNextPoint;
        } else if (direction === "prev") {
            startAt = arrOfFirstItemsPrevPage[currentPage-1];
        } else {
            startAt = 0;
        }
        const queryMain = db.collection('items').orderBy('date')
        const query = direction === "next" ? queryMain.startAfter(startAt).limit(itemsPerPage):queryMain.startAt(startAt).limit(itemsPerPage)
        const snapshot = await query.get()
        const newState = snapshot.docs.map(doc => doc.data())
        const lastItem = Object.values(newState[newState.length-1])[1];
        console.log(lastItem)
        const firstItem = Object.values(newState[0])[1];
        this.setState({
            items: newState,
            loading: false,
            selectNextPoint: lastItem,
            firstItemCurrentPage: firstItem
        })
    }
    // direction = 'next' or 'prev', depends of button whitch call this function
    handlePaginationClick(direction) {
        let nextPage = this.state.currentPage;
        //increment nextPage if direction variable is next, otherwise decrement
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1; 
        this.setState({
            currentPage: nextPage
        }, () => {
            // select new data from database
            this.selectDataFromDB(direction);
        });
    }
    componentDidMount() {
        this.selectDataFromDB();
    }
    componentDidUpdate(prevProps, prevState) {
        const {arrOfFirstItemsPrevPage, firstItemCurrentPage, currentPage} = this.state
        if (prevState.firstItemCurrentPage !== "") {
            let firstItemPrevPage = prevState.firstItemCurrentPage
            if ( firstItemPrevPage !== firstItemCurrentPage && firstItemPrevPage < firstItemCurrentPage ) {
                let viwedPagesArr = arrOfFirstItemsPrevPage
                // push unique data into array
                if (viwedPagesArr.indexOf( firstItemPrevPage ) != -1) {
                        console.log(firstItemPrevPage+" this data duplicated in "+ viwedPagesArr)
                    } else {
                        viwedPagesArr.push(prevState.firstItemCurrentPage)
                        this.setState({
                            arrOfFirstItemsPrevPage: viwedPagesArr
                        })
                    }
                }
        }
    }
    
    render() {
    
        return (
            <section id="portfolio" className="thirdSection">
                <div  className="row d-flex justify-content-center wrap containerGrad">
                    <div  className='uc-shape-devider rad-shape-devider-top'></div>
                    <div  className='uc-shape-devider wave-shape-devider-bottom'></div>
                    <FlyingBlocks/>

                    <div className="centered flex-col col-lg-10 mx-auto maxWidth">
                        <h2 className="centered mx-auto sectionImageHeading">Portfolio</h2>
                        <div className="headingDivider">
                        </div>
                        <div className="row centered flex-row col-lg-10 maxWidth overflowBlock justify-content-center loadingWrap">
                            <PortfolioRendered
                                items = {this.state.items}
                                loading = {this.state.loading}
                                error = {this.state.error}
                                handlePaginationClick={this.handlePaginationClick}
                            >
                            </PortfolioRendered>  
                        </div>
                        <div className="row centered flex-row col-lg-10 maxWidth overflowBlock justify-content-center">
                            <Pagination
                                currentPage={this.state.currentPage}
                                totalPages={this.state.totalPages}
                                handlePaginationClick={this.handlePaginationClick}>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionThree;