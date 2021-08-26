import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

function Scarousel() {
  return (
    <div>
      <Carousel>
        <div>
          <img src="./pics/bp.png" alt="reload" />
          <p className="legend">DEALERS IN ALL TYPES OF BATTERIES & CHARGERS</p>
        </div>
        <div>
          <img src="./pics/bp1.png" alt="reload" />
          <p className="legend">
            AA - AAA - AAAAA - 9v, 18650, 6v, 12v, 24v etc. Cool Deals Only
          </p>
        </div>
        <div>
          <img src="./pics/bp2.png" alt="reload" />
          <p className="legend">Best Alkaline/Lithium/Micro Batteries</p>
        </div>
        <div>
          <img src="./pics/bp3.jpg" alt="reload" />
          <p className="legend">
            Get the best quality and original alkaline batteries right here.
          </p>
        </div>
        <div>
          <img src="./pics/bp4.png" alt="reload" />
          <p className="legend">Beautiful and long lasting battery</p>
        </div>
        <div>
          <img src="./pics/bp5.png" alt="reload" />
          <p className="legend">BEST AUTOMOBILE BATTERIES</p>
        </div>
        <div>
          <img src="./pics/bp6.jpg" alt="reload" />
          <p className="legend">
            All types of cars, trucks, and motorbike batteries available
          </p>
        </div>
        <div>
          <img src="./pics/bp7.png" alt="reload" />
          <p className="legend">All brands and sizes</p>
        </div>
        <div>
          <img src="./pics/bp8.png" alt="reload" />
          <p className="legend">All brands and sizes</p>
        </div>
        <div>
          <img src="./pics/bp1.jpg" alt="reload" />
          <p className="legend">New Products</p>
        </div>
        <div>
          <img src="./pics/bp2.jpg" alt="reload" />
          <p className="legend">Various Charges Available</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Scarousel;
