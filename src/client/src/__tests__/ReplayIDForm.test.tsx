import React from 'react';
import { shallow } from 'enzyme';
import ReplayIDForm from '../components/ReplayIDForm';

const defaultProps = {
  input: '1337',
  setInput: () => {},
  processForm: () => {}
};

describe('ReplayIDForm', () => {
  it('renders', () => {
    shallow(<ReplayIDForm {...defaultProps}/>)
  });

  it('runs setInput on text input field change', () => {
    const setInputMock = jest.fn();
    const mockEvent = { target: { value: 'test input'}};
    const wrapper = shallow(<ReplayIDForm {...defaultProps} setInput={setInputMock}/>);

    const input = wrapper.find("input[type='text']");

    input.simulate('change', {
      target: {
        value: 'test input'
      }
    });

    expect(setInputMock).toBeCalledTimes(1);
    expect(setInputMock).toBeCalledWith('test input');
  });
});