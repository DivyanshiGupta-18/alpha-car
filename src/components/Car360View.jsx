import React from "react";

const Car360View = ({ onStart360 }) => {
  return (
    <button
  onClick={onStart360}
  style={{
    margin: "2rem 0",
    padding: "1rem 2rem",
    backgroundColor: "#42a089",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    maxWidth: "300px"
  }}
>
  View 360°
</button>

  );
};

export default Car360View;
