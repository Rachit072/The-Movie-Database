import React from 'react'

export default function SwitchToggle({toggle,handleToday,handleWeek}) {
  return (
    <div className='border border-blue rounded-5  flex'>
          <button className={ toggle ? 'px-3 py-1 bg-blue rounded-5 text-white' : 'px-3 py-1' } onClick={handleToday}>Today</button>
          <button className={ !toggle ? 'px-3 py-1 bg-blue rounded-5 text-white' : 'px-3 py-1' } onClick={handleWeek}>This Week</button>
    </div>
  )
}
