// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import SearchBook from '../GoogleBooks/SearchBook'

test('shows the children when the checkbox is checked', async () => {
  render(<SearchBook />)
  expect(screen.getByText("Search")).toBeInTheDocument()
})