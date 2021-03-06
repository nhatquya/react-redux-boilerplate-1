/**
 * App routes
 * @module core/routes
 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../components/App';
import HomeView from '../routes/home-view/components/HomeView';
import GitHubReposView from '../routes/github-repos-view/components/GitHubReposView';
import D3VisitorDashboardView from
        '../routes/d3-view/components/D3VisitorDashboardView';

// List route configuration
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="/github-repos" component={GitHubReposView} />
    <Route path="/d3-visitor-dashboard" component={D3VisitorDashboardView} />
  </Route>
);

// Export the app routes
export default routes;
