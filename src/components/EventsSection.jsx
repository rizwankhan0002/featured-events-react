import React from 'react'
import eventsData from "../data/events.json"
import EventCard from './EventCard'
import { useState } from 'react'
import SearchBar from './SearchBar'

const EventsSection = () => {
    const [search, setSearch] = useState('')

    const filteredEvents = eventsData.filter( event => 
        event.name.toLowerCase().includes(search.toLowerCase())
    ) 
        
    
  return (
    <section className='py-12 px-4 md:px-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Featured Events</h2>
        <SearchBar search={search} setSearch={setSearch} />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
            ))}
        </div>
    </section>
  )
}

export default EventsSection