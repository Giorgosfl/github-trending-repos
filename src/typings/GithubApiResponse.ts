import { Item } from "./Item";

export interface GithubApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Item[] | [];
}
