// __tests__/hidden-message.js
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react'
import * as React from 'react';
import BookById from '../MyBooks/BookById';

test('shows the children when the checkbox is checked', () => {
  render(<BookById />);
  expect(screen.getByText("Title:")).toBeInTheDocument()
  expect(screen.getByText("Author:")).toBeInTheDocument()
  expect(screen.getByText("Publisher:")).toBeInTheDocument()
  expect(screen.getByText("Published_at:")).toBeInTheDocument()
  expect(screen.getByText("Description:")).toBeInTheDocument()
});
