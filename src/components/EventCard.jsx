import React from 'react'

const EventCard = ({ event }) => {
  return (
    <div className='bg-white p-4 rounded-xl shadow-md space-y-2'>
        <h3 className='text-xl font-semibold text-blue-700'>{event.name}</h3>
        <p className='text-sm text-gray-600 '>{event.date} . {event.time}</p>
        <p className='text-sm text-gray-600 '>{event.Location}</p>
        <p className='text-sm text-gray-600'>{event.description}</p>
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Register</button>
    </div>
  )
}

export default EventCard