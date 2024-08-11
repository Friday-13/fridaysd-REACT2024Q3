import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ClosePersonButton from '@views/person/close-person-button';


describe('Close person button', () => {
  it('rendering', () => {
    render(<ClosePersonButton />);
    const button = screen.getByTestId('close-button');
    expect(button).toBeInTheDocument();
  });

  // it('close person (redirect)', async () => {
  //   render(<ClosePersonButton />);
  //   const button = screen.getByTestId('close-button');
  //   fireEvent.click(button);
  //   expect(mockPush).toHaveBeenCalledWith('searchString=luke&page=1');
  // });
});
