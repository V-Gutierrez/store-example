import {
  render,
  screen,
} from '@testing-library/react';
import { response } from 'services/fakeApiResponse';
import { ProductList } from 'components';


describe('ProductList component', () => {
  const mockedProp = [response.data.products[0], response.data.products[1]]

  it('should render properly based on props', () => {
    render(<ProductList products={mockedProp} />)

    const container = screen.getByTestId("product-list")


    expect(container).toBeDefined()

    /* Check if children are being rendered correctly */
    expect(container).toHaveTextContent(mockedProp[0].productTitle)
    expect(container).toHaveTextContent(mockedProp[1].productTitle)
  });
})
