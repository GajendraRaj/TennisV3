import React from "react";
import { shallow } from "enzyme";
import Score from "../../../components/tennis-game/score";

describe("Score component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Score />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the heading as Score", () => {
    expect(wrapper.find("h5").text()).toBe("Score");
  });

  it("should display default score as 0 on game start", () => {
    expect(wrapper.find("label").text()).toEqual("0");
  });
});
