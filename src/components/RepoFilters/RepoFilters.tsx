import {
  FavoriteIcon,
  FilterContainer,
  FiltersContainer,
  LanguagesSelect,
} from "./RepoFilters.styled";

export interface RepoFiltersProps {
  languages: string[];
  filterFavorite: boolean;
  setFilterFavorite: (filterFavorite: boolean) => void;
  setFilterLanguage: (language: string) => void;
}

const RepoFilters = ({
  languages,
  filterFavorite,
  setFilterLanguage,
  setFilterFavorite,
}: RepoFiltersProps) => {
  return (
    <FiltersContainer>
      <FilterContainer>
        Favorite Only
        <FavoriteIcon
          data-testid="show-only-favorite-icon"
          $checked={filterFavorite}
          onClick={() => setFilterFavorite(!filterFavorite)}
        />
      </FilterContainer>
      <FilterContainer>
        Language
        <LanguagesSelect
          id="languageSelect"
          data-testid="languageSelect"
          onChange={(event) => setFilterLanguage(event.target.value)}
        >
          <option value="">None</option>
          {languages.map((lang) => (
            <option value={lang} key={lang}>
              {lang}
            </option>
          ))}
        </LanguagesSelect>
      </FilterContainer>
    </FiltersContainer>
  );
};

export default RepoFilters;
