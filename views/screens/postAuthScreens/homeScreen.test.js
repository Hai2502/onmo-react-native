import React from 'react';
import { render, fireEvent, waitFor , screen} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import HomeScreen from './homeScreen';
import { Button } from 'react-native';
import { userSignout } from "./homeScreen";


describe('HomeScreen calls userSignout', () =>{
  it('renders correctly', async () => {
    renderer.create(<HomeScreen />);
   });
   it('should call onPress', () => {
    const mockOnPress = jest.fn();
    const component = renderer.create(<Button 
        title="LOG OUT" 
        onPress={mockOnPress}           
    />)
    const instance = component.getInstance();
    instance.userSignout(); 

    expect(mockOnPress).toHaveBeenCalled();
  });

})
