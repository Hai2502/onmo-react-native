import React from 'react';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import HomeScreen from './homeScreen';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('HomeScreen calls userSignout', () =>{
  it('renders correctly', async () => {
    renderer.create(<HomeScreen />);
   });
   it('should call onPress', () => {
    const mockFunc = jest.fn();
    const component = shallow(<HomeScreen onPress={mockFunc} />);    
    component.dive().simulate('press');
    expect(mockFunc).toHaveBeenCalled();
  });

})
