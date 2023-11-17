const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      filter shown with
      <input
        type='search'
        value={filter}
        onChange={handleChange}
      />
    </div>
  )
}

export default Filter