/**
 * @format
 */

import 'react-native';
import React from 'react';
import Test1 from '../Test1';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Testpage Component', () => {
  it('renders correctly', () => {
    renderer.create(<Test1 />);
  });

  test('test sample function', () => {
    let test1comp = renderer.create(<Test1 />).getInstance();
    expect(test1comp?.sampleFunction(1, 2)).toEqual(3);
  });


  test('test sample function1', () => {
    let test1comp = renderer.create(<Test1 />).getInstance();
    expect(test1comp?.sampleFunction1(1, 2)).toEqual(2);
  });

});
