import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import Nav from '../nav/nav';

describe('Navbar Component Test', () => {
  it('Renders NavBar', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Nav />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});