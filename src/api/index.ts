import { News } from '@/types';

type ApiResponse = {
  articles: News[];
};

export const getNewsTopHeadlines = async (): Promise<News[]> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Erreur API TopHeadlines:", res.status, errorText);
    throw new Error("Erreur API TopHeadlines");
  }

  const data: ApiResponse = await res.json();

  if (!data.articles) {
    console.error("Données manquantes dans getNewsTopHeadlines:", data);
    return [];
  }

  return data.articles;
};

export const getNewsSearch = async (query: string): Promise<News[]> => {
  const res = await fetch(
`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,    { cache: "no-store" }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Erreur API NewsSearch:", res.status, errorText);
    throw new Error("Erreur API NewsSearch");
  }

  const data: ApiResponse = await res.json();

  if (!data.articles) {
    console.error("Données manquantes dans getNewsSearch:", data);
    return [];
  }
  console.log("Résultat brut API NewsSearch:", data);

  return data.articles;
};



