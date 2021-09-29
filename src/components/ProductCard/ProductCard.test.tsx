import {
  render,
  screen,
} from '@testing-library/react';
import { response } from 'services/fakeApiResponse';
import { ProductCard } from 'components';


describe('ProductCard component', () => {
  const mockedProp = response.data.products[0]

  it('should render properly based on props', () => {
    render(<ProductCard {...mockedProp} />)

    const title = screen.getByText(mockedProp.productTitle)


    expect(title).toBeDefined()
  });
})
