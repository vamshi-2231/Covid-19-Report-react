import React, { useEffect, useState } from "react";
import "./CovidData.css";

function CovidData() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="covidData">
      <h1>COVID-19</h1>
      <div className="covidData__input">
        <form onSubmit={handleSubmit}>
          <input onChange={handleSearch} placeholder="Enter Country Name" />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="covidData__country__info">
        <p>Country Name : {country} </p>
        <p>Cases : {cases}</p>
        <p>Deaths : {deaths}</p>
        <p>Recovered : {recovered}</p>
        <p>Cases Today : {todayCases}</p>
        <p>Deaths Today : {deathCases}</p>
        <p>Recovered Today : {recoveredCases}</p>
      </div>
    </div>
  );
}

export default CovidData;
