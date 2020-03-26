import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './styles.css';    // import css file from scss

import Homepage from './pages/home/homepage';
import Search from './pages/safe-google/search';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search" component={Search} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
