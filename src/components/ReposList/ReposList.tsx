import RepoItem from "../RepoItem/RepoItem";
import { ListStyled, ReposListStyled } from "./RepoList.styled";
import { useState } from "react";
import useLanguages from "../../hooks/useLanguages";
import useFilterBasedOnPreferences from "../../hooks/useFilterBasedOnPreferences";
import RepoFilters from "../RepoFilters/RepoFilters";
import useGetTrendingGithubRepos from "../../hooks/useGetTrendingGithubRepos";
import useFavoriteRepos from "../../hooks/useFavoriteRepos";
import ErrorContainer from "../ErrorContainer/ErrorContainer";
import Loader from "../Loader/Loader";

const ReposList = () => {
  const { data, error, loading } = useGetTrendingGithubRepos();
  const [favoriteReposListIds, favoriteClicked] = useFavoriteRepos();
  const [filterLanguage, setFilterLanguage] = useState<string>("");
  const [filterFavorite, setFilterFavorite] = useState<boolean>(false);
  const languages = useLanguages(data?.items ?? []);
  const displayData = useFilterBasedOnPreferences(
    data?.items ?? [],
    favoriteReposListIds,
    filterFavorite,
    filterLanguage
  );
  const isFavorite = (repoId: number): boolean => {
    return favoriteReposListIds.includes(repoId);
  };

  return (
    <ReposListStyled data-testid="reposList">
      <RepoFilters
        languages={languages}
        filterFavorite={filterFavorite}
        setFilterFavorite={setFilterFavorite}
        setFilterLanguage={setFilterLanguage}
      />
      {loading && <Loader />}
      {displayData && (
        <ListStyled data-testid="list">
          {displayData.map((repo) => (
            <RepoItem
              key={repo.id}
              isFavorite={isFavorite(repo.id)}
              repo={repo}
              favoriteClicked={favoriteClicked}
            />
          ))}
        </ListStyled>
      )}
      {error && <ErrorContainer error={error} />}
    </ReposListStyled>
  );
};

export default ReposList;
