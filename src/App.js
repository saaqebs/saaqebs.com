import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles.css';    // import css file from scss

import Homepage from './pages/home/homepage';
import Search from './pages/safe-google/search';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Homepage} exact/>
          <Route path="/search" component={Search}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
