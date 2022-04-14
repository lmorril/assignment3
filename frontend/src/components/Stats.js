
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import ReactDOM  from 'react-dom';
import { NavItem } from 'reactstrap';


function Stats() {
    const [rate, getRate] = useState([])

    useEffect(() => {
        axios("http://localhost:8000/api/ratings/")
        .then(response => {
          console.log(response.data)
          getRate(response.data);
        })
        .catch(error => {
          console.log("Error getting data: " + error);
        })
      }, []);

    function getAvg(myArray) {
        console.log(myArray);
        var i=0, sum = 0, len = myArray.length;
        while (i < len) {
            sum = sum + myArray[i++];
        }

        return sum/len
    }

    const acc = [];

    const reduced = rate.reduce(function(m,d) {
        if(!m[d.artist]){
            m[d.artist] = {...d, count:1};
            return m;
        }

        m[d.artist].rating += d.rating;
        m[d.artist].count += 1;
        return m;
    }, {});

    const artistAvg = Object.keys(reduced).map(function(k){
        const item = reduced[k];
        return {
            artist: item.artist,
            rating: item.rating/item.count
        }
    });

    const reducedSongs = rate.reduce(function(m,d) {
        if(!m[d.song]){
            m[d.song] = {...d, count:1};
            return m;
        }

        m[d.song].rating += d.rating;
        m[d.song].count += 1;
        return m;
    }, {});

    const songAvg = Object.keys(reducedSongs).map(function(k){
        const item = reducedSongs[k];
        return {
            song: item.song,
            rating: item.rating/item.count
        }
    });



    return (
        <div>
            {rate.map((value,index) => {
                acc.push(value.rating)
            })}

            <div>
                Avg User Rating: {getAvg(acc)}
            </div>
             <div>
                 <ul>
                    {artistAvg.map((value2, index2) => {
                        return (
                            <li>
                                {value2.artist} : {value2.rating}
                            </li>
                        )

                    })}
                 </ul>
             </div>
             <div>
             <ul>
                    {songAvg.map((value3, index3) => {
                        return (
                            <li>
                                {value3.song} : {value3.rating}
                            </li>
                        )

                    })}
                 </ul>

             </div>


        </div>
    )
}

export default Stats;