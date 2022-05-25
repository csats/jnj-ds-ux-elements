import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Pill from "../src/lib/components/pill/Pill.svelte";

describe("Pill", () => {
  it("shows proper heading when rendered", () => {
    const test = render(Pill, {
      label: "Static Tag",
      variant: "Static Tag",
      size: 1,
      useHover: true,
    });
  });
});
