import React, { useEffect, useState } from "react";
import {
  getFavoriteReposFromLS,
  removeFavoriteRepoFromLS,
  saveFavoriteRepoFromLS,
} from "../helpers/localstorage";

function useFavoriteRepos() {
  const [favoriteReposListIds, setFavoriteReposListIds] = useState<number[]>(
    []
  );

  const favoriteClicked = (repoId: number) => {
    setFavoriteReposListIds(
      favoriteReposListIds.includes(repoId)
        ? removeFavoriteRepoFromLS(repoId)
        : saveFavoriteRepoFromLS(repoId)
    );
  };

  useEffect(() => {
    setFavoriteReposListIds(getFavoriteReposFromLS());
  }, []);

  return [favoriteReposListIds, favoriteClicked] as const;
}

export default useFavoriteRepos;
