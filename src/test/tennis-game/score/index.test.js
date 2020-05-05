import React from "react";
import { shallow } from "enzyme";
import Score from "../../../components/tennis-game/score";
import checkPropTypes from "check-prop-types";

describe("Score component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Score scores={0} />);
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

  it("Should throw error message if there is no scores prop", () => {
    const errorMsg =
      "Failed prop type: The prop `scores` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Score.propTypes,
      { scores: undefined },
      "prop",
      Score.scores
    );

    expect(result).toEqual(errorMsg);
  });
});
