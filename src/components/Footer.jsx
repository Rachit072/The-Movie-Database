import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='bg-darkblue-500 ' style={{backgroundColor:"rgb(13,37,65)"}}>
        <nav className='flex py-20 justify-center'>
            <div className='mr-20'>
                <div><img className='w-40 h-25 pb-5 float-right ' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" /></div>
                <div>
                    <button className='font-bold bg-white py-2 px-4 rounded text-blue-400'>JOIN THE CUMMUNITY</button>
                </div>
            </div>
            <div className='text-white mr-10'>
                <h3 className='font-bold text-xl'>THE BASICS</h3>
                <ul className='list-none pl-0'>
                  <li><a className='text-white no-underline' href="/">About TMDB</a></li>
                  <li><a className='text-white no-underline' href="/">Contact Us</a></li>
                  <li><a className='text-white no-underline'href="/">Support Form</a></li>
                  <li><a className='text-white no-underline' href="/">API</a></li>
                  <li><a className='text-white no-underline' href="/">System Status</a></li>
                </ul>
            </div>
            <div className='text-white mr-10'>
              <h3 className='font-bold text-xl'>GET INVOLVED</h3>
                <ul className='list-none pl-0'>
                  <li><a className='text-white no-underline' href="/">Contribution Bible</a></li>
                  <li><a className='text-white no-underline' href="/">Add New Movie</a></li>
                  <li><a className='text-white no-underline'href="/">Add New TV Show</a></li>
                </ul>
            </div>
            <div className='text-white mr-10'>
              <h3 className='font-bold text-xl'>COMMUNITY</h3>
                <ul className='list-none pl-0'>
                  <li><a className='text-white no-underline' href="/">Guidelines</a></li>
                  <li><a className='text-white no-underline' href="/">Discussions</a></li>
                  <li><a className='text-white no-underline'href="/">Leaderboard</a></li>
                  <li><a className='text-white no-underline' href="/">Twitter</a></li>
                </ul>
            </div>
            <div className='text-white mr-10'>
              <h3 className='font-bold text-xl'>LEGAL</h3>
                <ul className='list-none pl-0'>
                  <li><a className='text-white no-underline' href="/">Terms of Use</a></li>
                  <li><a className='text-white no-underline' href="/">API Terms of Use</a></li>
                  <li><a className='text-white no-underline'href="/">Privacy</a></li>
                </ul>
            </div>
        </nav>
        <div className='flex justify-center text-blue-800'>Rachit@2023</div>
      </div>
    </div>
  )
}
