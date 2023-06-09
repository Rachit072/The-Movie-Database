import React,{useState} from 'react'
import Movielist from '../Movielist';
import MovielistWeek from '../MovieListWeek';

export default function SwitchTrending() {
    const [selectedOption, setSelectedOption] = useState("today");

    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="switch-container">
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="option"
              value="today"
              checked={selectedOption === "today"}
              onChange={() => handleOptionChange("today")}
            />
            Today
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="week"
              checked={selectedOption === "week"}
              onChange={() => handleOptionChange("week")}
            />
            Week
          </label>
        </div>
        <div className="component-container">
          {selectedOption === "today" && <Movielist/>}
          {selectedOption === "week" && <MovielistWeek />}
        </div>
      </div>
    );
  };
  
