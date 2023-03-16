import { Item } from "../../typings/Item";
import {
  FavoriteIcon,
  GithubIcon,
  RepoActionContainer,
  RepoDescriptionContainer,
  RepoItemContainer,
  RepoNameContainer,
  StarIcon,
  StarsContainer,
} from "./RepoItem.styled";

export interface RepoItemProps {
  repo: Item;
  isFavorite: boolean;
  favoriteClicked: (repoId: number) => void;
}

const RepoItem = ({ repo, isFavorite, favoriteClicked }: RepoItemProps) => {
  return (
    <RepoItemContainer data-testid="repoItem">
      <StarsContainer>
        <StarIcon />
        {repo.stargazers_count}
      </StarsContainer>
      <RepoNameContainer>{repo.name}</RepoNameContainer>
      <RepoDescriptionContainer>{repo.description}</RepoDescriptionContainer>
      <RepoActionContainer>
        <FavoriteIcon
          data-testid="repo-item-favorite-icon"
          $isFavorite={isFavorite}
          onClick={() => favoriteClicked(repo.id)}
        />
        <GithubIcon
          data-testid="github-icon"
          onClick={() => window.open(repo.html_url, "_blank")}
        />
      </RepoActionContainer>
    </RepoItemContainer>
  );
};

export default RepoItem;
