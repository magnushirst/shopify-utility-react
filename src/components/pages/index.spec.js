import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom'
import Index from './index';
import React from "react";

test('renders correct header', () => {
  render(
      <Router>
        <Index />
      </Router>
  );
  const linkElement = screen.getByText(/Shopify Utility App/i);
  expect(linkElement).toBeInTheDocument();
});
