// import CountryInfo from "./CountryInfo"

const CountryList = ({ country, showCountryInfo }) => {
  // const handleShowClick = () => {
  //   console.log('Show clicked')
  //   showCountryInfo(country)
  // }

  return (
    <div>
      {country.name.common.concat(' ')}
      {/* <button onClick={showCountryInfo(country.name.common.toLowerCase())}> */}
      <button>
        show
      </button>
    </div>
  )
}

export default CountryList