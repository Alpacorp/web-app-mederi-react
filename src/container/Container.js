import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../componentes/Home';
import About from '../componentes/About';
import Services  from '../componentes/Services';
import { Schedule } from '../componentes/Schedule';
import { Contact } from '../componentes/Contact'
import { Terms } from '../componentes/Terms';
import { Doctor } from '../componentes/Doctor';
import Register from '../componentes/Register';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/schedule' component={Schedule} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/doctor' component={Doctor} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;