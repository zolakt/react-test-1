import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  let colors = ['#123', '#987'];
  let text = 'Welcome Test';

  const div = document.createElement('div');
  ReactDOM.render(<Header colors={ colors } text={ text} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
