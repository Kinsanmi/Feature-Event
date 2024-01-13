import React, { useState } from "react"
import {  EventList } from "./EventList"

// import { CiLocationOn } from "react-icons/ci";

// import { SlCalender } from "react-icons/sl";

// import { PiNotepad } from "react-icons/pi";

// typescript

export const Event = ({ events, searhValue, loading,error }) => {

  const renderFeatures = () => {
    if (loading) {
      return <div style={{ textAlign: "center" }}>loading.....</div>
    }

    if (events && events.length === 0) {
      return <div style={{ textAlign: "center" }}>No events found</div>
    }

    if(error){
      return(
        <div>error occured</div>
      )
    }
    
    return (
      <div className="list-items">
        <h1>All Events</h1>
        <div className="event-name">
          {events &&
            events.map((items, index) => {
              return (
                <div key={index} className="feature-style">
                  <div className="event-list">
                    {/* <img src="" alt="" /> */}
                    <h2>{items.names}</h2>

                    <div className="place">
                      <div className="locate">
                        {/* <CiLocationOn /> */}
                        <h3>{items.location}</h3>
                      </div>
                      <div className="locate-place">
                        <h4>{items.date}</h4>
                      </div>
                    </div>

                    <div className="start-up-line">
                      <div className="start">
                        <div className="notes">
                          {/* <PiNotepad /> */}
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
    )
  }

  return (
    <>
      <div className="list-items">
        <h1>Featured Events</h1>
        <div className="featured">
          {EventList.map((items, index) => {
            return (
              <div key={index} className="feature-style">
                <div className="event-list">
                  {/* <img src="" alt="" /> */}
                  <h2>{items.names}</h2>

                  <div className="location">
                    <div className="locate">
                      {/* <CiLocationOn /> */}
                      <h3>{items.location}</h3>
                    </div>
                    <div className="locate">
                      {/* <h4> <SlCalender className="calender" />{items.date}</h4> */}
                    </div>
                  </div>

                  <div className="start-up">
                    <div className="start">
                      <div className="notes">
                        {/* <PiNotepad /> */}
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
      {renderFeatures()}
    </>
  )
}
