// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import ListBooks from '../GoogleBooks/ListBooks'

test('shows the children when the checkbox is checked', () => {
  const books = [{
    title: "ruby is the best",
    subtitle: "learning ruby with dios",
    authors: "ewerton rosendo",
    publishedDate: "24/07/2024",
    publisher: "saraiva"
  }]
  render(<ListBooks books={books} />)
  expect(screen.getByText("ruby is the best")).toBeInTheDocument()
  expect(screen.getByText("learning ruby with d..")).toBeInTheDocument()
  expect(screen.getByText("Author: ewerton rosendo..")).toBeInTheDocument()
  expect(screen.getByText("Published at 24/07/2024")).toBeInTheDocument()
  expect(screen.getByText("Publisher: saraiva")).toBeInTheDocument()
  
})