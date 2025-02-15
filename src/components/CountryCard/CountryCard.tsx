import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

interface CountryCardProps {
  name: string;
  flagImage: string;
  code: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, flagImage, code }) => {
  return (
    <Link
      to={`/country/${code}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="country-card">
        <img src={flagImage} alt={name} />
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default CountryCard;
