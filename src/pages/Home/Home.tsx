import React, { useState } from "react";
import { useGetCountriesQuery } from "../../services/RTKQuery/endpoints";
import CountryCard from "../../components/CountryCard/CountryCard";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import { useApp } from "../../store/app";

const Home: React.FC = () => {
  const { app, toggleSorted, setRegion } = useApp();
  const { data: countries, error, isLoading } = useGetCountriesQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const { t, i18n } = useTranslation();

  if (isLoading) return <div>{t("loading")}...</div>;
  if (error) return <div>{t("error")}</div>;

  const filteredCountries = countries
    ?.filter((country: any) => {
      const countryName =
        i18n.language === "en"
          ? country.name.official
          : country.translations?.rus?.official;
      return countryName.toLowerCase().includes(searchTerm.toLowerCase());
    })
    ?.filter((country: any) =>
      app.region ? country.region === app.region : true
    )
    ?.sort((a: any, b: any) =>
      app.isSorted ? b.population - a.population : 0
    );

  return (
    <div className="container">
      <div className="filters">
        <h2>Browser Lang: {i18n.language}</h2>
        <input
          type="text"
          placeholder={t("search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={app.region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">{t("all_regions")}</option>
          <option value="Africa">{t("africa")}</option>
          <option value="Americas">{t("americas")}</option>
          <option value="Asia">{t("asia")}</option>
          <option value="Europe">{t("europe")}</option>
          <option value="Oceania">{t("oceania")}</option>
        </select>
        <button onClick={() => toggleSorted()}>
          {t("sort_by_population")}
        </button>

        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
          }
        >
          {t("switchLang")}
        </button>
      </div>
      <div className="countries-grid">
        {filteredCountries?.map((country: any) => {
          const name =
            i18n.language === "ru"
              ? country.translations?.rus?.official || country.name.official
              : country.name.official;

          return (
            <CountryCard
              key={country.cca3}
              name={name}
              flagImage={country.flags.svg}
              code={country.cca3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
