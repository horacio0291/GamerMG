import React from "react";



export const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../../assets/01-carousel.webp" className="d-block w-100" alt="carousel01" />
          </div>
          <div className="carousel-item">
            <img src="../../assets/02-carousel.webp" className="d-block w-100" alt="carousel02" />
          </div>
          <div className="carousel-item">
            <img src="../../assets/03-carousel.webp" className="d-block w-100" alt="carousel03" />
          </div>
        </div>
      </div>
    </>
  );
};
