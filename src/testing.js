// //my import goes here. We need to import something to test
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ContactForm from "./components/ContactForm";



test('checks for app rendering', async () => {
    render(<ContactForm />)
  
    // fill out the form
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: {value: 'Karmen'},
    })
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: {value: 'Durbin'},
    })
    fireEvent.change(screen.getByLabelText(/Email/i), {target: {value: 'email'}})

    fireEvent.click(screen.getByText(/submit/i))

      // wait for the error message
  const alert = await screen.findByRole('alert')

  expect(alert).toHaveTextContent(/internal server error/i)
  expect(window.localStorage.getItem('token')).toBeNull()
})