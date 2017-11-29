
import React from "react";
import renderer from "react-test-renderer";
import Welcome from "../src/client/components/welcome.jsx";

describe("The Welcome component (snapshot)", () => {
    it("Renders 'hello world'", () => {
        const component = renderer.create(<Welcome />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});