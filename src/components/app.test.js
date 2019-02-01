import { render, fireEvent } from 'react-testing-library';
import App from './app.js';
import React from 'react';

test('does button toggle between start and reset', () =>{
  const { getByText } = render(<App>Start</App>);
  const buttonToggle = getByText('Start');
  fireEvent.click(buttonToggle);
  expect(buttonToggle.textContent).toEqual('Reset');
})

// test('does second button appear when start button is pressed', () => {
//   const { getByText } = render(<App>Start</App);
//   const { getTestId } = render()
//   const startButton = getByText('Start');
//   fireEvent.click(startButton);
//
// })
