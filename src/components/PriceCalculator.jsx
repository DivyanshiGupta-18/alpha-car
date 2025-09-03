import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";

const PriceCalculator = () => {
  const [invites, setInvites] = useState(50);
  const [duration, setDuration] = useState(2);

  const calculatePrice = () => invites * duration * 100; // Dummy formula

  return (
    <div style={{
  width: "100%",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxSizing: "border-box"
}}>
      <h2 style={{margin: "0px", color: "#42a089"}}>Price Calculator</h2>

      <Typography gutterBottom>Number of Invites</Typography>
      <Slider value={invites} min={10} max={500} step={10} onChange={(e, v) => setInvites(v)} style={{color: "#42a089ff"}}/>
      <p style={{margin: "0px" , color: "gray"}}>{invites } invites</p>

      <Typography gutterBottom>Duration of Event (Hours)</Typography>
      <Slider value={duration} min={1} max={10} step={1} onChange={(e, v) => setDuration(v)} style={{color: "#42a089ff"}}/>
      <p style={{margin: "0px", color: "gray"}}>{duration} hours</p>

      <h3 style={{margin: "0px"}}>Total Price: ₹{calculatePrice()}</h3>
    </div>
  );
};

export default PriceCalculator;

