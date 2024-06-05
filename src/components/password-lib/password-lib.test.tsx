import { render, fireEvent } from "@testing-library/react";
import { PasswordLib } from "./password-lib";
import "@testing-library/jest-dom";

describe("PasswordLib", () => {
  test("validates special character requirement", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <PasswordLib options={["has-one-or-more-special-characters"]} />
    );
    const input = getByPlaceholderText("Enter your password");
    fireEvent.change(input, { target: { value: "Password!" } });

    const validationItem = getByTestId(
      "validation-item-has-one-or-more-special-characters"
    );
    expect(validationItem).toHaveStyle("color: green");
  });

  test("validates number requirement", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <PasswordLib options={["has-a-number-digit"]} />
    );
    const input = getByPlaceholderText("Enter your password");
    fireEvent.change(input, { target: { value: "Password1!" } });

    const validationItem = getByTestId("validation-item-has-a-number-digit");
    expect(validationItem).toHaveStyle("color: green");
  });

  test("validates uppercase letter requirement", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <PasswordLib options={["has-an-uppercase-letter"]} />
    );
    const input = getByPlaceholderText("Enter your password");
    fireEvent.change(input, { target: { value: "password1!" } });

    const validationItem = getByTestId(
      "validation-item-has-an-uppercase-letter"
    );
    expect(validationItem).toHaveStyle("color: red");
  });

  test("validates no consecutive letters requirement", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <PasswordLib options={["has-no-consecutive-letters"]} />
    );
    const input = getByPlaceholderText("Enter your password");
    fireEvent.change(input, { target: { value: "Pasword1!" } });

    const validationItem = getByTestId(
      "validation-item-has-no-consecutive-letters"
    );
    expect(validationItem).toHaveStyle("color: green");
  });
});
