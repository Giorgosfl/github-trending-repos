export const saveFavoriteRepoFromLS = (repoId: number): number[] => {
  const favoriteReposListIds = getFavoriteReposFromLS();

  if (!favoriteReposListIds.includes(repoId)) {
    favoriteReposListIds.push(repoId);
    localStorage.setItem(
      "favoriteReposListIds",
      JSON.stringify(favoriteReposListIds)
    );
  }

  return favoriteReposListIds;
};

export const removeFavoriteRepoFromLS = (repoId: number): number[] => {
  const favoriteReposListIds = getFavoriteReposFromLS().filter(
    (id) => id !== repoId
  );
  localStorage.setItem(
    "favoriteReposListIds",
    JSON.stringify(favoriteReposListIds)
  );

  return favoriteReposListIds;
};
export const getFavoriteReposFromLS = (): number[] => {
  return JSON.parse(
    localStorage.getItem("favoriteReposListIds") || "[]"
  ) as number[];
};
