import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../app/store';
import Rockets from '../rockets/Rockets';

describe('Rockets Component test', () => {
  it('Renders Mission Row', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
