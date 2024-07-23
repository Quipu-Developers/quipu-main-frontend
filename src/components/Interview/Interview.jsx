import { NavHashLink as NavLink } from 'react-router-hash-link';
import './Interview.css';
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useState, useEffect, useRef } from 'react';


const Pagination = ({ pageCount, onPageChange, currentPage }) => {
  return (
    <ReactPaginate
      previousLabel={<FiChevronLeft />}
      nextLabel={<FiChevronRight />}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      pageLinkClassName={"pagination__link"}
      activeLinkClassName={"pagination__link__active"}
    />
  );
};
function Interview({ pageCount, onPageChange, currentPage }) {

  const handlePageChange = ({ selected }) => {
    onPageChange(selected + 1);
  };
  return (
    <div className='interviewmain-person'>
      <div className='interviewmain-nav'>
        <section className="interviewmain-logo"><NavLink to="/#home" smooth>QUIPU-DEV</NavLink></section>
      </div>
      <div className='interviewmain-body'>
        <h3 className='interviewmain-body-title'>Interview</h3>
        <div className='interviewmain-container'>
          <div className='interviewmain-pagenation'>

            {pageCount > 0 && (
              <Pagination
                pageCount={Math.max(1, pageCount - 1)}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            )}
          </div>
          <div className='profilebox'>
            <div className='profile'></div>
            <div className='profile'></div>
            <div className='profile'></div>
            <div className='profile'></div>
            <div className='profile'></div>
            <div className='profile'></div>
            <div className='profile'></div>
            <div className='profile'></div>
            <div className='profile'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;