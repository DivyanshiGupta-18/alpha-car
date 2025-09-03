import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick, currentSlide }) => {
  const isDisabled = currentSlide === 0;
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={{
        background: isDisabled ? "#ddd" : "#42a089ff",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
    >
      ◀
    </button>
  );
};

const NextArrow = ({ onClick, currentSlide, slideCount }) => {
  const isDisabled = currentSlide === slideCount - 1;
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={{
        background: isDisabled ? "#ddd" : "#42a089ff",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
    >
      ▶
    </button>
  );
};


const ImageCarousel = React.forwardRef((props, ref) => {
  const images = [
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/41a8a8b2a63b414d81c687c80d30ede2/raw/file.JPG?q=85",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/e7fb987326e3465dbbf6782dccee4d2c/raw/file.JPG?q=85&w=900",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/953c9ed5b8e24caea1816de9beb6f53d/raw/file.JPG?q=85&w=900",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/8d7b4bc2fdcf4188a934178e9d8cd167/raw/file.JPG?q=85&w=900",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/3bad01e406f9439684e5672e5c5bfdfd/raw/file.JPG?q=85&w=900",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/9ad12e88626f4b2ab24ea83e5fa302a0/raw/file.JPG?q=85&w=900"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 1500,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      // agar last slide aagaya to reset first slide par
      if (ref?.current && next === images.length - 1) {
        setTimeout(() => {
          ref.current.slickPause();
          ref.current.slickGoTo(0);
          setCurrentSlide(0);
        }, 1200);
      }
    },
    prevArrow: (
      <PrevArrow
        currentSlide={currentSlide}
      />
    ),
    nextArrow: (
      <NextArrow
        currentSlide={currentSlide}
        slideCount={images.length}
      />
    ),
  };

  return (
   <div style={{
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  position: "relative"
}}>
  <Slider ref={ref} {...settings}>
    {images.map((src, index) => (
      <div key={index}>
        <img
          src={src}
          alt={`Car ${index}`}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div>
    ))}
  </Slider>
</div>

  );
});

export default ImageCarousel;
