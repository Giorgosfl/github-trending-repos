import ErrorContainer, { ErrorContainerProps } from "./ErrorContainer";
import { render } from "@testing-library/react";

const makeSut = (props: Partial<ErrorContainerProps>) => {
  return render(
    <ErrorContainer
      error={{ name: "Error", message: "There is an Error" }}
      {...props}
    />
  );
};

describe("<ErrorContainer />", () => {
  test("Should render ErrorContainer", () => {
    const { getByText } = makeSut({});
    expect(getByText("There is an Error")).toBeInTheDocument();
  });
});
