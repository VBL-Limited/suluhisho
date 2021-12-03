import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from './routes/router';
function App() {
  let routeComponents: any;

  routeComponents = Routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <>
      <BrowserRouter>
        <div style={{ margin: '0px 0px 0px 0px !important' }}>{routeComponents}</div>
      </BrowserRouter>
    </>
  );
}

export default App;
