import RepoItem, { RepoItemProps } from "./RepoItem";
import { fireEvent, render } from "@testing-library/react";
import { mockRepoItem } from "../../mockData/mockRepoItem";

const makeSut = (props: Partial<RepoItemProps>) => {
  return render(
    <RepoItem
      repo={mockRepoItem}
      isFavorite={true}
      favoriteClicked={jest.fn()}
      {...props}
    />
  );
};

describe("<RepoItem />", () => {
  test("Should render RepoItem with demo data", () => {
    const { getByText } = makeSut({});
    expect(getByText(mockRepoItem.name)).toBeInTheDocument();
  });

  test("Should click the favorite icon and receive the demoRepo id", () => {
    const favoriteClicked = jest.fn();
    const { getByTestId } = makeSut({ favoriteClicked });

    fireEvent.click(getByTestId("repo-item-favorite-icon"));

    expect(favoriteClicked).toHaveBeenCalledWith(mockRepoItem.id);
    expect(favoriteClicked).toBeCalledTimes(1);
  });
});
