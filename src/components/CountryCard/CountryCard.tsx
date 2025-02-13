import React from "react";

interface CountryCardProps {
  name: string;
  flagImage: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, flagImage }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        backgroundColor: "gray",
        color: "black",
        width: "300px",
        height: "300px",
        // overflow: "hidden",
      }}
    >
      <h3>{name}</h3>
      <img src={flagImage} alt={name} className="flag" />
    </div>
  );
};

export default CountryCard;
