import { Item } from "../typings/Item";

function useFilterBasedOnPreferences(
  repos: Item[],
  favoriteReposListIds: number[],
  filterFavorite: boolean,
  filterLanguage: string
) {
  let filteredData = [...repos];

  if (filterFavorite) {
    filteredData = filteredData.filter((item) =>
      favoriteReposListIds.includes(item.id)
    );
  }

  if (filterLanguage) {
    filteredData = filteredData.filter(
      (item) => item.language === filterLanguage
    );
  }

  return filteredData;
}

export default useFilterBasedOnPreferences;
