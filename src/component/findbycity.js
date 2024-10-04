import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import './findbycity.css';

const cities = [
  { city: "New York City", countries: ["USA", "Canada", "Mexico"] },
  { city: "Baltimore", countries: ["USA", "Canada", "Mexico"] },
  { city: "Philadelphia", countries: ["USA", "Canada", "Mexico"] },
  { city: "Boston", countries: ["USA", "Canada", "Mexico"] },
  { city: "Brooklyn", countries: ["USA", "Canada", "Mexico"] },
  { city: "Washington, DC", countries: ["USA", "Canada", "Mexico"] },
  { city: "Houston", countries: ["USA", "Canada", "Mexico"] },
  { city: "San Francisco", countries: ["USA", "Canada", "Mexico"] },
  { city: "Queens", countries: ["USA", "Canada", "Mexico"] },
  { city: "Seattle", countries: ["USA", "Canada", "Mexico"] },
  { city: "Dallas", countries: ["USA", "Canada", "Mexico"] },
  { city: "Miami", countries: ["USA", "Canada", "Mexico"] },
  { city: "Bronx", countries: ["USA", "Canada", "Mexico"] },
  { city: "Atlanta", countries: ["USA", "Canada", "Mexico"] },
  { city: "Austin", countries: ["USA", "Canada", "Mexico"] },
  { city: "Los Angeles", countries: ["USA", "Canada", "Mexico"] },
  { city: "Long Island", countries: ["USA", "Canada", "Mexico"] },
  { city: "Denver", countries: ["USA", "Canada", "Mexico"] },
  { city: "Chicago", countries: ["USA", "Canada", "Mexico"] },
  { city: "San Diego", countries: ["USA", "Canada", "Mexico"] }
];

function CityDropdown({ city, countries }) {
  return (
    <Dropdown className="city-dropdown">
      <Dropdown.Toggle as="p" className="dropdown-toggle-text">
        {city}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {countries.map((country, index) => (
          <Dropdown.Item key={index} href="#">
            {country}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

function CityGrid() {
  return (
    <Container className="mt-8 bg-yellow-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Find doctors and dentists by city</h2>
      <Row>
        {cities.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <CityDropdown city={item.city} countries={item.countries} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CityGrid;
