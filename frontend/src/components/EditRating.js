import React from 'react'

const EditRating = ({setEditRatings, handleEditChange, handleEditSubmit}) => {
  return (
    <tr>
        <td>
            <input type="number"  
            required = "required" 
            placeholder = "Enter id" 
            name ="id"
            value={setEditRatings.id}
            onChange={handleEditChange}></input>
        </td>
        <td>
            <input type="text"  
            required = "required" 
            placeholder = "Enter username" 
            name ="username"
            value={setEditRatings.username}
            onChange={handleEditChange}></input>
        </td>
        <td>
            <input type="text"  
            required = "required" 
            placeholder = "Enter Artist" 
            name ="artist"
            value={setEditRatings.artist}
            onChange={handleEditChange}></input>
        </td>
        <td>
            <input type="text"  
            required = "required" 
            placeholder = "Enter Song" 
            name ="song"
            value={setEditRatings.song}
            onChange={handleEditChange}></input>
        </td>
        <td>
            <input type="number"  
            required = "required" 
            placeholder = "Enter rating" 
            name ="rating"
            value={setEditRatings.rating}
            onChange={handleEditChange}></input>
        </td>
        <td>
            <button type='submit' onSubmit ={handleEditSubmit}>Save</button>
        </td>
    </tr>
  )
}

export default EditRating;