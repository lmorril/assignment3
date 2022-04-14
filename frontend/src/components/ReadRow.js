import React from 'react'

export const ReadRow = ({item, handleEdit, handleDelete}) => {
  return (
      <tr key={item.id}>
        <td>{item.username}</td>
        <td>{item.artist}</td>
        <td>{item.song} </td>
        <td>{item.rating}</td>
        <td>
          <button type='button' onClick ={(event) => handleEdit(event,item)}>
            Edit
          </button>
        </td>
        <td>
          <button type='button' onClick ={() => handleDelete(item)}>
            Delete
          </button>
        </td>
      </tr>
  );
};

export default ReadRow
