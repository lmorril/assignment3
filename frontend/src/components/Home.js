import React, {useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import ReadRow from './ReadRow'
import EditRating from './EditRating'


const Home = () => {
  const [ratings, setRatings] = useState ([]);

  const [addRatingsData, setAddRatingsData] = useState ({
    id: "",
    username: "",
    artist: "",
    song: "",
    rating: "",
  });

  const[editRatingsId, setEditRatingsId] = useState(null);

  const[editRatings, setEditRatings] = useState({
    id: "",
    username: "",
    artist: "",
    song: "",
    rating: "",});

  const url = 'http://127.0.0.1:8000/api/ratings/';


  
  const refreshList = () => {
    // We are using the axios library for making HTTP requests.
    // Here is a GET request to our api/todos path.
    // If it succeeds, we set the todoList to the resolved data.
    // Otherwise, we catch the error and print it to the console (rejected data).
    // We are using async calls here. Please refer to the JavaScript
    // tutorial for how they work.
    axios
      .get("http://localhost:8000/api/ratings/")
      // To change a value in the `state` object for rendering, use `setState()`.
      // Here we get all todoList data. Each resolve (res) object has a data field.
      .then((res) => setRatings(res.data))
      .catch((err) => console.log(err));
  };


  const handleChange = (e) => {
    const {name, value} = e.target;
    setAddRatingsData({...addRatingsData, 
        [name]: value
    });
        console.log(addRatingsData);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const ratingsData = {
        id : addRatingsData.id,
        username: addRatingsData.username,
        artist: addRatingsData.artist,
        song: addRatingsData.song,
        rating: addRatingsData.rating,
    };
    axios.post(url, ratingsData).then((response) => {
        refreshList()});
};

    useEffect( () => {
    const fetchRatings = async() => {
      const response = await fetch(url);
      const ratingData = await response.json();
      setRatings(ratingData);
    };
    fetchRatings();
  }, []);

  const handleEdit = (event, item) => {
    event.preventDefault();
    setEditRatingsId(item.id)

    const formValues = {
      Id: item.id,
      Userame: item.username, 
      Artist: item.artist,
      Song: item.song,
      Ratings: item.rating
    }
    setEditRatings(formValues);
  }


  const handleEditChange = (e) => {
    const {name, value} = e.target;
    setEditRatings({...editRatings, 
        [name]: value
    });
        console.log(editRatings);
}

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const editRatingsData = {
        id : editRatings.id,
        username: editRatings.username,
        artist: editRatings.artist,
        song: editRatings.song,
        rating: editRatings.rating,
    };
   
axios.put(url, editRatingsData).then((response) => {
  console.log(response.status);
  console.log(response.data);
});
}

  // const newRatings = [...ratings];
  // const index = ratings.findIndex((ratings) => ratings.id === editRatingsId)
  // newRatings[index] = editRatingsData

  // setRatings(newRatings);
  // setEditRatingsId(null)



const handleDelete = (item) => {
  axios 
   .delete(`http://127.0.0.1:8000/api/ratings/${item.id}`)
   .then((res) => refreshList()) ;
   
 };



  return(
    <div className='app-container'>
     <form onSubmit={handleEditSubmit}>
      <table>
        <thead>
        <tr>
        <th>Username</th>
        <th>Artist</th>
        <th>Song</th>
        <th>Rating</th>
        <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {ratings.map((item) => (
            <Fragment key={item.id}>
              {editRatingsId === item.id ? (<EditRating 
              setEditRatings={setEditRatings} 
              handleEditChange={handleEditChange}
              handleEditSubmit={handleEditSubmit}
              />) 
              :
              (<ReadRow item={item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}/>
              )}
            </Fragment>
           
          )
          )}
        </tbody>
      </table>
      </form>
      <h2>Add Rating</h2>
      <form>
        <input 
          type='number' 
          name='id' 
          required='required' 
          placeholder='enter id'
          value={addRatingsData.id} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='username' 
          required='required' 
          placeholder='enter username'
          value={addRatingsData.username} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='artist' 
          required='required' 
          placeholder='enter artist'
          value={addRatingsData.artist} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='song' 
          required='required' 
          placeholder='enter song'
          value={addRatingsData.song} 
          onChange={handleChange}
        />
        <input 
          type='number' 
          name='rating' 
          required='required' 
          placeholder='enter rating'
          value={addRatingsData.rating} 
          onChange={handleChange}
        />
        </form>
        <form onSubmit={handleSubmit}>
        <button type = 'submit'> Add Rating</button>
      </form>
    </div>



  )



//   const [editRatingId, setEditRatingId] = useState(null);

//   // async function getRatings() {
//   //   const { data } = await axios.get(
//   //     'http://127.0.0.1:8000/api/ratings/'
//   //   );
//   //   console.log(data);
//   // }
//   // getRatings();



//   const refreshList = () => {
//     // We are using the axios library for making HTTP requests.
//     // Here is a GET request to our api/todos path.
//     // If it succeeds, we set the todoList to the resolved data.
//     // Otherwise, we catch the error and print it to the console (rejected data).
//     // We are using async calls here. Please refer to the JavaScript
//     // tutorial for how they work.
//     axios
//       .get("http://localhost:8000/api/ratings/")
//       // To change a value in the `state` object for rendering, use `setState()`.
//       // Here we get all todoList data. Each resolve (res) object has a data field.
//       .then((res) => setRatings(res.data))
//       .catch((err) => console.log(err));
//   };









// return ratings.map((item) => (
//   <li
//     key={item.id}
//     className="list-group-item d-flex justify-content-between align-items-center"
//   >
//     <span
//       id = {item.id}
//       username = {item.username}
//       artist = {item.artist}
//       song = {item.song}
//       rating = {item.rating}
//     >
//       <div>
//       <p>Id: {item.id} </p>
//       <p>Userame: {item.username}</p>
//       <p>Artist: {item.artist}</p>
//       <p>Song: {item.song} </p>
//       <p>Ratings: {item.rating}</p></div>
//       <Fragment>
//         {editRatingId == item.id ? <EditRating/> : 
//         (<ReadRow item={item} handleEdit={handleEdit} />) }
//       </Fragment>
//     </span>
//     <span>
//           <button
//             // If the user clicks the Delete button, call the handleDelete function.
//             onClick={() => handleDelete(item)}
//             className="btn btn-danger"
//           >
//             Delete{" "}
//           </button>
//         </span>
//       </li>
//     ));
  };












//     {/* UI for editing and deleting items and their respective events. */}
//     <span>
//      {/* <button
//         // If the user clicks the Edit button, call the editItem function.
//         onClick={() => this.editItem(item)}
//         className="btn btn-secondary mr-2"
//       >
//         {" "}
//         Edit{" "}
// </button>*/}
//       <button
//       type ="button"
//         // If the user clicks the Delete button, call the handleDelete function.
//         onClick={() => handleDelete(item)}
//         className="btn btn-danger"
//       >
//         Delete{" "}
//       </button>
//     </span>
//   </li>
// ));



// };






  // return (
  //   <>
  //   {users.map((data, index) => {
  //     return(
        
  //       <div key={index}>
  //        <li> 
  //          <div> 
  //           <p>Username: {data.username}, Password: {data.password}
  //         <button type="submit" className="btn btn-primary">Delete</button>
  //           </p>
  //         </div>
          
  //           </li>
  //       </div>
        
  //     )
  //   })}
  //   </>
  // )
// }

export default Home