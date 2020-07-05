import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Header, CharactersList, Search } from './Components'

import './style.css'

const BreakingBad = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItem()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharactersList isLoading={isLoading} items={items} />
    </div>
  )
}

export default BreakingBad
