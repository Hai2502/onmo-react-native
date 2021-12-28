import React from 'react';
import { render, fireEvent, waitFor , screen} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import HomeScreen from './homeScreen';


test('rerender correctly',() =>{
  const tree = renderer.create(<HomeScreen/>).toJSON;
  expect(tree).toMatchSnapshot();
});