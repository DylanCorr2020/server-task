import React from 'react'

const TodoList = () => {
  return (
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
      </tr>
    </tbody>
  </table>
</div>
  );
}

export default TodoList