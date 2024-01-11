import React from 'react';
import './Event.css';

import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <>
    <header>
        <div className="event">
            <div className="event-name">Events</div>
            <div className="bernice">
                <img src="" alt="" />
                <h3>Bernice</h3>
                <MdKeyboardArrowDown className="arrow" />
            </div>
        </div>
    </header>

    <section>
        <form className='form'>
            <div className="search">
                <CiSearch className="search-col" />
                <input type="text" placeholder='Search' required autoComplete='off' />
            </div>
        </form>
    </section>
    </>
  )
}


