import { createElement } from "lwc";
import OtherComponents from "c/otherComponents";

describe("c-other-components", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("TODO: test case generated by CLI command, please fill in test logic", () => {
    const element = createElement("c-other-components", {
      is: OtherComponents
    });
    document.body.appendChild(element);
    expect(1).toBe(1);
  });
});
