import { useEffect } from "react";
import CountryCard from "../../components/CountryCard/CountryCard";
import { useGetCountriesQuery } from "../../services/RTKQuery/endpoints";

const Home = () => {
  const {
    data: countries,
    error,
    isFetching,
    refetch,
  } = useGetCountriesQuery();

  if (isFetching) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    countries && (
      <div>
        {countries.map((country: any, index: number) => (
          <CountryCard
            key={index}
            name={country.name.common}
            flagImage={country.flags.svg}
          />
        ))}
      </div>
    )
  );
};

export default Home;
