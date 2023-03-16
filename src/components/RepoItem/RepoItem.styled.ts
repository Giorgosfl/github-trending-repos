import styled from "styled-components";
import { Favorite } from "@styled-icons/material-outlined/Favorite";
import { Star } from "@styled-icons/boxicons-regular/Star";
import { Github } from "@styled-icons/boxicons-logos/Github";

export const FavoriteIcon = styled(Favorite)<{ $isFavorite: boolean }>`
  width: 2rem;
  height: 2rem;
  color: ${(props) => (props.$isFavorite ? "white" : "#2C3333")};

  &:hover {
    cursor: pointer;
    color: #0e8388;
  }
`;

export const StarIcon = styled(Star)`
  width: 1rem;
  height: 1rem;
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const GithubIcon = styled(Github)`
  width: 2rem;
  height: 2rem;

  &:hover {
    cursor: pointer;
    color: #0e8388;
  }
`;

export const RepoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2e4f4f;
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 0.75rem;
  color: #cbe4de;
`;

export const RepoNameContainer = styled.div`
  font-weight: bold;
  font-size: 1.75rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
`;

export const RepoDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
`;

export const RepoActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
