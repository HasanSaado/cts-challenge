// Libraries
import React, { useContext, useState } from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { EmployeesContext } from 'App';

// Components
import Header from 'components/header';

interface Employee {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  homeAddress: string;
  workAddress: string;
  job: string;
  education: string;
}

export default function Dashboard() {
  const employees = useContext(EmployeesContext);

  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'middleName', headerName: 'Middle Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
    { field: 'homeAddress', headerName: 'Home Address', width: 300 },
    { field: 'workAddress', headerName: 'Work Address', width: 300 },
    { field: 'job', headerName: 'Job', width: 150 },
    { field: 'education', headerName: 'Education', width: 150 },
  ];

  const data = employees.employees;

  const onChangeInput = (e: any, employeeId: any) => {
    employees.updateEmployees(e, employeeId)
  }

  const hanldeDeleteEmployee = (id: number) => {
    employees.deleteEmployee(id);
  }

  /**
   * 
   */
  return (
    <div>
      <Header />
      <div className="mt-5 container">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Home Address</th>
              <th>Work Address</th>
              <th>Job</th>
              <th>Education</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee: Employee) => (
              <tr key={employee.id}>
                <td>
                  <input
                    name="firstName"
                    value={employee.firstName}
                    type="text"
                    onChange={(e) => onChangeInput(e, employee.id)}
                    placeholder="First Name"
                  />
                </td>
                <td>
                  <input
                    name="middleName"
                    value={employee.middleName}
                    type="text"
                    onChange={(e) => onChangeInput(e, employee.id)}
                    placeholder="Middle Name"
                  />
                </td>
                <td>
                  <input
                    name="lastName"
                    value={employee.lastName}
                    type="text"
                    onChange={(e) => onChangeInput(e, employee.id)}
                    placeholder="Last Name"
                  />
                </td>
                <td>
                  <input
                    name="phoneNumber"
                    type="number"
                    value={employee.phoneNumber}
                    onChange={(e) => onChangeInput(e, employee.id)}
                    placeholder="Phone Number"
                  />
                </td>
                <td>
                  <input
                    name="email"
                    value={employee.email}
                    type="text"
                    onChange={(e) => onChangeInput(e, employee.id)}
                    placeholder="Email"
                  />
                </td>
                <td>
                  <input
                    name="homeAddress"
                    type="text"
                    value={employee.homeAddress}
                    onChange={(e) => onChangeInput(e, employee.id)}
                    placeholder="Home Address"
                  />
                </td>
                <td>
                  <input
                    name="workAddress"
                    type="text"
                    value={employee.workAddress}
                    onChange={(e) => onChangeInput(e, employee.id)}
                    placeholder="Work Address"
                  />
                </td>
                <td>
                  <input
                    name="job"
                    type="text"
                    value={employee.job}
                    onChange={(e) => onChangeInput(e, employee.id)}
                    placeholder="Job"
                  />
                </td>
                <td>
                  <input
                    name="education"
                    type="text"
                    value={employee.education}
                    onChange={(e) => onChangeInput(e, employee.id)}
                    placeholder="Education"
                  />
                </td>
                <td>
                  <i
                    className="fa fa-trash mx-4 text-danger"
                    aria-hidden="true"
                    onClick={() => hanldeDeleteEmployee(employee.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button
          variant="primary"
          className="mt-2"
        >
          <NavLink
            to="/add-employee"
            className="nav-link"
          >
            Add Employee
          </NavLink>
        </Button>
      </div>
    </div>
  );
}
