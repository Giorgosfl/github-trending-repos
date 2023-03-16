import ReposList from "./ReposList";
import {
  getByRole,
  getByTestId,
  queryAllByTestId,
  render,
} from "@testing-library/react";
import { mockRepoItem } from "../../mockData/mockRepoItem";
import useGetTrendingGithubRepos from "../../hooks/useGetTrendingGithubRepos";
import userEvent from "@testing-library/user-event";

const mockUseGetTrendingGithubRepos =
  useGetTrendingGithubRepos as jest.MockedFunction<
    typeof useGetTrendingGithubRepos
  >;
jest.mock("../../hooks/useGetTrendingGithubRepos");

const makeSut = () => {
  return render(<ReposList />);
};

describe("<ReposList />", () => {
  // State Tests
  test("Should render ReposList with loading state", () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const { getByText } = makeSut();
    expect(getByText("Loading")).toBeInTheDocument();
  });

  test("Should render ReposList with no loading state", () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: null,
      loading: false,
      error: null,
    });

    const { queryByText } = makeSut();
    expect(queryByText(/Loading/)).toBeNull();
  });

  test("Should render ReposList with error state", () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: null,
      loading: false,
      error: { name: "error", message: "There is an error" },
    });
    const { getByText, queryByTestId } = makeSut();
    expect(getByText(/There is an error/)).toBeInTheDocument();
    expect(queryByTestId("errorContainer")).toBeInTheDocument();
  });

  test("Should render ReposList with no error state", () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: null,
      loading: false,
      error: null,
    });

    const { queryByTestId } = makeSut();
    expect(queryByTestId("errorContainer")).toBeNull();
  });

  test("Should render ReposList data container", () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: { total_count: 0, items: [], incomplete_results: true },
      loading: false,
      error: null,
    });

    const { queryByTestId } = makeSut();
    expect(queryByTestId("list")).toBeInTheDocument();
  });

  test("Should render ReposList data container with 2 RepoItem components", () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: {
        total_count: 2,
        items: [mockRepoItem, { ...mockRepoItem, id: 2 }],
        incomplete_results: true,
      },
      loading: false,
      error: null,
    });

    const { queryAllByTestId } = makeSut();
    expect(queryAllByTestId("repoItem").length).toBe(2);
  });

  test("Should render ReposList finished loading and no error", () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: { total_count: 0, items: [], incomplete_results: true },
      loading: false,
      error: null,
    });

    const { queryByTestId } = makeSut();
    expect(queryByTestId("list")).toBeInTheDocument();
  });

  test("Should render ReposList data container with 2 RepoItem components and use Favorite Filter", async () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: {
        total_count: 2,
        items: [
          { ...mockRepoItem, id: 1 },
          { ...mockRepoItem, id: 2 },
        ],
        incomplete_results: true,
      },
      loading: false,
      error: null,
    });

    const { getAllByTestId, queryAllByTestId, getByTestId } = makeSut();

    expect(queryAllByTestId("repoItem").length).toBe(2);

    const firstRepoItem = getAllByTestId("repo-item-favorite-icon")[0];
    await userEvent.click(firstRepoItem);

    const showOnlyFavoriteFilter = getByTestId("show-only-favorite-icon");
    await userEvent.click(showOnlyFavoriteFilter);

    expect(queryAllByTestId("repoItem").length).toBe(1);
  });

  test("Should render ReposList data container with 2 RepoItem components and use Language Filter", async () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: {
        total_count: 2,
        items: [
          { ...mockRepoItem, id: 1, language: "Javascript" },
          { ...mockRepoItem, id: 2, language: "Python" },
        ],
        incomplete_results: true,
      },
      loading: false,
      error: null,
    });

    const { queryAllByTestId, getByTestId, getByRole } = makeSut();

    expect(queryAllByTestId("repoItem").length).toBe(2);

    await userEvent.selectOptions(
      getByTestId("languageSelect"),
      getByRole("option", { name: /Javascript/ })
    );

    expect(queryAllByTestId("repoItem").length).toBe(1);

    await userEvent.selectOptions(
      getByTestId("languageSelect"),
      getByRole("option", { name: "Python" })
    );

    expect(queryAllByTestId("repoItem").length).toBe(1);

    await userEvent.selectOptions(
      getByTestId("languageSelect"),
      getByRole("option", { name: "None" })
    );

    expect(queryAllByTestId("repoItem").length).toBe(2);
  });
});
