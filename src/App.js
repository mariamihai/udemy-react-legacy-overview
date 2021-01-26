import { Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/" component={BurgerBuilder} exact />
      </Layout>
    </div>
  );
}

export default App;