import styled from "styled-components";
import { Favorite } from "@styled-icons/material-outlined/Favorite";

export const FavoriteIcon = styled(Favorite)<{ $checked: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => (props.$checked ? "rgb(0,117,255)" : "white")};
  cursor: pointer;
`;

export const FiltersContainer = styled.div`
  color: #cbe4de;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.5rem;
  background-color: #2e4f4f;
  border-radius: 0.5rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const LanguagesSelect = styled.select`
  outline: 0;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.125rem;
`;
