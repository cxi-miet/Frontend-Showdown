import React from "react";
import "../styles/rulesCard.scss";

function RulesCard(props) {
  return (
    <div class="container bg-transparent z-10">
      <div
        class="ag-courses_item bg-transparent"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div href="#" class="ag-courses-item_link bg-transparent">
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title bg-transparent">{props.rule1}</div>
        </div>
      </div>
      <div
        class="ag-courses_item bg-transparent"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div href="#" class="ag-courses-item_link bg-transparent">
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title bg-transparent">{props.rule2}</div>
        </div>
      </div>
      <div
        class="ag-courses_item bg-transparent"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div href="#" class="ag-courses-item_link bg-transparent">
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title bg-transparent">{props.rule3}</div>
        </div>
      </div>
      <div
        class="ag-courses_item bg-transparent"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div href="#" class="ag-courses-item_link bg-transparent">
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title bg-transparent">{props.rule4}</div>
        </div>
      </div>
      <div
        class="ag-courses_item bg-transparent"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div href="#" class="ag-courses-item_link bg-transparent">
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title bg-transparent">{props.rule5}</div>
        </div>
      </div>
      <div
        class="ag-courses_item bg-transparent"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div href="#" class="ag-courses-item_link bg-transparent">
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title bg-transparent">{props.rule6}</div>
        </div>
      </div>
    </div>
  );
}

export default RulesCard;
