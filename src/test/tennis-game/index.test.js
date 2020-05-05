import React from "react";
import { shallow } from "enzyme";
import TennisGame from "../../components/tennis-game";
import Player from "../../components/tennis-game/player";

describe("TennisGame component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TennisGame />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Player component", () => {
    expect(wrapper.find(Player).length).toEqual(1);
  });
});
