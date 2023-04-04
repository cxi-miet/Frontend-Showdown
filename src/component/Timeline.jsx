import React from "react";
import "../styles/timeline.scss";

function Timeline() {
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col"
      id="Timeline"
    >
      <h1 className="timeline-heading text-4xl text-white bg-transparent">
        Your journey through Frontend Showdown
      </h1>
      <section class="timeline-section bg-transparent">
        <div class="timeline-items bg-transparent">
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">5 april - 9 april</div>
            <div class="timeline-content bg-transparent">
              <h3 className="bg-transparent">Registration</h3>
              <p className="bg-transparent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">9 april</div>
            <div class="timeline-content bg-transparent">
              <h3 className="bg-transparent">Round 1</h3>
              <p className="bg-transparent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">13 april</div>
            <div class="timeline-content bg-transparent">
              <h3 className="bg-transparent">Round 1 winner announce</h3>
              <p className="bg-transparent"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">16 april</div>
            <div class="timeline-content bg-transparent">
              <h3 className="bg-transparent">Round 2</h3>
              <p className="bg-transparent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div class="timeline-item bg-transparent">
            <div class="timeline-dot"></div>
            <div class="timeline-date bg-transparent">X april</div>
            <div class="timeline-content bg-transparent">
              <h3 className="bg-transparent">Winner Announce</h3>
              <p className="bg-transparent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
