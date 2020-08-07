import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Welcome} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/repository/:full_name+" component={Repository} />
    </BrowserRouter>
  );
};

export default Routes;
