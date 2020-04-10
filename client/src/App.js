import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './styles.css';    // import css file from scss

import Homepage from './pages/home/homepage';
import Search from './pages/safe-google/search';
import Covid19 from './pages/covid19/covid19';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/covid19-nj" component={Covid19} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
