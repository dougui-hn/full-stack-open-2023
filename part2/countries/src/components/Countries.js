import CountryInfo from "./CountryInfo"
import CountryList from "./CountryList"

const Countries = ({ countries, showCountryInfo }) => {
  if (countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }

  if (countries.length === 1) {
    const country = countries[0]

    return (
      < CountryInfo country={country} />
    )
  }

  if (countries.length === 0) {
    return (
      <div>
        <p>No matches</p>
      </div>
    )
  }
  return (
    <div>
      {countries
        .map(country =>
          <CountryList
            key={country.cioc}
            country={country}
            showCountryInfo={showCountryInfo}
          />
        )
      }
    </div>
  )
}

export default Countries