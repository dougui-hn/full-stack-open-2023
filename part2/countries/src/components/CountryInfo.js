import axios from "axios"
import { useEffect, useState } from "react"

const CountryInfo = ({ country }) => {
  console.log('country', country)
  const languages = Object.values(country.languages)
  const commonNameEndsInS = country.name.common.endsWith('s')
  const capital = country.capital[0]
  const [weather, setWeather] = useState({})
  const api_key = process.env.REACT_APP_API_KEY
  const [params] = useState({
    access_key: api_key,
    query: capital
  })

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://api.weatherstack.com/current', { params })
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      })
      .catch(error => console.log(error))
  }, [params])

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {capital}</p>
      <p>population {country.population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
      <img
        src={country.flags.png}
        alt={country.flags.hasOwnProperty('alt')
          ? country.flags.alt
          : country.name.common.concat(commonNameEndsInS ? "' " : "' s ", "flag")
        }
      />
      <h2>Weather in {weather.location.name}</h2>
      <p><strong>temperature:</strong> {weather.current.temperature} Celsius</p>
      <img
        src={weather.current.weather_icons[0]}
        alt={weather.current.weather_descriptions[0]}
      />
      <p><strong>wind:</strong> {weather.current.wind_speed} kph direction {weather.current.wind_dir}</p>
    </div>
  )
}

export default CountryInfo