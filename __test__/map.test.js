import { mount } from 'enzyme';
import React from 'react';
import Map from '../client/src/components/Map.jsx';

describe('Map Components Test', () => {
  test('Map has className mainMap', () => {
    const map = mount(
      <Map />
      );
    const div = map.find('.mainMap');
    expect(div.length).toBe(1);
  });
});