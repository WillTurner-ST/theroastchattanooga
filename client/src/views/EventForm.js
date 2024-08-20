import React from 'react'

const EventForm = () => {
  return (
<div class="max-w-md mt-10 mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className='text-center text-4xl mb-10'>Add An Event</h1>
  <form name="events" method="POST" data-netlify="true">
    <div class="mb-4">
      <label for="eventName" class="block text-gray-700 text-sm font-bold mb-2">Event Name:</label>
      <input type="text" id="eventName" name="eventName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div class="mb-4">
      <label for="artist" class="block text-gray-700 text-sm font-bold mb-2">Artist:</label>
      <input type="text" id="artist" name="artist" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div class="mb-4">
      <label for="date" class="block text-gray-700 text-sm font-bold mb-2">Date:</label>
      <input type="date" id="date" name="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div class="mb-4">
      <label for="time" class="block text-gray-700 text-sm font-bold mb-2">Time:</label>
      <input type="time" id="time" name="time" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div class="mb-4">
      <label for="promoImage" class="block text-gray-700 text-sm font-bold mb-2">Promo Image:</label>
      <input type="file" id="promoImage" name="promoImage" accept="image/*" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div class="flex items-center justify-center">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Event
      </button>
    </div>
  </form>
</div>
  )
}

export default EventForm