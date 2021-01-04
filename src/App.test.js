import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<Router><App /></Router>);
  const loadingElement = getByText("Loading...");
  expect(loadingElement).toBeInTheDocument;
});
