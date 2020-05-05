import React from "react";
import { shallow, mount } from "enzyme";
import TennisGame from "../../components/tennis-game";
import Player from "../../components/tennis-game/player";
import Score from "../../components/tennis-game/score";

describe("TennisGame component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TennisGame />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  it("should render the Player component", () => {
    expect(wrapper.find(Player).length).toEqual(2);
  });

  it("should render the Score component", () => {
    expect(wrapper.find(Score).length).toEqual(1);
  });
});

describe("TennisGame functionality", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TennisGame />);
  });

  it("should render score as '15, 0' when player 1 scores once", () => {
    const score = wrapper.find("Score").find("label");
    const scoreButton1 = wrapper.find("Player").at(0).find("button");

    scoreButton1.simulate("click");
    expect(score.text()).toEqual("15, 0");
  });
});
