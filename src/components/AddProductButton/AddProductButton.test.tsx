import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { AddProductButton } from 'components';


describe('AddProductButton component', () => {

  it('should render properly', () => {
    render(<AddProductButton />)


    const button = screen.getByTestId('button')


    expect(button).toBeDefined()
    expect(button).toHaveTextContent('ADICIONAR')
  });

  it('should update after action', () => {
    render(<AddProductButton />)

    const button = screen.getByTestId('button')

    expect(button).toBeDefined()
    expect(button).toHaveTextContent('ADICIONAR')

    fireEvent.click(button)

    expect(button).toBeDefined()
    expect(button).toHaveTextContent('ADICIONADO')
  });
})
