import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { WishlistButton } from 'components';


describe('WishlistButton component', () => {

  it('should render properly', () => {
    render(<WishlistButton />)

    const container = screen.getByTestId('wishlist-button')

    expect(container).toBeDefined();
  });

  it('should change after action', () => {
    render(<WishlistButton />)

    const container = screen.getByTestId('wishlist-button')
    const icon = screen.getByTestId('heart-icon')

    expect(container).toBeDefined();
    expect(icon).toBeDefined();

    fireEvent.click(container)

    expect(container).toHaveClass('wishlist-button__container--bookmarked')
  });
})
