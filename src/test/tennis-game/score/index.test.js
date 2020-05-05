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
    expect(wrapper.find("div").text()).toBe("Score");
  });
});
