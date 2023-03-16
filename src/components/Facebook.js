import { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
    const [isClicked, setIsClicked] = useState(false)
    const [sortOrder, setSortOrder] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    const handleShowProfile = () => {
        setIsClicked(!isClicked)
    }

    const handleSortByName = () => {
        setSortOrder("name")
    }

    const handleSortByCountry = () => {
        setSortOrder("country")
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    const filteredProfiles = profiles.filter((profile) => 
        profile.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const sortedProfiles = [...filteredProfiles].sort((a, b) => {
        if (sortOrder === 'name') {
          return a.firstName.localeCompare(b.firstName);
        } else if (sortOrder === 'country') {
          return a.country.localeCompare(b.country);
        } else {
          return 0;
        }
      });
      
  return (
    <div>
    
        <div>
            <input type="text" onChange={handleSearch} placeholder="Search..." />
            <button onClick={handleSortByName}>Sort by name</button>
            <button onClick={handleSortByCountry}>Sort by country</button>
        </div>


      {sortedProfiles.map((profile) => (
        <div className="FacebookProfile">
          <div className='FacebookImg'>
          <button onClick={handleShowProfile}>
            <img src={profile.img} alt="profile" />
            </button>
          </div>
          {isClicked &&
            <div className="FacebookData">
            <p key={profile.firstName}>First name: {profile.firstName}</p>
            <p key={profile.lastName}>Last name: {profile.lastName}</p>
            <p key={profile.country}>Country: {profile.country}</p>
            <p key={profile.isStudent}>Type: {profile.isStudent ? "Student" : "Teacher"}</p>
          </div>}
        </div>
      ))}
    </div>
  );
}

export default Facebook;
