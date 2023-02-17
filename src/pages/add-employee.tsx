// Libraries
import React, { useState, useContext, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { EmployeesContext } from 'App';
import Select from 'react-select'

import countryList from 'react-select-country-list';

export default function AddEmployee() {
  const employees = useContext(EmployeesContext);
  const navigate = useNavigate();
  // State
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [homeStreet, setHomeStreet] = useState('');
  const [homeBuilding, setHomeBuilding] = useState('');
  const [homeApartment, setHomeApartment] = useState('');
  const [homeCity, setHomeCity] = useState('');
  const [homeCountry, setHomeCountry] = useState<any>();
  const [workStreet, setWorkStreet] = useState('');
  const [workBuilding, setWorkBuilding] = useState('');
  const [workApartment, setWorkApartment] = useState('');
  const [workCity, setWorkCity] = useState('');
  const [workCountry, setWorkCountry] = useState<any>();
  const [job, setJob] = useState('');
  const [education, setEducation] = useState('');

  const options = useMemo(() => countryList().getData(), [])

  const handleSubmitEmployee = async () => {
    await employees.addEmployee({
      id: new Date().valueOf(),
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      homeAddress: `${homeStreet}, ${homeBuilding}, ${homeApartment}, ${homeCity}, ${homeCountry?.label}`,
      workAddress: `${workStreet}, ${workBuilding}, ${workApartment}, ${workCity}, ${workCountry?.label}`,
      job: job,
      education: education
    });
    navigate('/dashboard');
  }

  /**
   *
   */
  return (
    <div className="app container login-form d-flex align-items-center">
      <Form
        onSubmit={handleSubmitEmployee}
        className="w-sm-100 w-md-50 m-auto mt-5"
      >
        <Form.Group as={Row} className="mb-3" controlId="name">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Col>
          <Col>
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Middle Name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <h2>Home Address</h2>
        <Form.Group as={Row} className="mb-3" controlId="homeAddress">
          <Col>
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              placeholder="Street"
              value={homeStreet}
              onChange={(e) => setHomeStreet(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Building</Form.Label>
            <Form.Control
              type="text"
              placeholder="Building"
              value={homeBuilding}
              onChange={(e) => setHomeBuilding(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Apartment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apartment"
              value={homeApartment}
              onChange={(e) => setHomeApartment(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={homeCity}
              onChange={(e) => setHomeCity(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Country</Form.Label>
            {/** @ts-ignore */}
            <Select options={options} value={homeCountry} onChange={(e: any) => setHomeCountry(e)} />
          </Col>
        </Form.Group>
        <h2>Work Address</h2>
        <Form.Group as={Row} className="mb-3" controlId="homeAddress">
          <Col>
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              placeholder="Street"
              value={workStreet}
              onChange={(e) => setWorkStreet(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Building</Form.Label>
            <Form.Control
              type="text"
              placeholder="Building"
              value={workBuilding}
              onChange={(e) => setWorkBuilding(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Apartment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apartment"
              value={workApartment}
              onChange={(e) => setWorkApartment(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={workCity}
              onChange={(e) => setWorkCity(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Country</Form.Label>
            {/** @ts-ignore */}
            <Select options={options} value={workCountry} onChange={(e: any) => setWorkCountry(e)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="name">
          <Col>
            <Form.Label>Job</Form.Label>
            <Form.Control
              type="text"
              placeholder="Job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Education</Form.Label>
            <Form.Control
              type="text"
              placeholder="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button
          variant="danger"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
