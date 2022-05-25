import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import Button from "../src/lib/components/button/Button.svelte";

describe("Button", () => {
  it("shows proper heading when rendered", () => {
    const { getByText } = render(Button, { label: "UPLOAD" });
    expect(getByText("UPLOAD")).toBeInTheDocument();
  });
});
