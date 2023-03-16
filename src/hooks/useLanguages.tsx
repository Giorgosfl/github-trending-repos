import React, { useEffect, useState } from "react";
import { Item } from "../typings/Item";

function useLanguages(repos: Item[]) {
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    if (!repos.length) {
      return;
    }

    const programmingLanguages = repos
      .map((repo) => repo.language || "")
      .filter((language) => !!language);

    const uniqueProgrammingLanguages = [...new Set(programmingLanguages)];
    setLanguages(uniqueProgrammingLanguages);
  }, [repos]);

  return languages;
}

export default useLanguages;
