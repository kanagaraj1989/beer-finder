import React from 'react';
import ReactDOM from 'react-dom';
import DashboardComponent from './DashboardComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

