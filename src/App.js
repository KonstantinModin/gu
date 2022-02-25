import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Result from './Result';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:300,400,500,550,600', 'sans-serif'],
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/www.gosuslugi.ru/covid-cert/status"
          element={<Result />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
