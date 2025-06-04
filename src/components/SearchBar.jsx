import React from 'react'

const SearchBar = ({search, setSearch}) => {
  return (
    <input className='w-full md:-1/2 border px-4 py-2 rounded-md shadow-sm'
    type='text'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder='Search events...' 
    />
  )
}

export default SearchBar