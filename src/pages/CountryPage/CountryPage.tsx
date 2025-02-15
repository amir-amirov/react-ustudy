import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCountryByCodeQuery } from "../../services/RTKQuery/endpoints";
import { useTranslation } from "react-i18next";
import "./styles.scss";
import { getCountryNameBySSO } from "../../utils/getCountryNameBySSO";

const CountryPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const { data, error, isFetching } = useGetCountryByCodeQuery(code!);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const country = useMemo(() => {
    if (data) {
      return data[0];
    }
  }, [data]);

  if (isFetching) return <div>{t("loading")}...</div>;
  if (error || !country) return <div>{t("error")}</div>;

  return (
    country && (
      <div className="country-details">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
        <h1>{country.name.common}</h1>
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
        <p>
          <strong>{t("region")}:</strong> {country.region}
        </p>
        <p>
          <strong>{t("population")}:</strong>{" "}
          {country.population.toLocaleString()}
        </p>
        <p>
          <strong>{t("capital")}:</strong> {country.capital?.[0] || "N/A"}
        </p>

        {country.borders?.length > 0 ? (
          <div>
            <h3>{t("neighbors")}:</h3>
            <ul>
              {country.borders.map((borderCode: string) => (
                <li key={borderCode}>
                  <button onClick={() => navigate(`/country/${borderCode}`)}>
                    {getCountryNameBySSO(borderCode, i18n.language)}
                    {/* {borderCode} */}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No neighbors</p>
        )}
      </div>
    )
  );
};

export default CountryPage;
