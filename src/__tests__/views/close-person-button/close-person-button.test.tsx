import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ClosePersonButton from '@views/person/close-person-button';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('Close person button', () => {
  test('rendering', () => {
    render(<ClosePersonButton />);
    const button = screen.getByTestId('close-button');
    expect(button).toBeInTheDocument();
  });

  test('close person (redirect)', async () => {
    mockRouter.push('/2');
    render(<ClosePersonButton />);
    const button = screen.getByTestId('close-button');
    fireEvent.click(button);
    await waitFor(() => {
      expect(mockRouter.asPath).toEqual('/');
    });
  });
});
