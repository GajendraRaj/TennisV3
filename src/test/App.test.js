import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

describe("App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render the title as Tennis Game", () => {
    expect(wrapper.find("h1").text()).toBe("Tennis Game");
  });
});
