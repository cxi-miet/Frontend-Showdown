import React from "react";
import "../styles/faq.scss";
import "../faq";

function Faq() {
  return (
    <div
      className="flex justify-center items-center min-h-screen w-full flex-col"
      id="faq"
    >
      <h1 className="text-4xl text-white bg-transparent">
        Frequently Asked Questions
      </h1>
      <div class="container">
        <div class="wrapper">
          <button class="toggle">
            What is the return policy?
            <i class="fas fa-plus icon"></i>
          </button>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aliquam facere adipisci quod mollitia, aut nemo deleniti fugiat
              et, corrupti sequi. Omnis dolorem quos eligendi placeat soluta
              sint corrupti quod.
            </p>
          </div>
        </div>
        <div class="wrapper">
          <button class="toggle">
            How do I apply the coupon?
            <i class="fas fa-plus icon"></i>
          </button>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              error doloremque, quibusdam qui necessitatibus autem aperiam
              reprehenderit? Ipsum maiores dolore inventore ea. Accusantium fuga
              eius laboriosam iusto blanditiis doloremque ullam?
            </p>
          </div>
        </div>
        <div class="wrapper">
          <button class="toggle">
            How do I become a member?
            <i class="fas fa-plus icon"></i>
          </button>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae consectetur officiis labore commodi sunt ex praesentium
              dolor magnam asperiores reiciendis. Minus magnam nesciunt aliquid
              eos ipsam sequi recusandae quos incidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
