import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/rules.scss";

function Rules() {
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col gap-10 p-10"
      id="Rules"
    >
      <h1 className="text-white bg-transparent text-5xl z-10">
        Rules and Regulation
      </h1>
      <h1 className="text-white bg-transparent text-5xl z-10">Round 1</h1>

      <div class="container bg-transparent z-10">
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              You are allowed to use HTML,CSS and JavaScript according to your
              convinience.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              Use of any framework and libraries are prohibited.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              Any external resources ( images, cdn links & text) are NOT
              allowed.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              Duplicate and copied work may lead to eliminations.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              AI generated content/code are prohibited.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              Submissions must be done in given interval of time and follow all
              given instructions.
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-white bg-transparent text-5xl z-10">Round 2</h1>

      <div class="container bg-transparent z-10">
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              You are allowed to use HTML,CSS and JavaScript according to your
              convinience.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              Use of any framework and libraries are allowed.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              Any external resources ( images, cdn links & text) are allowed.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              Submissions must be done in given interval of time and follow all
              given instructions.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
              AI generated content/code are prohibited.
            </div>
          </div>
        </div>
        <div class="ag-courses_item bg-transparent">
          <div href="#" class="ag-courses-item_link bg-transparent">
            <div class="ag-courses-item_bg"></div>
            <div class="ag-courses-item_title bg-transparent">
            Duplicate and copied work may lead to eliminations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
