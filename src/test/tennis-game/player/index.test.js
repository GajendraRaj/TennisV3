import React from "react";
import { shallow } from "enzyme";
import Player from "../../../components/tennis-game/player";

describe("Player component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Player />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the first player name as Player 1", () => {
    expect(wrapper.find("div").text()).toBe("Player 1");
  });
});
