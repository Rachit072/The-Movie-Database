import React from 'react'

export default function SwitchToggle({toggle,handleToday,handleWeek,items}) {
  return (
    <div className='border-blue rounded-5 h-25 mt-2'>
          <button className={ toggle ? 'px-3  py-1 bg-blue rounded-5 text-white' : 'px-3 py-1 ' } onClick={handleToday}>{items[0]}</button>
          <button className={ !toggle ? 'px-3  py-1 bg-blue rounded-5 text-white' : 'px-3 py-1' } onClick={handleWeek}>{items[1]}</button>
    </div>
  )
}
