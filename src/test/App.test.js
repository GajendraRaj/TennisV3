import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import TennisGame from "../components/tennis-game";

describe("App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render the title as Tennis Game", () => {
    expect(wrapper.find("h1").text()).toBe("Tennis Game");
  });

  it("should render the TennisGame component", () => {
    expect(wrapper.find(TennisGame).length).toEqual(1);
  });
});
