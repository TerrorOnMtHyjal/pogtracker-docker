import React from "react";
import { shallow } from "enzyme";
import ReplayIDForm from "../components/ReplayIDForm";

const defaultProps = {
  input: "1337",
  setInput: () => {},
  processForm: () => {}
};

describe("<ReplayIDForm />", () => {
  it("renders", () => {
    shallow(<ReplayIDForm {...defaultProps} />);
  });

  it("runs props.setInput on text input field change", () => {
    const setInputMock = jest.fn();
    const mockEvent = { target: { value: "test input" } };
    const wrapper = shallow(
      <ReplayIDForm {...defaultProps} setInput={setInputMock} />
    );

    wrapper.find("input[type='text']").simulate("change", mockEvent);

    expect(setInputMock).toBeCalledTimes(1);
    expect(setInputMock).toBeCalledWith("test input");
  });

  it("runs props.processForm on form submission", () => {
    const processFormMock = jest.fn();
    const wrapper = shallow(
      <ReplayIDForm {...defaultProps} processForm={processFormMock} />
    );

    wrapper.find("form").simulate("submit");
    expect(processFormMock).toBeCalledTimes(1);
  });
});
