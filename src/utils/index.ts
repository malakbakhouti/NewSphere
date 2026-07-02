import { News } from "@/types";

export const removeDuplicateData = (articles: News[]): News[] => {
  if (!articles || !Array.isArray(articles)) {
    return [];
  }

  const filteredArticles = articles.filter(
    (article) => article.source?.id !== null
  );

  return filteredArticles;
};
