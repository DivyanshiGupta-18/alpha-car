import React, { useRef } from "react";
import ImageCarousel from "./components/ImageCarousel";
import CarOverview from "./components/CarOverview";
import Car360View from "./components/Car360View";
import PriceCalculator from "./components/PriceCalculator";

function App() {
  const sliderRef = useRef(null);

  const handleStart360 = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(0); // slide 1 se start
      sliderRef.current.slickPlay(); //autoplay chalu
    }
  };


  return (
    <div style={{margin: "0 auto", paddingLeft: "25px", paddingBottom: "25px"}}>
      <h1 style={{ textAlign: "center", margin: "20px 0" , fontSize: "2.5rem", color: "#42a089"}}>Mahindra Thar LX - Premium Edition</h1>
        <p style={{ textAlign: "center", fontSize: " 1.1rem" }}>Discover the power and elegance of this exceptional vehicle</p>
      <div style={{
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",   // responsive wrapping
}}>
  {/* Left Column */}
  <div style={{
    flex: "0 0 62%",
    minWidth: "300px",
    textAlign: "center",
  }}>
    <ImageCarousel ref={sliderRef} />
    <Car360View onStart360={handleStart360}/>
  </div>

  {/* Right Column */}
  <div style={{
    flex: "0 0 35%",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  }}>
    <CarOverview />
    <PriceCalculator />
  </div>
</div>

    </div>
  );
}

export default App;
