import axios from "axios";
import { useEffect, useState } from "react";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const countriesFiltered = filter
    ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    : countries

  const showCountryInfo = (country) => {
    setFilter(country)
  }

  return (
    <div>
      <label>
        find countries
        <input
          type="search"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
      <Countries countries={countriesFiltered} showCountryInfo={showCountryInfo} />
    </div>
  );
}

export default App;
