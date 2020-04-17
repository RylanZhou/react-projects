import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormControl, NativeSelect } from '@material-ui/core'
import { fetchCountries } from '../apis'

export default function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchAPI()
  }, [])

  return (
    <FormControl className="country-picker">
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((each, i) => (
          <option key={i} value={each}>
            {each}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

CountryPicker.propTypes = {
  handleCountryChange: PropTypes.func
}
