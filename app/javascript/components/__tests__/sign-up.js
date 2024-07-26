// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup

import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import SignUp from '../Sign/SignUp'

test('shows the children when the checkbox is checked', () => {
  render(<SignUp />);

  // Check that the sign-in text is present
  expect(screen.getByText("Sign up")).toBeInTheDocument();

  // Get all input elements
  const inputs = screen.getAllByRole('input');
  const buttons = screen.getAllByRole('button');

  expect(inputs.length).toBe(4);
  expect(buttons.length).toBe(1);
});
