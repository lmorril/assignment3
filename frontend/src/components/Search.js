import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';


function Search() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    let value = event.target.value
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.artist.search(value) != -1;
    });

    setFilteredData(result);

  }
  useEffect(() => {
    axios("http://localhost:8000/api/ratings/")
    .then(response => {
      console.log(response.data)
      setAllData(response.data);
      setFilteredData(response.data);
    })
    .catch(error => {
      console.log("Error getting data: " + error);
    })
  }, []);

  return (
      <div className="App">
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
          <label>Search:</label>
          <input type="text" onChange={(event) =>handleSearch(event)} />
        </div>
        <div style={{padding:10}}>
          {filteredData.map((value,index)=>{
            return(
              <div key={value.id}>
                <div>
                  {value.artist} - {value.song} - {value.rating}
                </div>
              </div>
            )
            })}
          </div>
        </div>
        )





}

  


export default Search;