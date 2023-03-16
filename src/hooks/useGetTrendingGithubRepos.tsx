import { useEffect, useState } from "react";
import { GithubApiResponse } from "../typings/GithubApiResponse";

const getPreviousWeekDate = (): string => {
  const previousWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  return previousWeek.toISOString().slice(0, 10);
};

interface State {
  data: GithubApiResponse | null;
  error: Error | null;
  loading: boolean;
}

const useGetTrendingGithubRepos = () => {
  const previousWeekDate = getPreviousWeekDate();
  const [state, setState] = useState<State>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    window
      .fetch(
        `https://api.github.com/search/repositories?q=created:>${previousWeekDate}&sort=stars&order=desc`
      )
      .then((res) => res.json())
      .then((data) => setState({ data: data, error: null, loading: false }))
      .catch((e) => setState({ data: null, error: e, loading: false }));
  }, []);

  return state;
};

export default useGetTrendingGithubRepos;
