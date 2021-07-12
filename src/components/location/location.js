import React from 'react'

const Location = ({availableCities}) => {
  return (
      <div>
          <ul>
              {availableCities.map((city, index) => (
                     <li key={index}>{city}, Finland</li>
              ))}
          </ul>
      </div>
     
  )
}

export default Location;