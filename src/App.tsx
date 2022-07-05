import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RoutesMain from './routes/routes';

import Header from './componets/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <RoutesMain />
  </BrowserRouter>
);

export default App;