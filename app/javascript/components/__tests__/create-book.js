// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom'
import {render, fireEvent, screen, waitFor} from '@testing-library/react'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import CreateBook from '../MyBooks/CreateBook'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(<CreateBook/>) 
  
  expect(screen.getByText("Title:")).toBeInTheDocument()
  expect(screen.getByText("Author:")).toBeInTheDocument()
  expect(screen.getByText("Publisher:")).toBeInTheDocument()
  expect(screen.getByText("Published_at:")).toBeInTheDocument()
  expect(screen.getByText("Description:")).toBeInTheDocument()
})