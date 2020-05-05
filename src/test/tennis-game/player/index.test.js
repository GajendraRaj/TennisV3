import React from "react";
import { shallow } from "enzyme";
import Player from "../../../components/tennis-game/player";

describe("Player component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Player name="Player 1" />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the first player name as Player 1", () => {
    expect(wrapper.find("h5").text()).toBe("Player 1");
  });

  it("should render button for scoring", () => {
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should render the Second player name as Player 2", () => {
    const wrapper = shallow(<Player name="Player 2" />);
    expect(wrapper.find("h5").text()).toBe("Player 2");
  });
});
