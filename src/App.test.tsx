import { render } from "@testing-library/react";
import App from "./App";
import useGetTrendingGithubRepos from "./hooks/useGetTrendingGithubRepos";

const mockUseGetTrendingGithubRepos =
  useGetTrendingGithubRepos as jest.MockedFunction<
    typeof useGetTrendingGithubRepos
  >;
jest.mock("./hooks/useGetTrendingGithubRepos");

const makeSut = () => {
  return render(<App />);
};

describe("<App />", () => {
  test("Should render App component", () => {
    mockUseGetTrendingGithubRepos.mockReturnValue({
      data: { total_count: 0, items: [], incomplete_results: true },
      loading: false,
      error: null,
    });
    const { getByTestId } = makeSut();
    expect(getByTestId("App")).toBeInTheDocument();
  });
});
