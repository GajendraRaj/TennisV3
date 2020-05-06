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
  let wrapper, score, scoreButton1;
  beforeEach(() => {
    wrapper = mount(<TennisGame />);
    score = wrapper.find("Score").find("label");
    scoreButton1 = wrapper.find("Player").at(0).find("button");
  });

  it("should render score as '15, 0' when player 1 scores once", () => {
    scoreButton1.simulate("click");
    expect(score.text()).toEqual("15, 0");
  });

  it("should render score as '30, 0' when player 1 scores twice", () => {
    clickHandler(scoreButton1, 2);
    expect(score.text()).toEqual("30, 0");
  });

  it("should render score as '40, 0' when player 1 scores thrice", () => {
    clickHandler(scoreButton1, 3);
    expect(score.text()).toEqual("40, 0");
  });
});

function clickHandler(button, times) {
  for (let index = 0; index < times; index++) {
    button.simulate("click");
  }
}
