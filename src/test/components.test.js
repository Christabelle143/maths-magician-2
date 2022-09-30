import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Quote from '../components/Quote';

it('should render home component correctly', () => {
  const home = renderer
    .create(<Home />)
    .toJSON();
  expect(home).toMatchSnapshot();
});
it('should render quote component correctly', () => {
  const quote = renderer
    .create(<Quote />)
    .toJSON();
  expect(quote).toMatchSnapshot();
});
it('should render Calculator component correctly', () => {
  const calculate = renderer
    .create(<Calculator />)
    .toJSON();
  expect(calculate).toMatchSnapshot();
});
it('should render Navbar component correctly', () => {
  <Router>
    const navbar = renderer
    .create(
    <Navbar />
    )
    .toJSON();
    expect(navbar).toMatchSnapshot();
  </Router>;
});
