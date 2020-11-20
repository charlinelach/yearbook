import React from "react";
import { SortButtonASC, SortButtonDESC } from "./SortButtons"

function Table(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name
            <SortButtonASC
              onClick={props.onClick}
              data-value="last-asc"
            />
            <SortButtonDESC
              onClick={props.onClick}
              data-value="last-desc"
            />
          </th>
          <th scope="col">Email Address</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        {
          props.employees.map((employee, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={employee.picture.large} alt="Employee"></img>
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.age}</td>
              </tr>)
          })
        }
      </tbody>
    </table>
  );
}

export default Table;