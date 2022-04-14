import React, {useState} from 'react'
import axios from 'axios'

const AddRating = () => {

    const url = 'http://127.0.0.1:8000/api/ratings/'
    
    const [rating, setRating] = useState ({
      id: "",
      username: "",
      artist: "",
      song: "",
      rating: "",
    });



    const handleChange = (e) => {
        const {name, value} = e.target;
        setRating({...rating, 
            [name]: value
        });
            console.log(rating);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const ratingData = {
            id : rating.id,
            username: rating.username,
            artist: rating.artist,
            song: rating.song,
            rating: rating.rating,
        };
        axios.post(url, ratingData).then((response) => {
            console.log(response.status);
            console.log(response.data);
        });
    };



  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Id</label>
        <input type="number" className="form-control" id="id" placeholder="Enter Id" name = "id" value={rating.id} onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Enter username" name = "username" value={rating.username} onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Artist</label>
        <input type="text" className="form-control" id="artist" placeholder="Enter artist name" name = "artist" value={rating.artist} onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Song</label>
        <input type="text" className="form-control" id="song" placeholder="Enter Song" name="song" value={rating.song} onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Rating</label>
        <input type="number" className="form-control" id="rating" placeholder="Enter Rating" name="rating" value={rating.rating} onChange={handleChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>

    
  )
}

export default AddRating