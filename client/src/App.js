import React from 'react';
import Todos from './containers/Todos';

import Layout from './components/Layout/Layout';

function App() {
  return (
      <Layout className="layout">
        <Todos />
      </Layout>
  );
}

export default App;
