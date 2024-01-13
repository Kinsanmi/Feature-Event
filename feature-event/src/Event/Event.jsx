import React from 'react';
import { AllEvent, EventList } from './EventList';

import { CiLocationOn } from "react-icons/ci";

import { SlCalender } from "react-icons/sl";

import { PiNotepad } from "react-icons/pi";


export const Event = () => {
  return (
    <>
    <div className='list-items'>
      <h1>Featured Events</h1>
      <div className="featured">
        {EventList.map((items, index)=>{
            return (
                <div key={index} className='feature-style'>
                    <div className="event-list">
                        <img src={items.Image} alt="" />
                        <h2>{items.names}</h2>

                        <div className="location">
                            <div className="locate">
                                <CiLocationOn />
                                <h3>{items.location}</h3>
                            </div>
                            <div className="locate">
                                <h4> <SlCalender className="calender" />{items.date}</h4>
                            </div>
                        </div>

                        <div className="start-up">
                            <div className="start">
                                <div className="notes">
                                    <PiNotepad />
                                    <h3>{items.duration}</h3>
                                </div>
                                <h4>{items.price}</h4>
                            </div>

                            <p>{items.ticket}</p>

                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>



    <div className='list-items'>
      <h1>All Events</h1>
      <div className="event-name">
        {AllEvent.map((items, index)=>{
            return (
                <div key={index} className='feature-style'>
                    <div className="event-list">
                        {/* <img src="" alt="" /> */}
                        <h2>{items.names}</h2>

                        <div className="place">
                            <div className="locate">
                                <CiLocationOn />
                                <h3>{items.location}</h3>
                            </div>
                            <div className="locate-place">
                                <h4>{items.date}</h4>
                            </div>
                        </div>

                        <div className="start-up-line">
                            <div className="start">
                                <div className="notes">
                                    <PiNotepad />
                                    <h3>{items.duration}</h3>
                                </div>
                                <h4>{items.price}</h4>
                            </div>

                            <span>{items.ticket}</span>

                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
    </>
  )
}
