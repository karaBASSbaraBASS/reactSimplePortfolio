import React from 'react';
import './Pagination.css';
// import PropTypes from 'prop-types';

const Pagination = (props) => {
    const {currentPage, totalPages, handlePaginationClick} = props;
    return(
        <div className="Pagination">
            <button 
                className={"Pagination-button" + (currentPage <= 1 ? " disabled ":" enabled ")}
                onClick={() => handlePaginationClick('prev')}
                disabled={currentPage <= 1}
            >
                &larr;
            </button>
            <span className="Pagonation-info">
                page <b>{currentPage}</b> of <b>{totalPages}</b>
            </span>
            <button 
                className={"Pagination-button" + (currentPage >= totalPages ? " disabled ":" enabled ")}
                onClick={() => handlePaginationClick('next')}
                disabled={currentPage >= totalPages}
            >
                &rarr;
            </button>
        </div>
    )
}

// Pagination.propTypes = {
//     page: PropTypes.number.isRequired,
//     totalPages: PropTypes.number.isRequired,
//     handlePaginationClick: PropTypes.func.isRequired,
// }

export default Pagination;