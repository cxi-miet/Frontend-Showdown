import React from "react";
import "../styles/timeline.scss";

function Timeline() {
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col"
      id="Timeline"
    >
      <h1 className="timeline-heading text-white bg-transparent">
        Your journey through Frontend Showdown
      </h1>
      <section class="timeline-section bg-transparent">
        <div class="timeline-items bg-transparent">
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">
              7 April 2023 - 21 April 2023
            </div>
            <div class="timeline-content bg-transparent">
              <h3 className="bg-transparent">Entering Showdown</h3>
              <p className="bg-transparent">
                Enter Frontend Showdown, one of biggest competitive contest by
                registering here. Registrations start from 7 April to 21 April.
              </p>
            </div>
          </div>
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">23 April 2023</div>
            <div class="timeline-content bg-transparent">
              <h3 className="bg-transparent">Phase 1</h3>
              <p className="bg-transparent">
                Participate in Frontend Showdown on 23 April, design and code a
                landing page in 6 hours.
              </p>
            </div>
          </div>
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">27 April 2023</div>
            <div class="timeline-content bg-transparent">
              <h3 className="bg-transparent">Result Declaration: Phase 1</h3>
              <p className="bg-transparent">
                Announcement of shortlisted participants will be done for phase
                2.
              </p>
            </div>
          </div>
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">29 April 2023</div>
            <div class="timeline-content bg-transparent">
              <h3 className="bg-transparent">Phase 2</h3>
              <p className="bg-transparent">
                Phase 2 will start on Saturday, 29 April at 6:00 pm sharp and
                will be continue for next 24 hours, only shortlisted
                participants can compete.
              </p>
            </div>
          </div>
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">Soon After Phase 2</div>
            <div class="timeline-content bg-transparent">
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
