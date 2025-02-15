import countries from "../assets/countriesByCCA3.json";

type CountryLanguages = {
  [key: string]: string;
};

type Countries = {
  [key: string]: CountryLanguages;
};

const countriesTyped: Countries = countries;

export const getCountryNameBySSO = (cca3: string, language: string) => {
  return countriesTyped[cca3]?.[language] || "Unknown country";
};
