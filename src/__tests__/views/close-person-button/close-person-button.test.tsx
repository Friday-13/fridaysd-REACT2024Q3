import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ClosePersonButton from '@views/person/close-person-button';
import { pushMock, useRouterMocked } from '../../../test/__mocks__/nextNavigationMock';

jest.mock('next/navigation', () => ({
  useRouter: () => useRouterMocked(),
  useSearchParams: jest.fn().mockReturnValue('page=3'),
}));

describe('Close person button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders and calls useRouter', () => {
    render(<ClosePersonButton />);
    const button = screen.getByTestId('close-button');
    expect(button).toBeInTheDocument();
    expect(useRouterMocked).toHaveBeenCalled();
  });

  it('calls router.push when button is clicked', () => {
    render(<ClosePersonButton />);
    const button = screen.getByTestId('close-button');
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/?page=3');
  });
});
