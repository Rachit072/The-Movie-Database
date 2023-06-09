import React from 'react'

export default function Leaderboard() {
  return (
    <div className='mb-4'>
      <div className='flex justify-start items-center'>
        <h2>Leaderboard</h2>
        <div>
            <p><span className='Dot all'></span>All Time Edits</p>
            <p><span className='Dot this_week' ></span>Edits This Week</p>
        </div>
      </div>
      <div>
        <ol>
            <li></li>
        </ol>
      </div>
    </div>
  )
}
