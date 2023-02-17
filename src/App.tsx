// Libraries                                                                                                                                                                                                                     
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Pages
import LoginPage from 'pages/login';
import Dashboard from 'pages/dashboard';
import AddEmployee from 'pages/add-employee';

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles.scss';

// Route
import PrivateRoute from 'routes/PrivateRoute';

export const EmployeesContext = createContext<any>([]);

function App() {

  const [employees, setEmployees] = useState<any>([]);

  const addEmployee = (value: any) => {
    setEmployees([...employees, value]);
  }

  const updateEmployees = (e: any, id: any) => {
    const { name, value } = e.target

    const editData = employees.map((item: any) =>
      item.id === id && name ? { ...item, [name]: value } : item
    )

    setEmployees(editData)
  };

  const deleteEmployee = (employeeId: number) => {
    setEmployees(employees.filter(({ id }: { id: number }) => id !== employeeId));
  }

  /**
   * 
   */
  return (
    <EmployeesContext.Provider value={{ employees, addEmployee, updateEmployees, deleteEmployee }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LoginPage />}
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute redirectTo={"/"}>
              <Dashboard />
            </PrivateRoute>}
          />
          <Route
            path="/add-employee"
            element={<PrivateRoute redirectTo={"/"}>
              <AddEmployee />
            </PrivateRoute>}
          />
        </Routes>
      </Router>
    </EmployeesContext.Provider>
  );
}

export default App;