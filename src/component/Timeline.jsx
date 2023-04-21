import React from "react";

import "../styles/timeline.scss";

function Timeline() {
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col py-[40px] px-[20px]"
      id="Timeline"
    >
      <h1
        className="timeline-heading text-white bg-transparent"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Your journey through Frontend Showdown
      </h1>
      <section className="timeline-section bg-transparent">
        <div
          className="timeline-items bg-transparent"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className="timeline-item bg-transparent">
            <div
              className="timeline-dot"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            ></div>
            <div
              className="timeline-date bg-transparent"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              7 April 2023 - 21 April 2023
            </div>
            <div
              className="timeline-content bg-transparent"
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <h3 className="bg-transparent">Entering Showdown</h3>
              <p className="bg-transparent">
                Enter Frontend Showdown, one of biggest competitive contest by
                registering here. Registrations start from 7 April to 21 April.
              </p>
            </div>
          </div>
          <div className="timeline-item bg-transparent overflow-hidden">
            <div
              className="timeline-dot"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            ></div>
            <div
              className="timeline-date bg-transparent"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              23 April 2023
            </div>
            <div
              className="timeline-content bg-transparent"
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <h3 className="bg-transparent">Phase 1</h3>
              <p className="bg-transparent">
                Participate in Frontend Showdown on 23 April, design and code a
                landing page in 6 hours.(11:00:00 AM)
              </p>
            </div>
          </div>
          <div className="timeline-item bg-transparent">
            <div
              className="timeline-dot"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            ></div>
            <div
              className="timeline-date bg-transparent"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              27 April 2023
            </div>
            <div
              className="timeline-content bg-transparent"
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <h3 className="bg-transparent">Result Declaration: Phase 1</h3>
              <p className="bg-transparent">
                Announcement of shortlisted participants will be done for phase
                2.
              </p>
            </div>
          </div>
          <div className="timeline-item bg-transparent">
            <div
              className="timeline-dot"
              data-aos="zoom-in"
              
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            ></div>
            <div
              className="timeline-date bg-transparent"
              data-aos="fade-up"
              
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              29 April 2023
            </div>
            <div
              className="timeline-content bg-transparent"
              data-aos="flip-up"
              
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <h3 className="bg-transparent">Phase 2</h3>
              <p className="bg-transparent">
                Phase 2 will start on Saturday, 29 April at 7:00 pm sharp and
                will be continue for next 24 hours, only shortlisted
                participants can compete.
              </p>
            </div>
          </div>
          <div className="timeline-item bg-transparent">
            <div
              className="timeline-dot"
              data-aos="zoom-in"
              
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            ></div>
            <div
              className="timeline-date bg-transparent"
              data-aos="fade-up"
              
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Soon After Phase 2
            </div>
            <div
              className="timeline-content bg-transparent"
              data-aos="flip-up"
              
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <h3 className="bg-transparent">Final Result Declaration</h3>
              <p className="bg-transparent">
                Results will be announced with the final leaderboard soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
