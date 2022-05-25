import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import Pill from "../src/lib/components/pill/Pill.svelte";

describe("Button", () => {
  it("shows proper heading when rendered", () => {
    const { getByText } = render(Pill, { label: "Static Tag" });
    expect(getByText("Static Tag")).toBeInTheDocument();
  });
});
