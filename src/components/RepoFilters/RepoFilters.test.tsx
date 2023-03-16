import RepoFilters, { RepoFiltersProps } from "./RepoFilters";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const makeSut = (props: Partial<RepoFiltersProps>) => {
  return render(
    <RepoFilters
      languages={[]}
      filterFavorite={false}
      setFilterLanguage={jest.fn()}
      setFilterFavorite={jest.fn()}
      {...props}
    />
  );
};

describe("<RepoFilters />", () => {
  test("Should render RepoFilters with Favorite Filter", () => {
    const { getByText } = makeSut({});
    expect(getByText(/Favorite Only/)).toBeInTheDocument();
  });

  test("Should click the favorite icon and receive boolean value", async () => {
    const setFilterFavorite = jest.fn();
    const { getByTestId } = makeSut({ setFilterFavorite });
    expect(getByTestId("show-only-favorite-icon")).toHaveStyle("color: white");

    await userEvent.click(getByTestId("show-only-favorite-icon"));
    expect(setFilterFavorite).toBeCalledTimes(1);
    expect(setFilterFavorite).toHaveBeenCalledWith(true);
  });

  test("Should render RepoFilters with Language Filter", () => {
    const { getByText, container } = makeSut({});
    expect(getByText(/Language/)).toBeInTheDocument();
    expect(container?.querySelector("select")?.value).toBe("");
  });

  test("Should render RepoFilters with Language Filter and check if select is working", async () => {
    const setFilterLanguage = jest.fn();
    const { getByTestId, container, getByRole } = makeSut({
      languages: ["example1", "example2"],
      setFilterLanguage: setFilterLanguage,
    });

    await userEvent.selectOptions(
      getByTestId("languageSelect"),
      getByRole("option", { name: /example1/ })
    );

    expect(setFilterLanguage).toBeCalledWith("example1");
    expect(container?.querySelector("select")!.value).toBe("example1");

    await userEvent.selectOptions(
      getByTestId("languageSelect"),
      getByRole("option", { name: /example2/ })
    );

    expect(setFilterLanguage).toBeCalledWith("example2");
    expect(container?.querySelector("select")!.value).toBe("example2");
  });
});
