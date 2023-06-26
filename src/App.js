import './App.css';
import Products from './componentes/Products.jsx';
import products from './data_products';

function App() {
  return (
    <main>
        <section>
          <div className="container-product">
              <Products
                nombre={products[0].nombre}x
                imagen={products[0].imagen}
                color={products[0].color}
              />
          </div>
        </section>
    </main>
  );
}

export default App;
