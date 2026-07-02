import { getNewsSearch } from '@/api'
import RandomArticle from './RandomArticle'
import { removeDuplicateData } from '@/utils'
import { News } from '@/types';

const RandomNews = async () => {
  const randomNews: News[] = await getNewsSearch("random news");

  // Test sans filtre
  const filterArticles = randomNews;

  return (
    <div className="mt-4 w-[450px] border-l border-gray-300">
      <h1 className="pl-2 text-2xl font-bold underline">Random News</h1>
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title ?? 'article'}-${idx}`}>
          <RandomArticle data={article} />
        </div>
      ))}
    </div>
  );
};

export default RandomNews;
