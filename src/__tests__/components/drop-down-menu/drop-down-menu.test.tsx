import DropDownItem from '@components/drop-down-menu/drop-down-item';
import DropDownMenu from '@components/drop-down-menu/drop-down-menu';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('drop-down-menu', () => {
  test('Show and hide drop down', () => {
    render(
      <DropDownMenu menuTitle={'Test drop-down'}>
        <DropDownItem>First item</DropDownItem>
        <DropDownItem>Second item</DropDownItem>
      </DropDownMenu>
    );

    const menu = screen.getByText('Test drop-down');
    expect(screen.queryByText(/First item/i)).toBeNull();
    fireEvent.click(menu);
    expect(screen.queryByText(/first item/i)).toBeInTheDocument();

    fireEvent.click(menu);
    expect(screen.queryByText(/first item/i)).toBeNull();
  });
});
