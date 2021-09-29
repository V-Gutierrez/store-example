import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import App from 'App';


describe('App component', () => {
  it('should render properly', () => {
    render(<App />)

    const container = screen.getByTestId('app-container')

    expect(container).toBeDefined();
  });
})
