import React from 'react'

    const Countryzone = ({ countryzone, handleChange }) => {
      return (
        <div>
          <center><h4>List of Timezone Countries:</h4></center>
            <select className="selbox" onChange= {(e)=> handleChange(e)}>
                {countryzone.map((list, i) => (
                    <option key= {i}  value={list.zoneName}> {list.zoneName}</option>
                ))}
            </select>
        </div>
      )
    };

export default Countryzone;

