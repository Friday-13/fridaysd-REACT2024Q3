import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../App';
import { mockFetch } from '../test/__mocks__/mock-fetch';
import apiResponse from './people.json';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', async () => {
  window.fetch = mockFetch(apiResponse);
  render(<App />);
  expect(true).toBeTruthy();
});
