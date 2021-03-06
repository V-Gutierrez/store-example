import { ProductList } from 'components';
import { response } from 'services/fakeApiResponse';
import './App.css';

function App() {
  return (
    <div className="App" data-testid='app-container'>
      <ProductList products={response.data.products} />
    </div>
  );
}

export default App;
