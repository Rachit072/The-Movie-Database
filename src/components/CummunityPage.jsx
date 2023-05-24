export default function CummunityPage(){
    return <div>
        <div className="flex p-10" style={{backgroundImage:`url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg")`}}>
            <div className="flex-col">
                <div>
                    <h2 className="text-white font-bold">Join Today</h2>
                </div>
                <div className="flex">
                <div className="mr-40">
                    <p className='text-white w-65 py-10'>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Hotstar, Voot, and Jio Cinema.</p>
                    <p>
                        <button className="text-white px-4 py-2 rounded-2 bg-purple-500 font-bold">Sign Up</button>
                    </p>                
                </div>
                <div>
                    <ul className="text-white list-disc">
                        <li>Enjoy TMDB ad free</li>
                        <li>Maintain a personal watchlist</li>
                        <li>Filter by your subscribed streaming services and find something to watch</li>
                        <li>Log the movies and TV shows you've seen</li>
                        <li>Build custom lists</li>
                        <li>Contribute to and improve our database</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
}