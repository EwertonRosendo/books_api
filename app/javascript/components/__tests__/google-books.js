// __tests__/hidden-message.js
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react'
import * as React from 'react';
import GoogleBooks from '../GoogleBooks/GoogleBooks';

test('shows the children when the checkbox is checked', () => {
  render(<GoogleBooks />);
  expect(screen.getByText("our books")).toBeInTheDocument()
});
